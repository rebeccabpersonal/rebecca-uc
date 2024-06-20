import hero from "../assets/uc-hero.png";

export const Hero = () => {
  return (
    <div className="relative mx-auto mt-24">
      <img
        src={hero}
        className="h-full w-full object-cover"
        alt="hero wallet"
      />
      <div className="absolute inset-0 flex items-center justify-center p-10">
        <h1 className="text-white w-3/5 text-sm md:text-5xl">
          Spärra körkort eller annan ID-handling till UC
        </h1>
      </div>
    </div>
  );
};

export default Hero;
