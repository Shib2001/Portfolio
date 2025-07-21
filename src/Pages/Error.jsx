import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // console.log(error);

  return (
    <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-2xl font-medium mb-2">
          Opps! An Error occured.
        </h1>
        {error && <p className="text-white text-base mb-4">{error.status}</p>}
        <NavLink to="/">
          <button className="bg-transparent text-white border border-white px-4 py-2 rounded text-base font-medium hover:bg-white hover:text-neutral-950 transition-colors duration-200">
            Go back to home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
