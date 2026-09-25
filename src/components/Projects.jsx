function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="section-heading">
        <p>PROJECTS</p>
        <h2>Things I've built</h2>
      </div>

      <div className="projects-grid">


        {/* =========================
            PROJECT 01
        ========================= */}

        <article className="project-card">

          <div className="project-top">
            <span className="project-number">01</span>

            <span className="project-type">
              Computer Vision / AI
            </span>
          </div>

          <h3>
            AI Face Recognition Attendance System
          </h3>

          <p>
            A computer-vision attendance system built with Python,
            <strong> YuNet and SFace</strong> for real-time face detection and
            recognition. It includes student registration,
            automated attendance tracking, duplicate-entry
            prevention, SQLite storage, and Streamlit analytics.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>OpenCV</span>
            <span>YuNet</span>
            <span>SFace</span>
            <span>Streamlit</span>
            <span>SQLite</span>
          </div>

          <div className="project-links">

            <a
              href="https://github.com/saxenapriyansh-codes/AI-Face-Attendance-System"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://priyansh-face-attendance.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo ↗
            </a>

          </div>

        </article>


        {/* =========================
            PROJECT 02
        ========================= */}

        <article className="project-card">

          <div className="project-top">
            <span className="project-number">02</span>

            <span className="project-type">
              Full Stack / Data
            </span>
          </div>

          <h3>
            Village Development Data Dashboard
          </h3>

          <p>
            A full-stack village data platform covering <strong> 54,903
            Madhya Pradesh villages</strong>. Built with FastAPI,
            SQLAlchemy, MySQL and Pandas, featuring modular
            data pipelines, REST APIs, search, filtering,
            pagination and village-level drill-down across
            demographic and infrastructure datasets.
          </p>

          <div className="project-tech">
            <span>FastAPI</span>
            <span>Python</span>
            <span>SQLAlchemy</span>
            <span>MySQL</span>
            <span>Pandas</span>
            <span>React.js</span>
          </div>

        </article>


        {/* =========================
            PROJECT 03
        ========================= */}

        <article className="project-card">

          <div className="project-top">
            <span className="project-number">03</span>

            <span className="project-type">
              Java / Console
            </span>
          </div>

          <h3>
            Student Record Management System
          </h3>

          <p>
            A Java console application built with OOP and file
            handling to manage student records. It supports
            adding, viewing, updating and deleting records with
            persistent storage using Java File I/O.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>OOP</span>
            <span>File Handling</span>
            <span>Console I/O</span>
          </div>

          <div className="project-links">

            <a
              href="https://github.com/saxenapriyansh-codes/student-record-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub ↗
            </a>

          </div>

        </article>


      </div>

    </section>
  );
}

export default Projects;