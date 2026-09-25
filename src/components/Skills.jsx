function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="section-heading">
        <p>SKILLS</p>
        <h2>Technologies I work with</h2>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming</h3>

          <div className="skill-list">
            <span>Python</span>
            <span>Java</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Development</h3>

          <div className="skill-list">
            <span>React</span>
            <span>FastAPI</span>
            <span>Streamlit</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Data & AI</h3>

          <div className="skill-list">
            <span>Pandas</span>
            <span>NumPy</span>
            <span>OpenCV</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Database & Tools</h3>

          <div className="skill-list">
            <span>MySQL</span>
            <span>SQLite</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;