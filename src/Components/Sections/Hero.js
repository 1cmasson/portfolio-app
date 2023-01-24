import ScrollAnimate from '../ScrollAnimate';
import picture from '../../assets/images/misc/picture.png';

function Hero() {
  return (
    <section aria-label="section" className="no-top-md no-bottom sm-pt-120 section-hero">
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
            <div className="spacer-10"></div>
          </div>
          {/* <div className="col-md-6 text-center">
            <ScrollAnimate
              as="img"
              animate="animate__fadeInUp"
              src={picture}
              className="img-fluid profile-picture"
              alt=""
              style={{
                animationDelay: '0.8s'
              }}
            />
          </div> */}
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