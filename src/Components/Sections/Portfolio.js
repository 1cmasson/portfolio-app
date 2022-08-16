import { Link } from 'react-router-dom';
import ScrollAnimate from '../ScrollAnimate';
import gallery1 from '../../assets/images/gallery/gallary1.png';
import gallery2 from '../../assets/images/gallery/gallary2.png';
import gallery3 from '../../assets/images/gallery/gallary3.png';
import gallery4 from '../../assets/images/gallery/gallary4.png';
import gallery5 from '../../assets/images/gallery/gallary5.png';
import gallery6 from '../../assets/images/gallery/gallary6.png';

const projects = [{
  img: gallery1,
  title: 'Dashboard React & Material',
  url: '/projects/dashboard'
}, {
  img: gallery2,
  title: 'Archi Interior Design'
}, {
  img: gallery3,
  title: 'Archi Interior Design'
}, {
  img: gallery4,
  title: 'Archi Interior Design'
}, {
  img: gallery5,
  title: 'Archi Interior Design'
}, {
  img: gallery6,
  title: 'Archi Interior Design'
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
  const content = (
    <div className="de_modal" data-url="single-project.html">
      <div className="card-image-1 mod-d" data-tilt>
        <div className="d-text">
          <h3>{project.title}</h3>
        </div>
        <img src={project.img} className="img-fluid" alt="" />
      </div>
    </div>
  );

    return (
      <ScrollAnimate
        className="col-md-4 item"
        style={{
          animationDelay: `${delay}s`
        }}
      >
        {project.url ? (
          <Link to={project.url} target="_blank" rel="noreferrer">
            {content}
          </Link>
        ) : content}
      </ScrollAnimate>
    );
};