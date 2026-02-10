import Img from "../assets/images/heroLogo.png";

export default function NavbarLogo() {
  return (
    <div className="flex justify-center my-10">
      <img src={Img} alt="The Sole Studio logo" />
    </div>
  );
}
