import type { message } from "./types";

export default function MessageBox({ message }: { message: message }) {
  return (
    <div className="rounded-2xl flex flex-col items-center border">
      <div className="flex justify-center w-full gap-10">
        <div>{message.name}</div>
        <div>{message.feeling}</div>
        {/* <div>{message.datetime}</div> */}
      </div>
      <div>{message.message}</div>
    </div>
  );
}
