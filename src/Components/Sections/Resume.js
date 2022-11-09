import ScrollAnimate from '../ScrollAnimate';

function Resume() {
  return (
    <section id="section-resume">
      <div className="container relative">
        <div className="row">
          <ScrollAnimate className="col-md-12 text-center">
            <h2>My Resume</h2>
            <div className="space-border"></div>
          </ScrollAnimate>
        </div>
        <div className="row gh-5">
          <ScrollAnimate className="col-lg-6">
            <div className="p-4">
              <h3 className="s_border">Experiences</h3>
              <ul className="d_timeline">
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">Oct 2022 - now</h3>
                  <div className="d_timeline-text">
                    <span className="d_title">Software Engineer II</span>
                    <span className="d_company">The Home Depot</span>
                    <ul>
                      <li>Skills: React.js · JavaScript · GraphQL</li>
                    </ul>
                  </div>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">Aug 2016 - Oct 2022</h3>
                  <div className="d_timeline-text">
                    <span className="d_title">Software Engineer</span>
                    <span className="d_company">The Home Depot</span>
                    <ul>
                      <li>Skills: React.js · Node.js · JavaScript · MongoDB</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollAnimate>
          <ScrollAnimate className="col-lg-6">
            <div className="p-4">
              <h3 className="s_border">Education</h3>
              <ul className="d_timeline">
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2019 - 2021</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Bachelor's degree, Computer science</span>
                    <span className="d_company">Florida International University</span>
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2015 - 2019</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Associate of Arts (AA), Computer science</span>
                    <span className="d_company">Miami Dade College</span>
                  </p>
                </li>
              </ul>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Resume;