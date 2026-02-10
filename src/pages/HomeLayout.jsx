import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>NavBar</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
export default HomeLayout;
