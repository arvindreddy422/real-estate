import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-600">AK$</span>
            <span className="text-sky-400">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-2">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
        </form>
        <ul className="flex gap-3">
          <Link to="/">
            <li className="hidden sm:inline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline">About</li>
          </Link>
          <Link to="/sign-in">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
