from fastapi import FastAPI, Depends, HTTPException
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

@app.get('/todo_list/{todo_id}')
def get_todo(todo_id: str, db: Session = Depends(get_db)):
  todo = db.query(Todo).filter(Todo.todo_id == todo_id).first()
  if not todo:
    raise HTTPException(status_code=404, detail="List Item not Found")
  return todo

@app.delete('/todo_list/{todo_id}')
def delete_todo(todo_id: str, db: Session = Depends(get_db)):
  todo = db.query(Todo).filter(Todo.todo_id == todo_id).first()
  if not todo:
    raise HTTPException(status_code=404, detail="List Item not Found")
  
  db.delete(todo)
  db.commit()
  return {"message" : "Deleted"}