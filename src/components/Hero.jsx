import Img from "../assets/images/heroLogo.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={Img} alt="The Sole Studio logo" />
      <img src={Img} alt="The Sole Studio logo" />
      <img src={Img} alt="The Sole Studio logo" />
      <img src={Img} alt="The Sole Studio logo" />

      <h1 className="mt-4 text-xl font-semibold text-center">
        Specialist Foot care for Active, Hard-Working Feet
      </h1>
    </div>
  );
};
export default Hero;
