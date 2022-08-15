import ScrollAnimate from '../../Components/ScrollAnimate';
import Misc2 from '../../assets/images/misc/2.png';

function Hero() {
  return (
    <section aria-label="section" className="jarallax no-top-md no-bottom sm-pt-120 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5
              className="s1 animate__fadeInUp"
              style={{
                animationDelay: '0.4s'
              }}
            >Welcome to My Website</h5>
            <div className="spacer-10"></div>
            <div
              className="h1 animate__fadeInUp"
              style={{
                animationDelay: '0.6s'
              }}
            >
              Hi, I'm <span className="id-color-2">Carlos Masson</span><br />a Full-stack Web Developer.
            </div>
            <p
              className="animate__fadeInUp"
              style={{
                animationDelay: '0.6s'
              }}
            >
              I am a full-stack developer from Florida, with a strong focus in web development. I love to get new experiences and always learn from my surroundings. I looking forward to any opportunities and challenges.
            </p>
            <div className="spacer-10"></div>
            <a
              className="btn-main animate__fadeInUp"
              href="index-v2-light.html#section-resume"
              style={{
                animationDelay: '0.6s'
              }}
            >My Resume</a>
          </div>
          <div className="col-md-6">
            <img
              src={Misc2}
              className="img-fluid animate__fadeInUp"
              alt=""
              style={{
                animationDelay: '0.8s'
              }}
            />
          </div>
        </div>
      </div>
      <a
        href="#section-about"
        className="mouse-icon-click scroll-to animate__fadeInUp"
        style={{
          animationDelay: '0.8s'
        }}
      >
        <span className="mouse fadeScroll relative" data-scroll-speed="10">
          <span className="scroll"></span>
        </span>
      </a>
      <div className="de-gradient-edge-bottom"></div>
    </section>
  );
};

export default Hero;