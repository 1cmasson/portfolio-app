import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimate from '../ScrollAnimate';
import ProjectModal from '../ProjectModal';
import gallery1 from '../../assets/images/gallery/gallary1.png';
import gallery2 from '../../assets/images/gallery/gallary2.png';
import gallery3 from '../../assets/images/gallery/gallary3.png';
import gallery4 from '../../assets/images/gallery/gallary4.png';
import gallery5 from '../../assets/images/gallery/gallary5.png';
import gallery6 from '../../assets/images/gallery/gallary6.png';

const projects = [{
  img: gallery1,
  title: 'Dashboard React & Material',
  type: 'url',
  url: '/projects/dashboard'
}, {
  img: gallery2,
  title: 'Your-Manor',
  desc: 'your-manor.com is a peer-to-peer real estate marketplace. It allows buyers and sellers to have direct communication without a third-party realtor being involved. This can save you up to 6% commissions that is paid to the realtor. It is capable of signing legal documents, sending emails based on even triggers, and receiving form data.',
  url: 'https://your-manor.com/',
  type: 'modal',
}, {
  img: gallery3,
  title: 'Archi Interior Design',
  type: 'url',
  url: '/projects/dashboard'
}, {
  img: gallery4,
  title: 'Archi Interior Design',
  type: 'url',
  url: '/projects/dashboard'
}, {
  img: gallery5,
  title: 'Archi Interior Design',
  type: 'url',
  url: '/projects/dashboard'
}, {
  img: gallery6,
  title: 'Archi Interior Design',
  type: 'url',
  url: '/projects/dashboard'
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
    <Link to={project.url} target="_blank" rel="noreferrer">
      {children}
    </Link>
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
      />
    </>
  )
}
