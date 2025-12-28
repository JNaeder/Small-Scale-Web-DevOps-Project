from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from test_data import test_data


class Message(BaseModel):
    name: str
    message: str
    datetime: str
    feeling: float


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/messages")
def get_all_messages():
    return test_data


@app.post("/api/message/")
def post_new_message(new_message: Message):
    test_data.insert(0, new_message)
    return new_message
