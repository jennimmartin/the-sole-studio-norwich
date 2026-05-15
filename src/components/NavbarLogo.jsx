import Img from "../assets/images/heroLogo.png";

export default function NavbarLogo() {
  return (
    <div className="py-6 sm:py-8 md:py-10 flex justify-center items-center bg-white">
      <img
        src={Img}
        alt="The Sole Studio logo"
        className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-xs h-auto px-4"
      />
    </div>
  );
}
