import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Outlet />
    </>
  );
}
