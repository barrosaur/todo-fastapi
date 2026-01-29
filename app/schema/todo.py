from pydantic import BaseModel
from datetime import datetime

class TodoCreate(BaseModel):
  todo_id: str
  title: str
  content: str

class TodoOut(BaseModel):
  todo_id: str
  title: str
  content: str
  updated_at: datetime
  
  class Config:
    from_attributes = True