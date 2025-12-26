import "./App.css";
import NewMessage from "./NewMessage";
import AllMessages from "./AllMessages";

function App() {
  return (
    <>
      <div className="w-dvw">
        <h1 className="text-5xl font-bold">Small Scale Test Project v0.0.1</h1>
        <div className="grid grid-cols-2 gap-2">
          <AllMessages />
          <NewMessage />
          {/* <div className="flex justify-center mt-5 items-center gap-2">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
