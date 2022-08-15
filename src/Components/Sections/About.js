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
          <div className="col-md-12 animate__animated animate__fadeInUp">
            <h2>About Me</h2>
            <p>Experience in building and maintaining enterprise applications.</p>
            <p>I'm experienced in working with React, NodeJS, and GraphQL, I have also built projects with Python and Java. I've worked with a start up on building a real estate marketplace using a low-code visual programming language (Bubble.io). I've integrated lean low cost solutions to the application like SendGrid for sending emails, Hotjar for usability testing, and EverSign for signing contractual documents. The client was thrilled to see the results of the application and we continue to work together on advancing and maintaining the product.</p>
            <p>I've also worked on an analytics dashboard for a Fortune 500 company that had their own component design system. I used GraphQL to query data from their New Relic and Github accounts, React for the frontend, NodeJS for the backend, and Tailwind CSS for styling . The analytics was based on key performance indicator's from the components in their design system, such as Core Web Vitals Metrics, DORA Metrics, and multiple error metrics. By the company's employees being aware of these metrics, they were able to improve their site's performance and boost their keyword rankings by 15%.</p>
            <p>I am a problem solver at heart and excel in next level challenges. I look forward to building good relationships with all my clients and working hard to support their needs.</p>
          </div>
          <div
            className="col-md-6 animate__animated animate__fadeInUp"
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
          </div>
          <div
            className="col-md-6 animate__animated animate__fadeInUp"
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
          </div>  
        </div>
      </div>
    </section>
  );
};

export default About;