function SkillBar({skill, value}) {
  return (
    <div className="d-skill">
      <div className="d-info">
        <span>{skill}</span>
      </div>
      <div className="d-progress-line">
        <span className="d-fill-line" data-value={value} style={{width: `${value}%`}}></span>
      </div>
    </div>
  );
};

export default SkillBar;