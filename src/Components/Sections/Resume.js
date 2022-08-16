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
                  <h3 className="d_timeline-title">2021 - now</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Software Engineer</span>
                    <span className="d_company">The Home Depot</span>
                    <ul>
                      <li>Managed web development projects from conceptual design to deployment following an agile development process.</li>
                      <li>Worked with UX Designers to build a standardized UI component library for homedepot.com that are complaint to Web Content Accessibility Guidelines (WCAG).</li>
                      <li>Worked with a team of developers to build a CI/CD platform for faster deployment and better maintenance of online web pages. </li>
                      <li>Created documentation for understanding the applications that my team built and maintains.</li>
                    </ul>
                  </p>
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