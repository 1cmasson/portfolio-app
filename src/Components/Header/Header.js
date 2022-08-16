function Header() {
  return (
    <header className="transparent header-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                    {/* logo begin */}
                    <div id="logo">
                      <h3><span className="id-color-2">-</span> CARLOS <span className="id-color-2">-</span></h3>
                    </div>
                    {/* logo close */}
                </div>
              </div>
              <div className="de-flex-col header-col-right">
                <ul id="mainmenu">
                  <li>
                    <a href="#top">Home</a>
                  </li>
                  <li>
                    <a href="#section-about">About me</a>
                  </li>
                  <li><a href="#section-services">What I Do</a></li>
                  <li><a href="#section-portfolio">Portfolio</a></li>
                  <li><a href="#section-resume">My Resume</a></li>
                  {/* <li><a href="#section-blog">Blog</a></li> */}
                  {/* <li><a href="#section-contact">Contact Me</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;