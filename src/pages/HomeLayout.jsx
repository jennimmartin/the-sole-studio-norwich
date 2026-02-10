import { Outlet } from "react-router-dom";
import AppShell from "../layout/AppShell";

import NavbarLogo from "../components/NavbarLogo";
import StickyNav from "../components/StickyNav";

const HomeLayout = () => {
  return (
    <>
      <AppShell>
        <NavbarLogo />
        <StickyNav />
        <Outlet />
      </AppShell>
    </>
  );
};
export default HomeLayout;
