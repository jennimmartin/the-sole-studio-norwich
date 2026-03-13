import { Outlet } from "react-router-dom";
import AppShell from "../layout/AppShell";

import NavbarLogo from "../components/NavbarLogo";
import StickyNav from "../components/StickyNav";

import Footer from "../components/Footer";

import ScrollToTop from "../components/ScrollToTop";

import EmailPopup from "../components/EmailPopup";
import CookieConsent from "../components/CookieConsent";

const HomeLayout = () => {
  return (
    <>
      <AppShell>
        <ScrollToTop />
        <NavbarLogo />
        <StickyNav />
        <Outlet />
        <Footer />
      </AppShell>
      <EmailPopup />
      <CookieConsent />
    </>
  );
};
export default HomeLayout;
