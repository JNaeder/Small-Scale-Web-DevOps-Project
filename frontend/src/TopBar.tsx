import GitHubLogo from "./assets/github.png";

export default function TopBar() {
  return (
    <div className="bg-red-900 text-center py-3 flex items-end justify-evenly">
      <div />
      <div>
        <span className="text-5xl font-bold">How You Doin'?</span>
        <span>v0.0.1</span>
      </div>
      <a
        href="https://github.com/JNaeder/Small-Scale-Web-DevOps-Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border-2 rounded-4xl px-5 py-2 font-bold cursor-pointer hover:bg-red-700 transition-all duration-200">
          <div className="flex items-center gap-2">
            <img src={GitHubLogo} width={30} />
            <div>GitHub</div>
          </div>
        </button>
      </a>
    </div>
  );
}
