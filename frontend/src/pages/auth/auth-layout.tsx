import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="relative flex h-screen items-center justify-center
     bg-gradient-to-br from-cyan-400 to-blue-700"
    >
      <Outlet />
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="relative block h-[195px] w-[calc(100%+1.3px)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
