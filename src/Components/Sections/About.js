import ScrollAnimate from '../ScrollAnimate';
import SkillBar from '../SkillBar';
import skillset from '../../utiles/skillset.json';

function About() {
  const half = Math.ceil(skillset.length / 2);
  const skills = skillset.slice(0);
  const skillset1 = skills.splice(0, half);
  const skillset2 = skills.splice(-half);
  return (
    <section id="section-about" className="no-bottom">
      <div className="container relative">
        <div className="row">
          <ScrollAnimate className="col-md-12">
            <h2>About Me</h2>
            <p>I am a  Fullstack developer. I graduated from Florida International University in 2021 with a Bachelor's in Computer Science. Over the past 5 years, I have been part of numerous enterprise development projects, as a developer. I am a unicorn of the technical world; being able to design,develop, and architect solutions.</p>
            <p>When I am not busy with work, I enjoy comic books, movies, gaming, and tennis.</p>
          </ScrollAnimate>
          <ScrollAnimate
            className="col-md-6"
            style={{
              animationDelay: '0.2s'
            }}
          >
            <div className="d-skills-bar">
              <div className="d-bar">
                {skillset1.map((skill, i) => (
                  <SkillBar key={i} skill={skill.lbl} value={skill.v} />
                ))}
              </div>
            </div>
          </ScrollAnimate>
          <ScrollAnimate
            className="col-md-6"
            style={{
              animationDelay: '0.2s'
            }}
          >
            <div className="d-skills-bar">
              <div className="d-bar">
                {skillset2.map((skill, i) => (
                  <SkillBar key={i} skill={skill.lbl} value={skill.v} />
                ))}
              </div>
            </div>
          </ScrollAnimate>  
        </div>
      </div>
    </section>
  );
};

export default About;