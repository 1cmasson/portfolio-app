// import { Link } from 'react-router-dom';

function Footer() {
  // const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <Link to="/">
              <span className="copy">&copy; Copyright {year} - </span>
            </Link> */}
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              {/* <a href="index-v2-light.html#"><i className="fa fa-facebook fa-lg"></i></a> */}
              {/* <a href="index-v2-light.html#"><i className="fa fa-twitter fa-lg"></i></a> */}
              <a
                href="https://www.linkedin.com/in/carlos-masson-29130a14a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-lg" />
              </a>
              <a
                href="https://github.com/carninojo15"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-lg" />
              </a>
              {/* <a href="index-v2-light.html#"><i className="fa fa-pinterest fa-lg"></i></a> */}
              {/* <a href="index-v2-light.html#"><i className="fa fa-rss fa-lg"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;