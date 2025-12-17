from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
@app.get("/api/")
def return_test():
    return {"message": "You are in the API! Nice"}


@app.get("/api/test")
def api_test():
    return {"message": "Look at you. Bang up job"}


@app.get("/api/another")
def api_test_2():
    return {"message": "This is one more test. Just to see if things are working"}
