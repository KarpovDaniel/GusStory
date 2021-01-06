from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session, sessionmaker

SqlAlchemyBase = declarative_base()
__factory = None


def global_init(db_file):
    global __factory
    engine = create_engine(f'sqlite:///{db_file.strip()}?check_same_thread=False', echo=False)
    __factory = sessionmaker(bind=engine)
    SqlAlchemyBase.metadata.create_all(engine)


def create_session() -> Session:
    global __factory
    return __factory()
