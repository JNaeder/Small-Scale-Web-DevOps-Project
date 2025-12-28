import { useEffect, useState } from "react";
import axios from "axios";
import type { message } from "./types";
import MessageBox from "./MessageBox";

export default function AllMessages() {
  const [allMessages, setAllMessages] = useState<message[]>([]);

  useEffect(() => {
    const getData = async () => {
      const urlRoot = import.meta.env.VITE_BACKEND_URL;
      const url = urlRoot ? `${urlRoot}/api/messages` : `/api/messages`;
      const response = await axios.get(url);
      setAllMessages(response.data);
      // console.log(response.data);
    };
    getData();
  }, []);

  return (
    <div className="col-span-3 mt-2 px-10 overflow-scroll">
      <div className="flex flex-col gap-2 h-200">
        {allMessages.map((aMessage: message, i: number) => (
          <MessageBox message={aMessage} key={i} />
        ))}
      </div>
    </div>
  );
}
