import { useState, useEffect } from 'react';
import PreLoader from '../../Components/PreLoader';
import FloatText from '../../Components/FloatText';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Sections/Hero';
import About from '../../Components/Sections/About';
import Services from '../../Components/Sections/Services';
import Portfolio from '../../Components/Sections/Portfolio';
import Resume from '../../Components/Sections/Resume';

function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        scrollToComment();
      }, 500)
    }, 1500)
  }, []);

  const scrollToComment = () => {
    let currentLocation = window.location.href;
    const hasCommentAnchor = currentLocation.includes("/#");
    if (hasCommentAnchor) {
      const anchorCommentId = `${currentLocation.substring(currentLocation.indexOf("#") + 1)}`;
      const anchorComment = document.getElementById(anchorCommentId);
      if(anchorComment){
        anchorComment.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="landing">
      <Header />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <FloatText />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        {/*
        <section id="section-my-quote" aria-label="section" className="jarallax no-top no-bottom">
          <div className="de-gradient-edge-top"></div>
          <img src="images/background/l6.jpg" className="jarallax-img" alt="" />
          <div className="v-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-10 offset-md-1">
                  <blockquote className="q-big wow fadeIn" data-wow-duration="3s">
                    <i className="d-big icon_quotations"></i>
                    Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.
                    <span className="d-quote-by">Sally Turner</span>
                  </blockquote>
                  <div className="spacer-double"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom"></div>
        </section>
        <section id="section-fun-facts" aria-label="section" className="jarallax no-top no-bottom vh-100">
          <div className="de-gradient-edge-top"></div>
          <img src="images/background/l7.jpg" className="jarallax-img" alt="" />
          <div className="v-center">
            <div className="container">
              <div className="row">
                <div className="col-md-3 wow fadeIn" data-wow-delay="0">
                  <div className="de_count text-center">
                    <h3 className="timer" data-to="8240" data-speed="2500">0</h3>
                    <span>Hours of Works</span>
                  </div>
                </div>

                <div className="col-md-3 wow fadeIn" data-wow-delay=".25s">
                  <div className="de_count text-center">
                    <h3 className="timer" data-to="315" data-speed="2500">0</h3>
                    <span>Projects Done</span>
                  </div>
                </div>

                <div className="col-md-3 wow fadeIn" data-wow-delay=".5s">
                  <div className="de_count text-center">
                    <h3 className="timer" data-to="250" data-speed="2500">0</h3>
                    <span>Satisfied Customers</span>
                  </div>
                </div>

                <div className="col-md-3 wow fadeIn" data-wow-delay=".75s">
                  <div className="de_count text-center">
                    <h3 className="timer" data-to="32" data-speed="2500">0</h3>
                    <span>Awards Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom"></div>
        </section>
        <section id="section-blog" className="no-bottom">
          <div className="container relative">
            <div className="row">
              <div className="col-md-12 text-center wow fadeInUp">
                <h2>Recent Blog</h2>
                <div className="space-border"></div>
              </div>
            </div>
            <div id="carousel-blog" className="owl-carousel wow fadeInUp">
              <div className="bloglist item">
                <div className="post-content">
                  <div className="post-image">
                    <div className="de_modal" data-url="single-blog.html">
                      <img alt="" src="images/blog/1.jpg" className="lazy" />
                    </div>
                  </div>
                  <div className="post-text">
                    <h4 className="de_modal" data-url="single-blog.html">How to Make Better User Interface</h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                  </div>
                </div>
              </div>
              <div className="bloglist item">
                <div className="post-content">
                  <div className="post-image">
                    <div className="de_modal" data-url="single-blog.html">
                      <img alt="" src="images/blog/2.jpg" className="lazy" />
                    </div>
                  </div>
                  <div className="post-text">
                    <h4 className="de_modal" data-url="single-blog.html">10 Web Design Tips From Experts</h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                  </div>
                </div>
              </div>
              <div className="bloglist item">
                <div className="post-content">
                  <div className="post-image">
                    <div className="de_modal" data-url="single-blog.html">
                      <img alt="" src="images/blog/3.jpg" className="lazy" />
                    </div>
                  </div>
                  <div className="post-text">
                    <h4 className="de_modal" data-url="single-blog.html">The Importance of Web Design</h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                  </div>
                </div>
              </div>
              <div className="bloglist item">
                <div className="post-content">
                  <div className="post-image">
                    <div className="de_modal" data-url="single-blog.html">
                      <img alt="" src="images/blog/4.jpg" className="lazy" />
                    </div>
                  </div>
                  <div className="post-text">
                    <h4 className="de_modal" data-url="single-blog.html">10 Web Design Tips From Experts</h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                  </div>
                </div>
              </div>
              <div className="bloglist item">
                <div className="post-content">
                  <div className="post-image">
                    <div className="de_modal" data-url="single-blog.html">
                      <img alt="" src="images/blog/5.jpg" className="lazy" />
                    </div>
                  </div>
                  <div className="post-text">
                    <h4 className="de_modal" data-url="single-blog.html">The Importance of Web Design</h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                  </div>
                </div>
              </div>
              <div className="bloglist item">
                <div className="post-content">
                  <div className="post-image">
                    <div className="de_modal" data-url="single-blog.html">
                      <img alt="" src="images/blog/6.jpg" className="lazy" />
                    </div>
                  </div>
                  <div className="post-text">
                    <h4 className="de_modal" data-url="single-blog.html">Tips for Healthy Teeth<span></span></h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-contact" className="jarallax">
          <div className="de-gradient-edge-top"></div>
          <img src="images/background/l5.jpg" className="jarallax-img" alt="" />
          <div className="container z-index-1000">
            <div className="row">
              <div className="col-md-12 text-center wow fadeInUp">
                <h2>Contact Me</h2>
                <div className="space-border"></div>
              </div>
              <div className="col-lg-8 offset-lg-2 wow fadeInUp">
                <div className="contact_form_wrapper">
                  <form name="contactForm" id="contact_form" className="form-border" method="post" action="#">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="field-set">
                          <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="field-set">
                          <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="field-set">
                          <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="field-set">
                        <textarea name="message" id="message" className="form-control" placeholder="Your Message" required></textarea>
                      </div>
                      <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                      <div id='submit' className="mt10">
                        <input type='submit' id='send_message' value='Send Message' className="btn-main" />
                      </div>

                      <div id="success_message" className='success'>
                        Your message has been sent successfully. Refresh this page if you want to send more messages.
                      </div>
                      <div id="error_message" className='error'>
                        Sorry there was an error sending your form.
                      </div>
                    </div>
                  </form>
                </div>
                <div className="spacer-double"></div>
                <div className="row text-center wow fadeInUp">
                  <div className="col-md-4">
                    <div className="wm-1"></div>
                    <h6>Email Me</h6>
                    <p>contact@kyrosnoriaki.com</p>
                  </div>
                  <div className="col-md-4">
                    <div className="wm-1"></div>
                    <h6>Call Me</h6>
                    <p>+1 700 333 92 96</p>
                  </div>
                  <div className="col-md-4">
                    <div className="wm-1"></div>
                    <h6>Address</h6>
                    <p>Collins Street West, Louisiana, Bayerfurt, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom"></div>
        </section> */}
      </div>
      {/* <a href="index-v2-light.html#" id="back-to-top" /> */}
      <Footer />
    </div>
  );
}

export default Landing;
