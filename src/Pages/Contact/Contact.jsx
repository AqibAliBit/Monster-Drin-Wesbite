import { useEffect, useState } from "react";
import './Contact.css'
import Navbar from "../../Component/Navbar/Navbar";
const MARQUEE_WORDS_TOP = ["WITH", "MONSTER", "UNLEASH", "THE", "BEAST", "WITH", "MONSTER"];
const MARQUEE_WORDS_BOTTOM = ["HARD", "MONSTER", "STYLE", "ENERGY", "THAT", "MAKES"];

function MarqueeBar({ words, reverse }) {
  const loop = [...words, ...words, ...words];
  return (
    <div className="marquee-outer">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((w, i) => (
          <span className="marquee-item" key={i}>
            <span className="diamond">✦</span>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    if (!document.getElementById("remixicon-css")) {
      const link = document.createElement("link");
      link.id = "remixicon-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css";
      document.head.appendChild(link);
    }
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
   
    <div className="Contact-page">
     <Navbar/>

      <MarqueeBar words={MARQUEE_WORDS_TOP} />

      <div className="content">
        <div className="form-col">
          <h1 className="heading">Join Us in Creating Something Great</h1>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message*"
              value={form.message}
              onChange={handleChange}
              required
            />

            <div className="submit-row">
              <button type="submit" className="send-btn">
                Send Message
              </button>
              <button type="button" className="arrow-circle" aria-label="submit">
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="info-col">
          <div className="big-arrow">
            <i className="ri-arrow-right-up-line"></i>
          </div>

          <div className="info-block">
            <h4>Address</h4>
            <p>1 Monster Way Corona<br />Corona, CA 92879</p>
          </div>

          <div className="info-block">
            <h4>Contact</h4>
            <p>
              Phone : 1-866-322-4466<br />
              Email : example@email.com
            </p>
          </div>

          <div className="info-block">
            <h4>Open Time</h4>
            <p>Mon - Fri : 8 AM - 5 PM PST</p>
          </div>

          <div className="info-block">
            <h4>Stay Connected</h4>
            <div className="socials">
              <i className="ri-facebook-fill"></i>
              <i className="ri-twitter-x-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-youtube-fill"></i>
            </div>
          </div>
        </div>
      </div>



      <MarqueeBar words={MARQUEE_WORDS_BOTTOM} reverse />
    </div>
  );
}