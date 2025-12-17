import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [totalURL, setTotalURL] = useState<string>("");

  const onButtonClick = async () => {
    console.log(userName, userMessage);
    // const data = await axios.get("/api");
    // const data = await axios.get("http://localhost:8000");
    // console.log(data.data);
  };

  const onTestClick = async () => {
    // const data = await axios.get(totalURL);
    // console.log(import.meta.env.VITE_BACKEND_URL);
    // console.log(totalURL);
    const url = `${import.meta.env.VITE_BACKEND_URL}${totalURL}`;
    console.log(url);
    const data = await axios.get(url);
    console.log(data.data);
  };

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">Small Scale Test Project</h1>
        <p>
          This is my test project for building frontend and backend website with
          docker containers
        </p>
        <p>Please write your name in the box to record that you were here.</p>
        <div className="w-1/2 mx-auto p-4">
          <div className="flex justify-center mt-5 items-center gap-2">
            <div>Name:</div>
            <input
              className="bg-white text-black rounded-2xl p-2 w-full"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-5 items-center gap-2">
            <div>Message:</div>
            <textarea
              className="bg-white text-black rounded-2xl p-2 w-full"
              rows={3}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-5 items-center gap-2">
            <button
              className="bg-blue-500 px-5 py-2 rounded-2xl text-2xl"
              onClick={onButtonClick}
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center mt-5 items-center gap-2">
            <div>URI:</div>
            <input
              className="bg-white text-black rounded-2xl p-2 w-full"
              onChange={(e) => setTotalURL(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-5 items-center gap-2">
            <button
              className="bg-blue-500 px-5 py-2 rounded-2xl text-2xl"
              onClick={onTestClick}
            >
              Testing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
