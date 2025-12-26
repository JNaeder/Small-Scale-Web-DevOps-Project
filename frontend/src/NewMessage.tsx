import { useState } from "react";
import axios from "axios";
import type { message } from "./types";

export default function NewMessage() {
  const [userName, setUserName] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [userFeeling, setUserFeeling] = useState<number>(5.0);

  const onButtonClick = async () => {
    const urlRoot = import.meta.env.VITE_BACKEND_URL;
    const url = urlRoot ? `${urlRoot}/api/message` : `/api/message`;

    const new_message: message = {
      name: userName,
      message: userMessage,
      datetime: new Date().toISOString(),
      feeling: userFeeling,
    };

    const data = await axios.post(url, new_message);
    console.log(data.data);
  };

  return (
    <div>
      <div className="flex justify-center mt-5 items-center gap-2">
        <div>What's your name?</div>
        <input
          className="bg-white text-black rounded-2xl p-2 w-full"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-5 items-center gap-2">
        <div>How are you feeling?</div>
        <input
          type="range"
          min="0"
          max="10"
          value={userFeeling}
          step={0.5}
          onChange={(e) => setUserFeeling(Number(e.target.value))}
        />
        <div>{userFeeling.toFixed(1)}</div>
      </div>
      <div className="flex justify-center mt-5 items-center gap-2">
        <div>What's going on?:</div>
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
    </div>
  );
}
