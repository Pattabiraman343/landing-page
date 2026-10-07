
import { useEffect, useState } from "react";
import "./App.css";

const slides = [
  {
    tag: "DIGITAL SOLUTIONS",
    title: "We Build Digital Experiences That Matter.",
    description:
      "Transform your ideas into modern, scalable digital products designed to help your business grow.",
    button: "Get Started",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
  },
  {
    tag: "CREATIVE & INNOVATIVE",
    title: "Turn Your Ideas Into Something Extraordinary.",
    description:
      "From strategy to development, we create digital experiences that connect brands with their customers.",
    button: "Explore Services",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  },
  {
    tag: "SMART TECHNOLOGY",
    title: "Technology Designed Around Your Business.",
    description:
      "Powerful technology, thoughtful design and smart solutions that make your business ready for tomorrow.",
    button: "Discover More",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    tag: "LET'S CREATE",
    title: "Your Vision. Our Technology. One Powerful Result.",
    description:
      "Let's work together to create products that are beautiful, functional and built for real-world impact.",
    button: "Let's Talk",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-container">

          {/* Logo */}
          <a href="#" className="logo">
            <span className="logo-mark">N</span>
            <span className="logo-text">NEXORA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className={menuOpen ? "nav-links mobile-open" : "nav-links"}>

            <a href="#home" className="active">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

            <button className="nav-button">
              Get Started
            </button>

          </nav>

          {/* Mobile Menu */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div
            className="slides"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >

            {slides.map((slide, index) => (

              <div
                className="slide"
                key={index}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >

                <div className="hero-overlay"></div>

                <div className="hero-content">

                  <div className="hero-tag">
                    <span></span>
                    {slide.tag}
                  </div>

                  <h1>{slide.title}</h1>

                  <p>{slide.description}</p>

                  <div className="hero-actions">

                    <button className="primary-button">
                      {slide.button}
                      <span>→</span>
                    </button>

                    <button className="secondary-button">
                      View Our Work
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Previous */}
          <button
            className="slider-arrow previous"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <span>←</span>
          </button>

          {/* Next */}
          <button
            className="slider-arrow next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span>→</span>
          </button>

          {/* Bottom Controls */}
          <div className="slider-controls">

            <div className="slide-counter">
              <span>
                {String(currentSlide + 1).padStart(2, "0")}
              </span>

              <div className="counter-line"></div>

              <span>
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="dots">

              {slides.map((_, index) => (

                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "dot active"
                      : "dot"
                  }
                  onClick={() => goToSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                ></button>

              ))}

            </div>

          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </section>

      </main>
{/* ================= ABOUT US ================= */}

<section className="about-section" id="about">

  <div className="about-container">

    {/* LEFT SIDE */}

    <div className="about-images">

      <div className="about-image-main">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
          alt="Our team"
        />
      </div>

      <div className="about-image-small">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=85"
          alt="Team collaboration"
        />
      </div>

      <div className="experience-box">
        <strong>08+</strong>
        <span>Years of<br />Experience</span>
      </div>

    </div>


    {/* RIGHT SIDE */}

    <div className="about-content">

      <div className="section-label">
        <span></span>
        ABOUT US
      </div>

      <h2>
        We Create Digital
        <br />
        <span>Experiences That Inspire.</span>
      </h2>

      <p className="about-intro">
        We are a team of designers, developers and strategists
        focused on creating meaningful digital experiences that
        help businesses move forward.
      </p>

      <p className="about-description">
        From strategy and design to development and technology,
        we bring everything together under one roof. Our approach
        combines creativity with technology to build solutions
        that are simple, effective and built to last.
      </p>


      {/* FEATURES */}

      <div className="about-features">

        <div className="about-feature">
          <div className="feature-number">01</div>

          <div>
            <h3>Creative Thinking</h3>
            <p>
              Fresh ideas that make your brand stand out.
            </p>
          </div>
        </div>


        <div className="about-feature">
          <div className="feature-number">02</div>

          <div>
            <h3>Smart Technology</h3>
            <p>
              Modern technology built around your needs.
            </p>
          </div>
        </div>

      </div>


      {/* BUTTON */}

      <button className="about-button">
        Discover Our Story
        <span>→</span>
      </button>

    </div>

  </div>


  {/* STATS */}

  <div className="about-stats">

    <div className="stat">
      <strong>120+</strong>
      <span>Projects Completed</span>
    </div>

    <div className="stat">
      <strong>80+</strong>
      <span>Happy Clients</span>
    </div>

    <div className="stat">
      <strong>15+</strong>
      <span>Team Members</span>
    </div>

    <div className="stat">
      <strong>08+</strong>
      <span>Years Experience</span>
    </div>

  </div>

</section>


{/* ================= OUR COURSES ================= */}

<section className="courses-section" id="services">

  <div className="courses-container">

    {/* Section Header */}

    <div className="courses-header">

      <div>
        <div className="section-label">
          <span></span>
          OUR COURSES
        </div>

        <h2>
          Learn Skills That
          <br />
          <span>Move You Forward.</span>
        </h2>
      </div>

      <p>
        Build practical, industry-ready skills through
        carefully designed courses taught with real-world
        projects and modern technologies.
      </p>

    </div>


    {/* Course Cards */}

    <div className="courses-grid">

      {/* Card 1 */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=85"
            alt="Full Stack Development"
          />

          <span className="course-category">
            DEVELOPMENT
          </span>

        </div>

        <div className="course-content">

          <div className="course-number">
            01
          </div>

          <h3>
            Full Stack Development
          </h3>

          <p>
            Learn frontend, backend and database
            development by building real-world
            applications.
          </p>

          <div className="course-meta">

            <span>6 Months</span>

            <span>•</span>

            <span>Beginner</span>

          </div>

          <button className="course-link">
            Explore Course
            <span>→</span>
          </button>

        </div>

      </div>


      {/* Card 2 */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85"
            alt="Web Development"
          />

          <span className="course-category">
            DEVELOPMENT
          </span>

        </div>

        <div className="course-content">

          <div className="course-number">
            02
          </div>

          <h3>
            Web Development
          </h3>

          <p>
            Master modern HTML, CSS, JavaScript and
            React to create responsive websites.
          </p>

          <div className="course-meta">

            <span>4 Months</span>

            <span>•</span>

            <span>Beginner</span>

          </div>

          <button className="course-link">
            Explore Course
            <span>→</span>
          </button>

        </div>

      </div>


      {/* Card 3 */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
            alt="Data Science"
          />

          <span className="course-category">
            DATA & AI
          </span>

        </div>

        <div className="course-content">

          <div className="course-number">
            03
          </div>

          <h3>
            Data Science & AI
          </h3>

          <p>
            Explore data analysis, machine learning
            and artificial intelligence with practical projects.
          </p>

          <div className="course-meta">

            <span>6 Months</span>

            <span>•</span>

            <span>Intermediate</span>

          </div>

          <button className="course-link">
            Explore Course
            <span>→</span>
          </button>

        </div>

      </div>


      {/* Card 4 */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85"
            alt="Digital Marketing"
          />

          <span className="course-category">
            MARKETING
          </span>

        </div>

        <div className="course-content">

          <div className="course-number">
            04
          </div>

          <h3>
            Digital Marketing
          </h3>

          <p>
            Learn SEO, social media marketing, paid
            advertising and modern growth strategies.
          </p>

          <div className="course-meta">

            <span>3 Months</span>

            <span>•</span>

            <span>Beginner</span>

          </div>

          <button className="course-link">
            Explore Course
            <span>→</span>
          </button>

        </div>

      </div>


      {/* Card 5 */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85"
            alt="UI UX Design"
          />

          <span className="course-category">
            DESIGN
          </span>

        </div>

        <div className="course-content">

          <div className="course-number">
            05
          </div>

          <h3>
            UI / UX Design
          </h3>

          <p>
            Design beautiful and user-friendly digital
            experiences using modern design principles.
          </p>

          <div className="course-meta">

            <span>4 Months</span>

            <span>•</span>

            <span>Beginner</span>

          </div>

          <button className="course-link">
            Explore Course
            <span>→</span>
          </button>

        </div>

      </div>


      {/* Card 6 */}

      <div className="course-card">

        <div className="course-image">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85"
            alt="Cloud Computing"
          />

          <span className="course-category">
            TECHNOLOGY
          </span>

        </div>

        <div className="course-content">

          <div className="course-number">
            06
          </div>

          <h3>
            Cloud Computing
          </h3>

          <p>
            Understand cloud platforms, deployment,
            DevOps fundamentals and scalable systems.
          </p>

          <div className="course-meta">

            <span>4 Months</span>

            <span>•</span>

            <span>Intermediate</span>

          </div>

          <button className="course-link">
            Explore Course
            <span>→</span>
          </button>

        </div>

      </div>

    </div>


    {/* Bottom CTA */}

    <div className="courses-bottom">

      <p>
        Can't find the course you're looking for?
      </p>

      <button>
        View All Courses
        <span>→</span>
      </button>

    </div>

  </div>

</section>
{/* ================= WHY CHOOSE US ================= */}

<section className="why-section" id="why-us">

  <div className="why-container">

    {/* Header */}

    <div className="why-header">

      <div>
        <div className="section-label why-label">
          <span></span>
          WHY CHOOSE US
        </div>

        <h2>
          More Than Just
          <br />
          <span>Learning.</span>
        </h2>
      </div>

      <p>
        We focus on practical learning, real projects and
        industry-ready skills that help you move confidently
        from learning to your career.
      </p>

    </div>


    {/* Main Feature Area */}

    <div className="why-main">

      {/* LEFT FEATURES */}

      <div className="why-column">

        <div className="why-card">

          <div className="why-card-top">
            <span className="why-number">01</span>
            <span className="why-icon">↗</span>
          </div>

          <h3>Industry-Focused Learning</h3>

          <p>
            Learn the technologies and skills that companies
            actually use in today's digital industry.
          </p>

        </div>


        <div className="why-card">

          <div className="why-card-top">
            <span className="why-number">02</span>
            <span className="why-icon">✦</span>
          </div>

          <h3>Real-World Projects</h3>

          <p>
            Build practical projects that help you understand
            how technology works beyond the classroom.
          </p>

        </div>


        <div className="why-card">

          <div className="why-card-top">
            <span className="why-number">03</span>
            <span className="why-icon">◈</span>
          </div>

          <h3>Expert Mentors</h3>

          <p>
            Get guidance from experienced professionals who
            understand real-world development and business.
          </p>

        </div>

      </div>


      {/* CENTER VISUAL */}

      <div className="why-visual">

        <div className="visual-circle circle-one"></div>

        <div className="visual-circle circle-two"></div>

        <div className="visual-center">

          <span className="visual-small">
            BUILD
          </span>

          <strong>
            YOUR
            <br />
            FUTURE
          </strong>

          <span className="visual-arrow">
            ↗
          </span>

        </div>

        <div className="visual-orbit orbit-one">
          <span>CODE</span>
        </div>

        <div className="visual-orbit orbit-two">
          <span>CREATE</span>
        </div>

        <div className="visual-orbit orbit-three">
          <span>GROW</span>
        </div>

      </div>


      {/* RIGHT FEATURES */}

      <div className="why-column">

        <div className="why-card">

          <div className="why-card-top">
            <span className="why-number">04</span>
            <span className="why-icon">◎</span>
          </div>

          <h3>Career Support</h3>

          <p>
            Get practical career guidance, interview preparation
            and support to help you reach your goals.
          </p>

        </div>


        <div className="why-card">

          <div className="why-card-top">
            <span className="why-number">05</span>
            <span className="why-icon">◇</span>
          </div>

          <h3>Flexible Learning</h3>

          <p>
            Learn at your own pace with structured content
            designed to fit different learning styles.
          </p>

        </div>


        <div className="why-card">

          <div className="why-card-top">
            <span className="why-number">06</span>
            <span className="why-icon">↗</span>
          </div>

          <h3>Growing Community</h3>

          <p>
            Connect with fellow learners, share knowledge
            and grow together throughout your journey.
          </p>

        </div>

      </div>

    </div>


    {/* Stats */}

    <div className="why-stats">

      <div className="why-stat">
        <strong>95%</strong>
        <span>Course Completion</span>
      </div>

      <div className="why-stat">
        <strong>4.9/5</strong>
        <span>Learner Rating</span>
      </div>

      <div className="why-stat">
        <strong>1,500+</strong>
        <span>Students Trained</span>
      </div>

      <div className="why-stat">
        <strong>90+</strong>
        <span>Industry Projects</span>
      </div>

    </div>

  </div>

</section>


{/* DISCOUNT SECTION */}
<section className="discount-section" id="discount">
  <div className="discount-container">
    <div className="discount-content">
      <div className="discount-badge">LIMITED TIME OFFER</div>

      <h2>
        Wait! <span>Before You Go.</span>
      </h2>

      <p className="discount-subtitle">
        Here is a <strong>20% Discount</strong> on your course fee.
      </p>

      <p className="discount-text">
        Take the next step in your career and save more on your learning
        journey. Fill in your details and claim your exclusive discount.
      </p>

      <div className="discount-highlight">
        <span className="discount-percent">20%</span>
        <div>
          <strong>COURSE FEE DISCOUNT</strong>
          <small>Limited period offer</small>
        </div>
      </div>
    </div>

    <div className="discount-form-card">
      <div className="form-header">
        <span>🎁</span>
        <div>
          <h3>Claim Your Discount</h3>
          <p>Fill in your details below</p>
        </div>
      </div>

      <form className="discount-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Select Course</label>
          <select defaultValue="">
            <option value="" disabled>
              Choose your course
            </option>
            <option>Full Stack Development</option>
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>Data Science & AI</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
          </select>
        </div>

        <button type="submit" className="discount-button">
          Claim 20% Discount
          <span>→</span>
        </button>

        <p className="form-note">
          🔒 Your information is safe and will not be shared.
        </p>
      </form>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="footer" id="contact">
  <div className="footer-container">
  <div className="branches-section">
      <div className="branches-heading">
        <span>OUR PRESENCE</span>
        <h3>Our Branches</h3>
      </div>

      <div className="branches-grid">

        <div className="branch-card">
          <div className="branch-number">01</div>
          <div>
            <h4>Coimbatore</h4>
            <p>Avinashi Road, Coimbatore</p>
            <span>Tamil Nadu</span>
          </div>
        </div>

        <div className="branch-card">
          <div className="branch-number">02</div>
          <div>
            <h4>Chennai</h4>
            <p>Anna Nagar, Chennai</p>
            <span>Tamil Nadu</span>
          </div>
        </div>

        <div className="branch-card">
          <div className="branch-number">03</div>
          <div>
            <h4>Bangalore</h4>
            <p>Whitefield, Bangalore</p>
            <span>Karnataka</span>
          </div>
        </div>

        <div className="branch-card">
          <div className="branch-number">04</div>
          <div>
            <h4>Tirunelveli</h4>
            <p>Palayamkottai, Tirunelveli</p>
            <span>Tamil Nadu</span>
          </div>
        </div>

      </div>
    </div>

    {/* FOOTER TOP */}
    <div className="footer-top">

      {/* COMPANY */}
      <div className="footer-company">
        <a href="#" className="footer-logo">
          <span className="logo-mark">N</span>
          <span>NEXORA</span>
        </a>

        <p>
          Empowering students with industry-ready skills,
          practical training and career-focused learning.
        </p>

        <div className="footer-socials">
          <a href="#">in</a>
          <a href="#">f</a>
          <a href="#">ig</a>
          <a href="#">x</a>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="footer-column">
        <h4>Quick Links</h4>

        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Our Courses</a>
        <a href="#projects">Why Choose Us</a>
        <a href="#discount">Get Discount</a>
      </div>

      {/* COURSES */}
      <div className="footer-column">
        <h4>Our Courses</h4>

        <a href="#">Full Stack Development</a>
        <a href="#">Frontend Development</a>
        <a href="#">Backend Development</a>
        <a href="#">Data Science & AI</a>
        <a href="#">UI/UX Design</a>
      </div>

      {/* CONTACT */}
      <div className="footer-column footer-contact">
        <h4>Contact Us</h4>

        <div className="contact-item">
          <span>📍</span>
          <p>
            2nd Floor, Nexora Tower,<br />
            Avinashi Road,<br />
            Coimbatore, Tamil Nadu 641018
          </p>
        </div>

        <div className="contact-item">
          <span>📞</span>
          <a href="tel:+919876543210">
            +91 98765 43210
          </a>
        </div>

        <div className="contact-item">
          <span>✉</span>
          <a href="mailto:info@nexora.com">
            info@nexora.com
          </a>
        </div>
      </div>
    </div>

    {/* BRANCHES */}
    
    {/* FOOTER BOTTOM */}
    <div className="footer-bottom">
      <p>
        © 2026 NEXORA. All Rights Reserved.
      </p>

      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>

  </div>
</footer>

    </div>
  );
}

export default App;
