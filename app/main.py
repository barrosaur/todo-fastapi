from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models.todos import Todo
from schema.todo import TodoCreate, TodoOut
from db.session import get_db

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000"], # next js url
  allow_credentials=True,
  allow_methods=["*"], # allows all methods (GET, POST, DELETE, PUT)
  allow_headers=["*"] # all headers like applicaltion/json
)

@app.post('/todo_post', response_model=TodoOut)
def create_todo(todo: TodoCreate, db:Session = Depends(get_db)):
  new_todo = Todo(todo_id=todo.todo_id, title=todo.title, content=todo.content)
  db.add(new_todo)
  db.commit()
  db.refresh(new_todo)
  
  return new_todo

@app.get('/todo_list', response_model=list[TodoOut])
def get_todos(db: Session = Depends(get_db)):
  return db.query(Todo).all()