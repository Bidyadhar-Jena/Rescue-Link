import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <img
        src={logo}
        alt="RescueLink AI Logo"
        className="w-[760px] max-w-[92vw] mb-8"
      />

      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
        RescueLink AI
      </h1>

      <p className="text-gray-400 mb-8 text-center text-lg md:text-xl">
        Smart Emergency Response Platform
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home