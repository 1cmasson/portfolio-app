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
import ContactForm from '../../Components/Sections/ContactForm';

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
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
