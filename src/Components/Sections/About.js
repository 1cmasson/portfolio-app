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
            <p>I am a Fullstack Web Developer with 7 years of experience. I am offering SPA development with React and Vue, Dashboard development with React, Chart library, Widgets, and DnD, and Backend development with Node, Express, Python, and Django.</p>
            <p>As a web developer, I design, develop, enhance, test and deploy web applications with the end goal of creating engaging and user-friendly site layouts and functions. I gather and define requirements, maintain websites, troubleshoot and fix bugs, follow best practices, and collaborate with other teams.</p>
            <p>I’m proficient in React, Vue, CSS, JavaScript, TypeScript, Node, and Python and I have intermediate-level proficiency in PHP and Laravel. I would love to expand my skills to include ChatGPT and am currently researching the right ChatGPT course to take in my free time.</p>
            <p>If you like what you see, please invite me to apply to your job, and let's connect to see if my skillsets match what you're looking for.</p>
            <p>Thank you for reading my profile!</p>
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