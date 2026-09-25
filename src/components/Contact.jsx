function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-heading">
        <p>CONTACT</p>
        <h2>Let's connect</h2>
      </div>

      <div className="contact-container">

        <div className="contact-intro">
          <h3>
            Open to new opportunities!
          </h3>

          <p>
            I'm open to internships, entry-level opportunities,
            and collaborations where I can learn, contribute,
            and build practical solutions.
          </p>
        </div>


        <div className="contact-details">

          <a
            href="mailto:Priyanshsaxena224@gmail.com"
            className="contact-item"
          >
            <span className="contact-label">
              Email
            </span>

            <span className="contact-value">
              Priyanshsaxena224@gmail.com
            </span>
          </a>


          <a
            href="tel:+917748817030"
            className="contact-item"
          >
            <span className="contact-label">
              Phone
            </span>

            <span className="contact-value">
              +91 7748817030
            </span>
          </a>


          <a
            href="https://www.linkedin.com/in/priyansh-saxena-9408a827a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">
              LinkedIn
            </span>

            <span className="contact-value">
              Connect with me ↗
            </span>
          </a>

          <a
            href="https://www.instagram.com/priyansh_saxena._?stkn=N2hrem9ncDNsNHEz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">
              Instagram
             </span>

             <span className="contact-value">
               @priyansh_saxena._ ↗
             </span>
           </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;