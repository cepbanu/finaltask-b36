import { Outlet, Link } from "react-router-dom";
import logo from "../src/img/logo.png";

function App() {
  return (
    <>
      <div className="container px-20 py-5 bg-black min-h-screen">
        <div className="flex items-center w-full justify-between mb-16">
          <div>
            <Link to="/">
              <img className="h-14" src={logo} alt="logo-dumbmerch" />
            </Link>
          </div>
          <div className="flex">
            <button>
              <div className="hover:bg-[#CD2E71] mr-6 py-2 px-8 text-white rounded-md font-semibold">
                Login
              </div>
            </button>
            <button>
              <div className="bg-[#CD2E71] hover:bg-[#CD2E71]/60 py-2 px-6 text-white rounded-md font-semibold">
                Register
              </div>
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
