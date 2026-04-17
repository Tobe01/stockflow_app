import { Link } from "react-router-dom";
import inventralogo from "../../public/iv-logo.webp";
import inventraNav from "../assets/navbar.webp";
import inventry from "../assets/screencapture-localhost-5173-inventory-2026-04-16-13_31_45.jpg";

export function Home() {
  return (
    <div className="flex font-body w-full h-206.28 pt-10 bg-[radial-gradient(#8C8C8C_1px,#e0ffec_1px)] bg-size-[30px_30px]">
      <div className="flex flex-col space-y-8.5">
        <div className="border-solid hover:bg-gray-50 hover:shadow-sm hover:-translate-y-1 transition-all duration-200 bg-white p-3 rounded-lg border border-border flex align-middle justify-between px-5 w-[90%] mx-auto">
          <div className="flex gap-2 align-middle justify-center">
            <div>
              <img
                width={50}
                src={inventralogo}
                alt="inventra-logo"
                loading="lazy"
              />
            </div>
            <p className="m-auto font-bold text-2xl text-secondary">Inventra</p>
          </div>

          <div className="flex gap-2 align-middle justify-center">
            <button className="bg-white scale-100 active:-translate-y-1 hover:bg-lightgreen hover:border-secondary hover:text-secondary border border-border text-gray-500 m-auto p-1 px-4 rounded-md cursor-pointer">
              Log in
            </button>
            <button className="bg-secondary hover:bg-darkgreen scale-100 hover:scale-102 transition-transform duration-100 active:scale-95  m-auto p-1 px-4 rounded-md text-white cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex flex-col align-middle justify-center space-y-5">
          <div className="flex flex-col text-center space-y-4">
            <p className="font-bold text-5xl text-center text-secondary">
              Overstocked. Understocked. Never again.
            </p>
            <div className="text-gray-600 bg-white w-[50%] m-auto flex">
              Inventra puts your entire inventory on autopilot precise,
              real-time, and built for the way your business actually runs.
            </div>
          </div>

          <Link to="/pos" className="bg-secondary hover:bg-darkgreen scale-100 hover:scale-102 transition-transform duration-100 active:scale-95  m-auto p-1 px-10 rounded-md text-white cursor-pointer text-2xl">
            <button >
              Try Demo
            </button>
          </Link>
        </div>

        <div className="flex align-middle bg-white justify-center">
          <div className="w-full pl-36">
            <img className="w-full" src={inventraNav} />
          </div>
        </div>

        <div className="max-w-[90%] mx-auto b-red-500 rounded-tr-xl rounded-tl-xl px-3 pt-3 border-border border shadow-sm bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-200">
          <img
            className="rounded-tr-xl rounded-tl-xl"
            src={inventry}
            alt="inventry"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
