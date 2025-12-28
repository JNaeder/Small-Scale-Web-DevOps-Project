export default function TopBar() {
  return (
    <div className="bg-violet-900 text-center pb-3 flex items-end justify-evenly">
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
        <button className="bg-black rounded-4xl px-5 py-2 font-bold">
          GitHub
        </button>
      </a>
    </div>
  );
}
