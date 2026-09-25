function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Priyansh Saxena
          </h1>

          <h2>
            B.Tech CSE (Data Science) Student
          </h2>

          <p className="hero-description">
            I build practical software, full-stack and data-driven
            applications using Python, FastAPI, React, and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img
            src="/images/profile.jpeg"
            alt="Priyansh Saxena"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;