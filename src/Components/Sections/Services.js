import ScrollAnimate from '../ScrollAnimate';

function Services() {
  return (
    <section id="section-services" className="no-bottom">
      <div className="container relative">
        <div className="row">
          <ScrollAnimate className="col-md-12 text-center">
            <h2>What I Do</h2>
            <div className="space-border"></div>
          </ScrollAnimate>
          <div className="spacer-single"></div>
          <div className="row g-0">
            <ScrollAnimate
              className="col-lg-4 text-center"
              style={{
                animationDelay: '0.2s'
              }}
            >
              <div className="de_3d-box">
                <div className="d-inner">
                  <i className="icon_desktop id-color-2"></i>
                  <div className="text">
                    <h3>Front-end Development</h3>
                    Building a dashboard with useful overviews, customizable by the user with drag and toggle widgets and configurable tiles.
                  </div>
                </div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate
              className="col-lg-4 text-center"
              style={{
                animationDelay: '0.4s'
              }}
            >
              <div className="de_3d-box">
                <div className="d-inner">
                  <i className="icon_tools id-color-2"></i>
                  <div className="text">
                    <h3>Back-end Development</h3>
                    Building a dashboard with useful overviews, customizable by the user with drag and toggle widgets and configurable tiles.
                  </div>
                </div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate
              className="col-lg-4 text-center"
              style={{
                animationDelay: '0.6s'
              }}
            >
              <div className="de_3d-box">
                <div className="d-inner">
                  <i className="icon_piechart id-color-2"></i>
                  <div className="text">
                    <h3>Dashboard Development</h3>
                    Building a dashboard with useful overviews, customizable by the user with drag and toggle widgets and configurable tiles.
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;