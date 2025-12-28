import "./App.css";
import TopBar from "./TopBar";
import NewMessage from "./NewMessage";
import AllMessages from "./AllMessages";

function App() {
  return (
    <>
      <div className="w-dvw h-dvh flex flex-col overflow-auto">
        <TopBar />
        <div className="flex-1 grid grid-cols-7 overflow-clip">
          <AllMessages />
          <NewMessage />
        </div>
      </div>
    </>
  );
}

export default App;
