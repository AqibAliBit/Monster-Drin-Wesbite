import { useEffect } from "react";
import './Storys.css'
import Navbar from "../../Component/Navbar/Navbar";
export default function Story() {
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

  const journey = [
    {
      year: "2002",
      title: "The Beginning",
      text: "Volt Energy was born with a vision to disrupt the energy drink industry.",
      icon: "ri-flashlight-fill",
    },
    {
      year: "2005",
      title: "Going Global",
      text: "Our energy reached the world, connecting with millions of fans.",
      icon: "ri-global-line",
    },
    {
      year: "2010",
      title: "Beyond Energy",
      text: "We became more than a drink; a lifestyle, a culture, a movement.",
      icon: "ri-shield-star-line",
    },
    {
      year: "Today",
      title: "Unleashing the Future",
      text: "We continue to push limits, support the bold, and unleash what's next.",
      icon: "ri-flashlight-line",
    },
  ];

  const drives = [
    {
      title: "PASSION",
      text: "We live for what we love. Passion fuels everything we do.",
      icon: "ri-flashlight-fill",
      img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=380&fit=crop",
    },
    {
      title: "ENERGY",
      text: "It's in our name and in our DNA.",
      icon: "ri-headphone-fill",
      img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=380&fit=crop",
    },
    {
      title: "COURAGE",
      text: "We support those who dare to be different.",
      icon: "ri-vip-crown-2-fill",
      img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=500&h=380&fit=crop",
    },
    {
      title: "COMMUNITY",
      text: "We are stronger together. Our community is our power.",
      icon: "ri-heart-fill",
      img: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=500&h=380&fit=crop",
    },
  ];

  return (
    <div className="story-page">
 <Navbar/>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <div className="eyebrow">OUR STORY</div>
          <h1 className="hero-title">
            Unleash
            <br />
            The <span className="accent">Beast!</span>
          </h1>
          <p className="hero-desc">
            Every can of Volt Energy carries more than just energy. It's the
            result of intensity, passion, and a relentless pursuit of being
            the best.
          </p>
          <button className="explore-btn">
            EXPLORE OUR JOURNEY <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="hero-visual">
          <div className="can">
            <div className="can-claws">///</div>
            <div className="can-brand">
              MONSTER
              <span>ENERGY</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENT BREED */}
      <section className="breed">
        <div className="breed-visual">
          <img src="https://i.pinimg.com/736x/63/e5/ed/63e5ed43b5c5d8414c8747e8d0ef125c.jpg" alt="" />
        </div>
        <div className="breed-text">
          <div className="eyebrow">IT STARTED WITH ENERGY</div>
          <h2>A Different Breed Was Born.</h2>
          <div className="divider"></div>
          <p>
            In 2002, Volt Energy was unleashed onto the scene with a bold
            mission: to create a different kind of energy drink — one that
            stood for more than just energy. One that represented hardcore
            passion, athletes, music, and an unstoppable lifestyle.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey">
        <h2>OUR JOURNEY</h2>
        <div className="timeline">
          {journey.map((j, i) => (
            <div className="t-item" key={i}>
              <div className="t-icon">
                <i className={j.icon}></i>
              </div>
              <div className="t-dot"></div>
              <div className="t-year">{j.year}</div>
              <div className="t-title">{j.title}</div>
              <p className="t-text">{j.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT DRIVES US */}
      <section className="drives">
        <h2>WHAT DRIVES US</h2>
        <div className="drives-grid">
          {drives.map((d, i) => (
            <div className="d-card" key={i}>
              <div
                className="d-img"
                style={{ backgroundImage: `url(${d.img})` }}
              ></div>
              <div className="d-body">
                <div className="d-head">
                  <i className={d.icon}></i>
                  <span>{d.title}</span>
                </div>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="banner">
        <div className="banner-title">
          UNLEASH
          <br />
          THE
          <br />
          <span className="accent">BEAST</span>
        </div>
        <div className="banner-sub">MONSTER&nbsp; E N E R G Y</div>
      </section>
    </div>
  );
}