import cricketStarsLogo from "../assets/cricketstarslogo.jpg";

const LandingPageMessage = () => {
  return (
    <div className="flex flex-col m-auto items-center w-[50vw] gap-20 font-bold text-3xl text-center">
      <div>
        <a href="">
          <img
            className="h-[20vh] hover:shadow-2xl hover:shadow-yellow-400 rounded-xl transition-all duration-400 object-cover"
            src={cricketStarsLogo}
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>
        🏏 We are Polishing Our Bat and Pads! Cricket Stars is in the final
        innings of development.
      </h1>
      <h1>🏆 Get ready for the big reveal soon!</h1>
    </div>
  );
};

export default LandingPageMessage;
