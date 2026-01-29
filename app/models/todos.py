from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, func
from db.database import Base

class Todo(Base):
  __tablename__ = 'todo_list'
  
  id = Column(Integer, primary_key=True, index=True)
  todo_id = Column(String(255), nullable=False)
  title = Column(Text)
  content = Column(Text)
  updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())