from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/")
def get_root():
    return {"messgae": "This is the Root Directory"}

@app.get("/api")
def return_test():
    return  {"message": "You are in the API! Nice"}

@app.get("/testing")
def return_test2():
    return {"message": "THIS IS A TEST. TEST 123!TEST 123!TEST 123!TEST 123!"}