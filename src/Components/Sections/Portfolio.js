import { useState } from 'react';
import ScrollAnimate from '../ScrollAnimate';
import ProjectModal from '../ProjectModal';
import gallery1 from '../../assets/images/gallery/gallary1.png';
import gallery2 from '../../assets/images/gallery/gallary2.png';
import gallery3 from '../../assets/images/gallery/gallary3.png';
import gallery4 from '../../assets/images/gallery/gallary4.png';
import gallery5 from '../../assets/images/gallery/gallary5.png';
import gallery6 from '../../assets/images/gallery/gallary6.png';
import gallery7 from '../../assets/images/gallery/gallary7.png';
import your_manor1 from '../../assets/images/gallery/your-manor/1.png';
import your_manor2 from '../../assets/images/gallery/your-manor/2.png';
import your_manor3 from '../../assets/images/gallery/your-manor/3.png';
import your_manor4 from '../../assets/images/gallery/your-manor/4.png';
import your_manor5 from '../../assets/images/gallery/your-manor/5.png';
import ecommerce_platform_01 from '../../assets/images/gallery/ecommerce-platform/01.png';
import ecommerce_platform_02 from '../../assets/images/gallery/ecommerce-platform/02.png';

const projects = [{
  img: gallery1,
  title: 'Dashboard React & Material',
  type: 'url',
  url: '/projects/dashboard'
}, {
  img: gallery2,
  title: 'Real Estate Marketplace',
  desc: [
    'I was a full-stack developer on a project for a peer-to-peer real estate marketplace called "your-manor".',
    'My task was to develop a platform that allowed for direct communication between buyers and sellers, without the need for a third-party realtor. This was intended to save users up to 6% in commission fees typically paid to realtors.',
    'I implemented a number of features to achieve this goal, including the ability for users to sign legal documents, automatic email triggers based on specific events, and the ability for users to submit and receive form data.',
    'The final product was a successful and user-friendly platform that allowed for seamless communication between buyers and sellers, resulting in cost savings for users and increased efficiency in the real estate transaction process.',
    'Skills: React, Redux, Node, Express, JavaScript, TypeScript, CSS, API Integration, Real Estate'
  ],
  // url: 'https://your-manor.com/',
  type: 'modal',
  imgs: [your_manor1, your_manor2, your_manor3, your_manor4, your_manor5]
}, {
  img: gallery6,
  title: 'Stock Chart',
  type: 'url',
  url: '/projects/stock-chart'
}, {
  img: gallery7,
  title: 'Ecommerce Platform',
  desc: [
    'I was working as a lead front-end developer on a project for a large retail company.',
    'The task was to create a new e-commerce platform that would be used by thousands of customers daily.',
    'I led a team of developers and designers to create a custom-built e-commerce platform using React.js, Node.js and Shopify. We implemented a microservices architecture and used agile development methodologies to ensure timely delivery.',
    'The new platform was launched on schedule and has since seen a 30% increase in online sales for the company, as well as positive feedback from customers about the improved user experience.',
    'Skills: React, Shopify, Ecommerce'
  ],
  type: 'modal',
  imgs: [ecommerce_platform_01, ecommerce_platform_02]
}, {
  img: gallery3,
  title: 'Voting BlockChain',
  type: 'url',
  url: 'https://vigilant-leavitt-4133eb.netlify.app/'
}, {
  img: gallery4,
  title: 'Covid-19 Tracker',
  type: 'url',
  url: 'https://zealous-bhabha-ac12e5.netlify.app/'
}, {
  img: gallery5,
  title: 'BOLT',
  type: 'url',
  url: 'https://goofy-joliot-9dcc70.netlify.app/'
}]

function Portfolio() {
  return (
    <section id="section-portfolio" className="no-bottom">
      <div className="container relative">
        <div className="row">
          <ScrollAnimate className="col-md-12 text-center">
            <h2>Portfolio</h2>
            <div className="space-border"></div>
          </ScrollAnimate>
        </div>
        <div id="gallery" className="row sequence">
          {projects.map((project, i) => <Project key={i} project={project} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

function Project({project, index}) {
  const delay = 0.2 * index;

  const components = {
    'url': ProjectURLType,
    'modal': ProjectModalType,
  }

  const Component = components[project.type];

  return (
    <ScrollAnimate
      className="col-md-4 item"
      style={{
        animationDelay: `${delay}s`
      }}
    >
      <Component project={project}>
        <div className="de_modal">
          <div className="card-image-1 mod-d" data-tilt>
            <div className="d-text">
              <h3>{project.title}</h3>
            </div>
            <img src={project.img} className="img-fluid" alt="" />
          </div>
        </div>
      </Component>
    </ScrollAnimate>
  );
};

function ProjectURLType({project, children}) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function ProjectModalType({project, children}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        {children}
      </div>
      <ProjectModal
        open={open}
        handleClose={handleClose}
        title={project.title}
        desc={project.desc}
        url={project.url}
        imgs={project.imgs}
      />
    </>
  )
}
