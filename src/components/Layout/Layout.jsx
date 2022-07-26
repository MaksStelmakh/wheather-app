import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <NavLink to="/">Today</NavLink>
        <NavLink to="/week">Wheather on 5 days</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
