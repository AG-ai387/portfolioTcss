
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div
        id="hero"
        className="min-h-screen flex items-center bg-no-repeat rounded-full h-16 bg-left"
        style={{
          backgroundSize: "35%",
          backgroundPosition: "left 100px 100px",
        }}
      >
        <img
          src="/images/dummypic.png"
          alt=""
          className="w-[300px] h-[300px]  rounded-full ml-[150px]"
        />
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
          <div className="hidden lg:block"></div>
          <div className="text-[80px] sm:text-[70px] font-bold leading-tight flex justify-center items-center">
            <div>
              <p data-aos="zoom-in-down">I'm</p>
              <p data-aos="zoom-in-down">Abdul</p>
              <p data-aos="zoom-in-down">Ghaffar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
