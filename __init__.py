import datetime
import os
import smtplib
from email.header import Header
from email.mime.text import MIMEText
from random import randint

from flask import Flask, render_template, redirect, request
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField, BooleanField, IntegerField
from wtforms.validators import DataRequired

from data import db_session, items, users, quests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'GusStory.ru'
db_session.global_init("db/blogs.sqlite")
login_manager = LoginManager()
login_manager.init_app(app)
count_items = 0
code = 0
kol = 0
flag = 0
name = 0
mail_to = ''


@login_manager.user_loader
def load_user(user_id):
    sessions = db_session.create_session()
    return sessions.query(users.User).get(user_id)


class LoginForm(FlaskForm):
    email = StringField("Электронная почта", validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    remember_me = BooleanField('Запомнить меня')
    submit = SubmitField('Войти')


class RegisterForm(FlaskForm):
    name = StringField('Имя', validators=[DataRequired()])
    surname = StringField('Фамилия', validators=[DataRequired()])
    email = StringField('Электронная почта', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    password_again = PasswordField('Повторите пароль', validators=[DataRequired()])
    submit = SubmitField('Зарегистрироваться')


class EditProfile(FlaskForm):
    name = StringField('Имя', validators=[DataRequired()])
    surname = StringField('Фамилия', validators=[DataRequired()])
    email = StringField('Электронная почта', validators=[DataRequired()])
    submit = SubmitField('Применить')


class ItemsForm(FlaskForm):
    title = StringField('Заголовок', validators=[DataRequired()])
    content = TextAreaField('Описание достопримечательности')
    year = StringField('Год открытия достопримечательности')
    submit = SubmitField('Применить')


class EditForm(FlaskForm):
    title = StringField('Заголовок', validators=[DataRequired()])
    year = StringField('Год создания', validators=[DataRequired()])
    content = TextAreaField('Описание достопримечательности')
    submit = SubmitField('Применить')


class QuestsForm(FlaskForm):
    name = StringField('Название квеста', validators=[DataRequired()])
    points = TextAreaField('Описание квеста')
    kol_vo = IntegerField("Количество вопросов")
    ok = SubmitField("Ок")
    questions = TextAreaField('Вопрос')
    answers = TextAreaField('Ответ')
    submit = SubmitField('Применить')


class AnswerForm(FlaskForm):
    answer = StringField("Ответ")
    submit = SubmitField("Ответить")


class RecoveryForm(FlaskForm):
    email = StringField("Введите почту", validators=[DataRequired()])
    kod = StringField("Введите код", validators=[DataRequired()])
    new_password = PasswordField("Введите новый пароль", validators=[DataRequired()])
    repeat_new_password = PasswordField("Повторите новый пароль", validators=[DataRequired()])
    submit = SubmitField("Отправить")


class LengthError(Exception):
    error = 'Пароль должен от 8 до 15 символов!'


class LetterError(Exception):
    error = 'В пароле должна быть хотя бы одна буква!'


class DigitError(Exception):
    error = 'В пароле должна быть хотя бы одна цифра!'


def send_email(user_mail):
    global code
    code = randint(100000, 1000000)
    subject_msg = 'Восстановление пароля ГусьStory'
    body = f'Ваш проверочный код: {code}'
    msg = MIMEText(body, 'plain', 'utf-8')
    msg['Subject'] = Header(subject_msg, 'utf-8')
    server = smtplib.SMTP('smtp.mail.ru: 25')
    server.starttls()
    server.login('gusstory@mail.ru', 'recoverygus2')
    server.sendmail('gusstory@mail.ru', user_mail, msg.as_string())
    server.quit()


@app.route('/profile')
def profile():
    if current_user.is_authenticated:
        return render_template("profile.html", profile=True)
    return redirect('/')


@app.route('/edit_profile/<int:user_id>', methods=['GET', 'POST'])
def edit_profile(user_id):
    form = EditProfile()
    sessions = db_session.create_session()
    user = sessions.query(users.User).get(user_id)
    if request.method == 'GET':
        form.name.data = user.name
        form.surname.data = user.surname
        form.email.data = user.email
    if form.validate_on_submit():
        user.name = form.name.data
        user.surname = form.surname.data
        user.email = form.email.data
        sessions.merge(user)
        sessions.commit()
        return redirect('/')
    return render_template('edit_profile.html', title='Редактирование профиля', form=form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect('/')


def reformat(s):
    s = s.split('-')
    k = 0
    string = ''
    month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября',
             'декабря']
    for x in s[::-1]:
        if k == 0:
            string += x + ' '
        elif k == 1:
            string += month[int(x) - 1] + ' '
        else:
            string += x + ' ' + 'года'
        k += 1
        print(string)
    return string


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
        if sessions.query(users.User).filter(users.User.email == form.email.data).first():
            return render_template('register.html', title='Регистрация', form=form,
                                   password_error="OK", again_password_error="OK",
                                   email_error="Такой пользователь уже есть")
        user = users.User()
        user.email = form.email.data.lower()
        user.name = form.name.data
        user.created_date = reformat(str(datetime.datetime.now())[:-16])
        user.surname = form.surname.data
        user.set_password(form.password.data)
        user.not_completed = ';'.join(map(lambda x: str(x.name), sessions.query(quests.Quests)))
        sessions.add(user)
        sessions.commit()
        return redirect('/login')
    return render_template('register.html', title='Регистрация', form=form, email_error="OK",
                           password_error="OK", again_password_error="OK")


'''@app.route('/recovery_password', methods=['GET', 'POST'])
def recovery_password():
    global mail_to, flag
    form = RecoveryForm()
    sessions = db_session.create_session()
    if request.method == 'POST':
        if not (form.repeat_new_password.data is None or form.repeat_new_password.data == ""):
            if form.repeat_new_password.data == form.new_password.data and flag == 2:
                user = sessions.query(users.User).filter(users.User.email == mail_to).first()
                user.set_password(form.new_password.data)
                sessions.merge(user)
                sessions.commit()
                return redirect("/login")
            elif form.repeat_new_password.data != form.new_password.data and flag == 2:
                result = check_password(form.new_password.data)
                return render_template('password_recovery.html', form=form, type="password",
                                       message=result)
        elif sessions.query(users.User).filter(users.User.email ==
                                               form.email.data.lower()).first() and flag == 0:
            send_email(form.email.data.lower())
            mail_to = form.email.data.lower()
            flag = 1
            return render_template('password_recovery.html', form=form, type="kod", message="OK")

        elif sessions.query(users.User).filter(users.User.email ==
                                               form.email.data.lower()).first() is None and flag == 0:
            return render_template('password_recovery.html', form=form, type="email",
                                   message="Пользователя с данной почтой не существует")
        elif form.kod.data.strip() == str(code).strip() and flag == 1:
            flag = 2
            return render_template('password_recovery.html', form=form, type="password", message="OK")
        elif form.kod.data.strip() != str(code).strip() and flag == 1:
            return render_template('password_recovery.html', form=form, type="kod", message="Неверный код")
    return render_template('password_recovery.html', form=form, type="email", message='OK')
'''


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
    if current_user.id not in [1, 2, 3]:
        return redirect('/')
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
        photo.save('static/img/image' + str(count_items) + '.jpg')
        item.photo = '/static/img/image' + str(count_items) + '.jpg'
        for x in f:
            x.save('static/images/item' + str(count_items + 1) + '/image' + str(count_photo) + '.jpg')
            item.image = 'static/images/item' + str(count_items + 1)
            count_photo += 1
        item.year = form.year.data
        item.count_photo = count_photo
        sessions.add(item)
        sessions.commit()
        count_items += 1
        return redirect('/')
    return render_template('items.html', title='Добавление товара', form=form)


@app.route('/items/<int:item_id>', methods=['GET', 'POST'])
@login_required
def edit_items(item_id):
    if current_user.id not in [1, 2, 3]:
        return redirect('/')
    form = EditForm()
    sessions = db_session.create_session()
    item = sessions.query(items.Items).get(item_id)
    if request.method == 'GET':
        form.title.data = item.title
        form.year.data = item.year
        form.content.data = item.content
    if form.validate_on_submit():
        item.title = form.title.data
        item.year = form.year.data
        item.content = form.content.data
        sessions.merge(item)
        sessions.commit()
        return redirect('/')
    return render_template('editor.html', title='Редактирование товара', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        sessions = db_session.create_session()
        user = sessions.query(users.User).filter(users.User.email ==
                                                 form.email.data.lower()).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember_me.data)
            return redirect('/')
        return render_template('login.html', message='Неправильный логин или пароль', form=form)
    return render_template('login.html', title='Авторизация', form=form)


@app.route('/')
def index():
    item = db_session.create_session().query(items.Items)
    return render_template("index.html", items=item)


@app.route('/add_quests', methods=['GET', 'POST'])
@login_required
def add_quest():
    global kol, name
    if current_user.id not in [1, 2, 3]:
        return redirect('/')
    form = QuestsForm()
    sessions = db_session.create_session()
    if form.ok.data:
        kol = form.kol_vo.data
        quest = quests.Quests()
        quest.name = form.name.data
        name = form.name.data
        for user in sessions.query(users.User):
            if user.not_completed is None:
                user.not_completed = quest.name
            else:
                user.not_completed += ';' + quest.name
        quest.points = form.points.data
        sessions.add(quest)
        sessions.commit()
        form.name.data = name
        return render_template('add_quests.html', title='Добавление квеста', form=form, flag=1, i=kol)
    if form.submit.data:
        kol -= 1
        print(name)
        quest = sessions.query(quests.Quests).filter(quests.Quests.name == name).first()
        quest.questions += ";;" + form.questions.data
        quest.answer += ";;" + form.answers.data
        sessions.merge(quest)
        sessions.commit()
        form.questions.data = ""
        form.answers.data = ""
        if kol == 0:
            return redirect('/quests')
        else:
            return render_template('add_quests.html', title='Добавление квеста', form=form, flag=1, i=kol)
    return render_template('add_quests.html', title='Добавление квеста', form=form, flag=0)


@app.route('/quests')
def gus_quests():
    quest = db_session.create_session().query(quests.Quests)
    return render_template("quests.html", quests=quest)


@app.route("/quest/<int:quest_id>", methods=["GET", "POST"])
@login_required
def gus_quest_item(quest_id):
    sessions = db_session.create_session()
    form = AnswerForm()
    quest = sessions.query(quests.Quests).get(quest_id)
    user = sessions.query(users.User).get(current_user.id)
    answer_list = current_user.quest_answer.split("$$")
    print(9)
    print(current_user.quest_answer)
    f = 0
    if request.method == "POST":
        print(1)
        for i in range(len(answer_list)):
            ans = answer_list[i].split("%%")
            if ans[0] == quest.name:
                print(3)
                ans[-1] = str(form.answer.data)
                if i == 0:
                    answer_list = ["%%".join(ans)] + answer_list[i + 1:]
                elif i == len(answer_list) - 1:
                    answer_list = answer_list[:i] + ["%%".join(ans)]
                else:
                    answer_list = answer_list[:i] + ["%%".join(ans)] + answer_list[i + 1:]
                user.quest_answer = "$$".join(answer_list)
                sessions.merge(user)
                sessions.commit()
                break
    user = sessions.query(users.User).get(current_user.id)
    print(2)
    question = ""
    number = 0
    answer = ""
    true = 0
    answer_list = user.quest_answer.split("$$")
    for i in range(len(answer_list)):
        ans = answer_list[i].split("%%")
        if ans[0] == quest.name:
            f = 1
            number = len(ans) - 1
            question = quest.questions.split(";;")[number]
            tru_ans = quest.answer.split(";;")[number]
            answer = ans[number]
            if tru_ans.lower() == answer.lower():
                form.answer.data = ""
                if number == len(quest.questions.split(";;")) - 1:
                    if quest.name not in user.completed.split(";"):
                        user.completed = ";".join(user.completed.split(";") + [quest.name])
                        not_com = user.not_completed.split(";")
                        num = -1
                        for j in range(len(not_com)):
                            print(not_com[j], quest.name, not_com[j] == quest.name, 9999999)
                            if not_com[j] == quest.name:
                                num = j
                                break
                        if num != -1:
                            if num == 0:
                                user.not_completed = ";".join(not_com[num + 1:])
                            elif num == len(not_com) - 1:
                                user.not_completed = ";".join(not_com[:num])
                            else:
                                user.not_completed = ";".join(not_com[:num] + not_com[num + 1:])
                        sessions.merge(user)
                        sessions.commit()
                    return render_template("quest_item.html", quest=quest, message="win")
                true = 1
                number += 1
                question = quest.questions.split(";;")[number]
                answer = ""
                if i != 0:
                    answer_list = ["%%".join(ans) + "%%"] + answer_list[i + 1:]
                elif i == len(answer_list) - 1:
                    answer_list = answer_list[:i] + ["%%".join(ans) + "%%"]
                else:
                    answer_list = answer_list[:i] + ["%%".join(ans) + "%%"] + answer_list[i + 1:]
                user.quest_answer = "$$".join(answer_list)
                sessions.merge(user)
                sessions.commit()
            break
    if f == 0:
        print(4)
        if user.quest_answer == "":
            user.quest_answer = quest.name + "%%"
        else:
            user.quest_answer = user.quest_answer + "$$" + quest.name + "%%"
        sessions.merge(user)
        sessions.commit()
        number = 1
        question = quest.questions.split(";;")[number]
        answer = ""
        true = 1
    return render_template("quest_item.html", form=form, quest=quest, num=number, vopr=question, otv=answer, ver=true)


@app.route("/erase_quest/<int:quest_id>")
@login_required
def erase_quest(quest_id):
    if current_user.id not in [1, 2, 3]:
        return redirect("/")
    sessions = db_session.create_session()
    quest = sessions.query(quests.Quests).get(quest_id)
    user = sessions.query(users.User)
    for el in user:
        try:
            st = el.completed
            st2 = el.not_completed
            number = str(st).find(str(quest.name))
            number2 = str(st2).find(str(quest.name))
            if number != -1:
                el.completed = st[:number - 1] + st[number + len(str(quest.name)):]
            if number2 != -1:
                el.not_completed = st2[:number2 - 1] + st2[number2 + len(str(quest.name)):]
        except Exception:
            print(Exception.__name__)
        try:
            answer = el.quest_answer.split("$$")
            i = 0
            while i < len(answer):
                if answer[i].startswith(quest.name):
                    if i == 0:
                        answer = answer[i + 1:]
                    elif i == len(answer) - 1:
                        answer = answer[:i]
                    else:
                        answer = answer[:i] + answer[i + 1:]
                    i -= 1
                i += 1
            el.quest_answer = "$$".join(answer)
            sessions.merge(el)
            sessions.commit()
        except Exception:
            print(Exception.__name__)
        sessions.commit()
    sessions.delete(quest)
    sessions.commit()
    return redirect("/quests")


@app.route('/about_item/<int:item_id>', methods=['GET', 'POST'])
def about_item(item_id):
    item = db_session.create_session().query(items.Items).get(item_id)
    return render_template("single_item.html", item=item)


@app.route("/maps")
def maps():
    return render_template("maps.html")


@app.route("/about_project")
def about_project():
    return render_template("about_project.html")


def main():
    global count_items
    sessions = db_session.create_session()
    count_items += len(list(sessions.query(items.Items)))
    sessions.close()
    app.run()


if __name__ == '__main__':
    main()
