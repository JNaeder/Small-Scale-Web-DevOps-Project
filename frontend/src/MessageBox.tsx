import type { message } from "./types";
import { convertDatetime, convertFeelingToEmoji } from "./helperFunctions";

export default function MessageBox({ message }: { message: message }) {
  return (
    <div className="flex flex-col items-center border-b border-gray-50">
      <div className="flex justify-between items-end  w-full mb-4">
        <div className="text-xl font-bold w-80">{message.name}</div>
        <div className="flex items-center">
          <div className="text-2xl">{message.feeling}/10</div>
          <div className="text-2xl">
            {convertFeelingToEmoji(message.feeling)}
          </div>
        </div>
        <div className=" text-gray-500 w-25">
          {convertDatetime(message.datetime)}
        </div>
      </div>
      <div className="flex justify-start w-full mb-2">{message.message}</div>
    </div>
  );
}
