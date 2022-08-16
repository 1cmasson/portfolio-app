import ScrollAnimate from '../ScrollAnimate';
import Misc2 from '../../assets/images/misc/2.png';

function Hero() {
  return (
    <section aria-label="section" className="jarallax no-top-md no-bottom sm-pt-120 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <ScrollAnimate
              as="h5"
              className="s1"
              animate="animate__fadeInUp"
              style={{
                animationDelay: '0.4s'
              }}
            >Welcome to My Website</ScrollAnimate>
            <div className="spacer-10"></div>
            <ScrollAnimate
              animate="animate__fadeInUp"
              className="h1"
              style={{
                animationDelay: '0.6s'
              }}
            >
              Hi, I'm <span className="id-color-2">Carlos Masson</span><br />a Full-stack Web Developer.
            </ScrollAnimate>
            <ScrollAnimate
              as="p"
              animate="animate__fadeInUp"
              style={{
                animationDelay: '0.6s'
              }}
            >
              I am a full-stack developer from Florida, with a strong focus in web development. I love to get new experiences and always learn from my surroundings. I looking forward to any opportunities and challenges.
            </ScrollAnimate>
            <div className="spacer-10"></div>
            <ScrollAnimate
              as="a"
              animate="animate__fadeInUp"
              className="btn-main"
              href="index-v2-light.html#section-resume"
              style={{
                animationDelay: '0.6s'
              }}
            >My Resume</ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate
              as="img"
              animate="animate__fadeInUp"
              src={Misc2}
              className="img-fluid"
              alt=""
              style={{
                animationDelay: '0.8s'
              }}
            />
          </div>
        </div>
      </div>
      <ScrollAnimate
        as="a"
        animate="animate__fadeInUp"
        href="#section-about"
        className="mouse-icon-click scroll-to"
        style={{
          animationDelay: '0.8s'
        }}
      >
        <span className="mouse fadeScroll relative" data-scroll-speed="10">
          <span className="scroll"></span>
        </span>
      </ScrollAnimate>
      <div className="de-gradient-edge-bottom"></div>
    </section>
  );
};

export default Hero;