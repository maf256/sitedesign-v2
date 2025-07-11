import {
  MapPin,
  Phone,
  Mail,
  Download,
  Linkedin,
  Github,
  ScrollText,
  MessageCircle,
} from "lucide-react";
import "../scss/contact.scss";

const Contact = () => {
  const contactInfo = [
    { label: "Address", value: "1338 Sandvika Norway", icon: MapPin },
    {
      label: "Phone",
      value: "+47 40189111",
      icon: Phone,
      link: "tel:+4740189111",
    },
    {
      label: "Email",
      value: "majid@sitedesign.no",
      icon: Mail,
      link: "mailto:majid@sitedesign.no",
    },
  ];

  const personalInfo = [
    { label: "Age", value: "41" },

    { label: "Nationality", value: "Iran" },
    { label: "Study", value: "Azad University of Iran" },
    { label: "Degree", value: "Master" },
    { label: "Freelance", value: "Available" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/farsangi",
    },
    { name: "GitHub", icon: Github, url: "https://github.com/maf256" },
    { name: "Phone", icon: Phone, url: "tel:+4740189111" },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://api.whatsapp.com/send/?phone=%2B4740189111&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2>Contact</h2>

        <div className="contact__grid">
          <div className="contact__section">
            <h3>Get In Touch</h3>
            <div className="contact__info">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact__item">
                  <item.icon className="contact__icon" />
                  <div>
                    <span className="contact__label">{item.label}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="contact__value contact__link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__status">
              <div className="contact__status-indicator"></div>
              <p>Available for freelance projects</p>
            </div>
          </div>

          <div className="contact__section">
            <h3>About</h3>
            <div className="contact__table">
              {personalInfo.map((item, index) => (
                <div key={index} className="contact__row">
                  <span className="contact__label">{item.label}</span>
                  <span className="contact__value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__section">
            <h3>Resources</h3>
            <div className="contact__actions">
              <a
                href="https://drive.google.com/file/d/1-WdloD7z_Y7TRNyC0zWIMPefDYLFt2Ki/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                <Download className="contact__icon" />
                Download CV
              </a>
              <div className="contact__booking">
                <ScrollText className="contact__icon" />
                <span>View Licences</span>
              </div>
            </div>
          </div>
          <div className="contact_connect">
            <h3>Connect</h3>
            <div className="contact__social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  <social.icon className="contact__social-icon" />
                  <span className="contact__social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__section contact__map-section">
            <h3>Location</h3>
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.1878318604277!2d10.50676427741654!3d59.89583186554648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641136be2073181%3A0x2754650120eec23f!2sOsloWeb%20Webdesign%20%26%20Seo!5e0!3m2!1sen!2sno!4v1687637397889!5m2!1sen!2sno"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          <div className="contact__section contact__booking-section">
            <h3>Schedule a Meeting</h3>
            <div className="contact__calendar">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ08q78jfdTSAvdjzrYsZzvFRPIxbVtTln79uu3M9ITm3VITP81IoKX-YurFrpjs3PoE-IG9z8je?gv=true"
                width="100%"
                height="400"
                style={{ border: 0 }}
                title="Book a Meeting"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
