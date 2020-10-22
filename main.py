import os

from flask import Flask, render_template, redirect, request, abort
from flask_login import LoginManager, login_user, logout_user, login_required
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField, BooleanField
from wtforms.validators import DataRequired

from data import db_session, items, users, quests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'GusStory.ru'
db_session.global_init("db/blogs.sqlite")
login_manager = LoginManager()
login_manager.init_app(app)
count_items = 0


@login_manager.user_loader
def load_user(user_id):
    sessions = db_session.create_session()
    return sessions.query(users.User).get(user_id)


class LoginForm(FlaskForm):
    login = StringField("Логин", validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    remember_me = BooleanField('Запомнить меня')
    submit = SubmitField('Войти')


class RegisterForm(FlaskForm):
    name = StringField('Имя', validators=[DataRequired()])
    surname = StringField('Фамилия', validators=[DataRequired()])
    login = StringField('Логин', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    password_again = PasswordField('Повторите пароль', validators=[DataRequired()])
    submit = SubmitField('Зарегистрироваться')


class ItemsForm(FlaskForm):
    title = StringField('Заголовок', validators=[DataRequired()])
    main_characteristics = TextAreaField('Краткое описание достопримечательности')
    content = TextAreaField('Описание достопримечательности')
    submit = SubmitField('Применить')


class EditForm(FlaskForm):
    title = StringField('Заголовок', validators=[DataRequired()])
    main_characteristics = TextAreaField('Краткое описание достопримечательности')
    submit = SubmitField('Применить')


class QuestsForm(FlaskForm):
    name = StringField('Название квеста', validators=[DataRequired()])
    points = TextAreaField('Описание квеста')
    submit = SubmitField('Применить')


class LengthError(Exception):
    error = 'Пароль должен от 8 до 15 символов!'


class LetterError(Exception):
    error = 'В пароле должна быть хотя бы одна буква!'


class DigitError(Exception):
    error = 'В пароле должна быть хотя бы одна цифра!'


@app.route('/profile')
def profile():
    return render_template("profile.html")


@app.route('/logout')
def logout():
    logout_user()
    return redirect('/')


def reformat(s):
    return '\n'.join([s[i].strip() + ': ' + s[i + 1].strip() for i in range(0, len(s) - 1, 2)])


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        result = check_password(form.password.data)
        if result != 'OK':
            return render_template('register.html',
                                   title='Регистрация',
                                   form=form, email_error="OK", again_password_error="OK",
                                   password_error=result)
        if form.password.data != form.password_again.data:
            return render_template('register.html', title='Регистрация',
                                   form=form, email_error="OK", password_error="OK",
                                   again_password_error="Пароли не совпадают")
        sessions = db_session.create_session()
        if sessions.query(users.User).filter(users.User.login == form.login.data).first():
            return render_template('register.html', title='Регистрация', form=form,
                                   password_error="OK", again_password_error="OK",
                                   email_error="Такой пользователь уже есть")
        user = users.User()
        user.login = form.login.data.lower()
        user.name = form.name.data
        user.surname = form.surname.data
        user.set_password(form.password.data)
        sessions.add(user)
        sessions.commit()
        return redirect('/login')
    return render_template('register.html', title='Регистрация', form=form, email_error="OK",
                           password_error="OK", again_password_error="OK")


def check_password(password):
    flags = [0, 0]
    for element in password:
        if element.isdigit():
            flags[0] = 1
        elif element.isalpha():
            flags[1] = 1
    try:
        if flags[1] == 0:
            raise LetterError
        if flags[0] == 0:
            raise DigitError
        if len(password) < 8 or len(password) > 15:
            raise LengthError
        return 'OK'
    except (LengthError, LetterError, DigitError) as ex:
        return ex.error


@app.route('/items', methods=['GET', 'POST'])
@login_required
def add_items():
    global count_items
    form = ItemsForm()
    if form.validate_on_submit():
        sessions = db_session.create_session()
        item = items.Items()
        item.title = form.title.data
        item.content = form.content.data
        f = request.files.getlist("file")
        os.mkdir('static/images/item' + str(count_items + 1))
        count_photo = 0
        photo = request.files['file1']
        photo.save('static/img/image' + str(count_items) + '.png')
        item.photo = '/static/img/image' + str(count_items) + '.png'
        for x in f:
            x.save('static/images/item' + str(count_items + 1) + '/image' + str(count_photo) + '.png')
            item.image = 'static/images/item' + str(count_items + 1)
            count_photo += 1
        item.count_photo = count_photo
        sessions.add(item)
        sessions.commit()
        count_items += 1
        return redirect('/')
    return render_template('items.html', title='Добавление товара', form=form)


@app.route('/items/<int:id>', methods=['GET', 'POST'])
@login_required
def edit_items(id):
    form = EditForm()
    if request.method == 'GET':
        sessions = db_session.create_session()
        item = sessions.query(items.Items).filter(items.Items.id == id).first()
        form.title.data = item.title
        form.content.data = item.content
    if form.validate_on_submit():
        sessions = db_session.create_session()
        item = sessions.query(items.Items).filter(items.Items.id == id).first()
        item.title = form.title.data
        item.content = form.content
        sessions.commit()
        return redirect('/')
    return render_template('editor.html', title='Редактирование товара', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        sessions = db_session.create_session()
        user = sessions.query(users.User).filter(users.User.login ==
                                                 form.login.data.lower()).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember_me.data)
            return redirect('/')
        return render_template('login.html', message='Неправильный логин или пароль', form=form)
    return render_template('login.html', title='Авторизация', form=form)


@app.route('/')
def index():
    sessions = db_session.create_session()
    item = sessions.query(items.Items)
    return render_template("index.html", items=item)


@app.route('/add_quests', methods=['GET', 'POST'])
@login_required
def add_quest():
    form = QuestsForm()
    if form.validate_on_submit():
        sessions = db_session.create_session()
        quest = quests.Quests()
        quest.name = form.name.data
        quest.points = form.points.data
        sessions.add(quest)
        sessions.commit()
        return redirect('/')
    return render_template('add_quests.html', title='Добавление квеста', form=form)


@app.route('/quests')
def gus_quests():
    sessions = db_session.create_session()
    quest = sessions.query(quests.Quests)
    return render_template("quests.html", quests=quest)


@app.route('/about_item/<int:id>', methods=['GET', 'POST'])
def about_item(id):
    sessions = db_session.create_session()
    item = sessions.query(items.Items).get(id)
    return render_template("single_item.html", item=item)


def main():
    global count_items
    sessions = db_session.create_session()
    count_items += len(list(sessions.query(items.Items)))
    sessions.close()
    app.run()


if __name__ == '__main__':
    main()
