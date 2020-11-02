import sqlalchemy
from flask_login import UserMixin
from sqlalchemy_serializer import SerializerMixin

from .db_session import SqlAlchemyBase


class Quests(SqlAlchemyBase, SerializerMixin, UserMixin):
    __tablename__ = 'quests'

    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    name = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    points = sqlalchemy.Column(sqlalchemy.TEXT, nullable=True)
    questions = sqlalchemy.Column(sqlalchemy.TEXT, nullable=True)
    ansver = sqlalchemy.Column(sqlalchemy.TEXT, nullable=True)

