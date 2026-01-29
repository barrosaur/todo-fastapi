from db.database import SessionLocal
from fastapi import Depends

def get_db():
  session = SessionLocal()
  
  try:
    yield session
  finally:
    session.close()