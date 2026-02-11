import Img from "../assets/images/heroLogo.png";

export default function NavbarLogo() {
  return (
    <div className="h-[30vh] flex justify-center items-center">
      <img
        src={Img}
        alt="The Sole Studio logo"
        className="w-full max-w-lg h-auto px-4"
      />
    </div>
  );
}
