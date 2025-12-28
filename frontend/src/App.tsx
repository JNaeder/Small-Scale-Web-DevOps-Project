import "./App.css";
import NewMessage from "./NewMessage";
import AllMessages from "./AllMessages";

function App() {
  return (
    <>
      <div className="w-dvw h-dvh flex flex-col overflow-auto">
        <div className="bg-blue-900 text-center pb-3">
          <span className="text-5xl font-bold">How You Doin'?</span>
          <span>v0.0.1</span>
        </div>
        <div className="flex-1 grid grid-cols-7 overflow-clip">
          <AllMessages />
          <NewMessage />
        </div>
      </div>
    </>
  );
}

export default App;
