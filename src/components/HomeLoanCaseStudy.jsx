import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const images = {
  splash: "/projects/home-loan/splash.jpg",
  address: "/projects/home-loan/address.jpg",
  entity: "/projects/home-loan/entity.jpg",
  financial: "/projects/home-loan/financial.jpg",
  journey: "/projects/home-loan/journey.jpg",
  popup: "/projects/home-loan/popup.jpg",
};

function HomeLoanCaseStudy() {
  return (
    <main className="case-study">

      {/* =====================================
          TOP NAV
      ===================================== */}

      <nav className="case-nav">

        <a href="/#work" className="back-link">
          <ArrowLeft size={17} />
          <span>Back to work</span>
        </a>

        <span className="case-nav-name">
          PRIYAL.
        </span>

        <a href="/#contact" className="case-contact">
          Let's talk
          <ArrowUpRight size={16} />
        </a>

      </nav>


      {/* =====================================
          HERO
      ===================================== */}

      <section className="case-hero">

        <div className="case-hero-copy">

          <motion.p
            className="case-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FINTECH · PRODUCT DESIGN
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Home Loan
            <br />
            <span>Journey.</span>
          </motion.h1>

          <motion.p
            className="case-hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            Designing a simpler, more guided experience
            for customers navigating the home loan journey.
          </motion.p>

        </div>


        {/* Floating screens */}

        <div className="case-hero-visual">

          <motion.div
            className="hero-screen hero-screen-back"
            initial={{ opacity: 0, y: 80, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 7 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={images.financial}
              alt="Financial profiling screen"
            />
          </motion.div>


          <motion.div
            className="hero-screen hero-screen-middle"
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={images.address}
              alt="Address details screen"
            />
          </motion.div>


          <motion.div
            className="hero-screen hero-screen-front"
            initial={{ opacity: 0, y: 120, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={images.splash}
              alt="Home loan journey splash screen"
            />
          </motion.div>

        </div>

      </section>


      {/* =====================================
          PROJECT INFO
      ===================================== */}

      <section className="case-overview">

        <div className="case-overview-intro">

          <p className="case-section-label">
            THE PROJECT
          </p>

          <h2>
            Making a complex
            <br />
            journey feel simple.
          </h2>

        </div>


        <div className="case-overview-grid">

          <div className="case-overview-text">

            <p>
              A home loan involves multiple stages, documents,
              financial details and decisions. The challenge was
              to bring these steps together into a clear and
              approachable digital journey.
            </p>

            <p>
              I worked on the experience from the initial
              onboarding flow through address details,
              financial profiling, document collection and
              journey tracking.
            </p>

          </div>


          <div className="case-meta">

            <div>
              <span>CLIENT</span>
              <strong>Decimal Technologies</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Product Designer</strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>Mobile</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>UX · UI · Interaction</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          HIGHLIGHTS
      ===================================== */}

      <section className="case-highlights">

        <div className="highlight-card">

          <span>01</span>

          <strong>360°</strong>

          <p>
            Product ecosystem
          </p>

        </div>


        <div className="highlight-card">

          <span>02</span>

          <strong>Mobile</strong>

          <p>
            First experience
          </p>

        </div>


        <div className="highlight-card">

          <span>03</span>

          <strong>End-to-end</strong>

          <p>
            Loan journey
          </p>

        </div>

      </section>


      {/* =====================================
          CHALLENGE
      ===================================== */}

      <section className="case-text-section">

        <p className="case-section-label">
          THE CHALLENGE
        </p>

        <h2>
          A home loan is
          <br />
          <span>already complicated.</span>
        </h2>

        <p className="case-large-text">
          The experience needed to make the complexity
          feel manageable — guiding users through the
          right information at the right moment instead
          of overwhelming them with everything at once.
        </p>

      </section>


      {/* =====================================
          JOURNEY
      ===================================== */}

      <section className="case-journey">

        <div className="case-section-heading">

          <div>
            <p className="case-section-label">
              01 — JOURNEY
            </p>

            <h2>
              From application
              <br />
              to <span>financial profile.</span>
            </h2>
          </div>

          <p>
            The experience was structured around
            progressive information gathering,
            allowing users to complete the journey
            step by step.
          </p>

        </div>


        <motion.div
          className="journey-image"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={images.journey}
            alt="Home loan journey overview"
          />
        </motion.div>

      </section>


      {/* =====================================
          KEY SCREENS
      ===================================== */}

      <section className="case-screens">

        <div className="case-section-heading">

          <div>
            <p className="case-section-label">
              02 — KEY SCREENS
            </p>

            <h2>
              Designing for
              <br />
              <span>clarity.</span>
            </h2>
          </div>

          <p>
            Each screen was designed to reduce cognitive
            load while keeping important financial and
            personal information easy to understand.
          </p>

        </div>


        <div className="screen-showcase">

          <motion.div
            className="showcase-screen"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images.address}
              alt="Address details"
            />

            <div className="screen-caption">
              <span>01</span>
              <strong>Address details</strong>
              <p>
                Keeping information capture structured
                and easy to scan.
              </p>
            </div>

          </motion.div>


          <motion.div
            className="showcase-screen showcase-offset"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <img
              src={images.entity}
              alt="Entity address details"
            />

            <div className="screen-caption">
              <span>02</span>
              <strong>Entity details</strong>
              <p>
                Making detailed form completion feel
                predictable and approachable.
              </p>
            </div>

          </motion.div>


          <motion.div
            className="showcase-screen"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <img
              src={images.financial}
              alt="Financial profiling"
            />

            <div className="screen-caption">
              <span>03</span>
              <strong>Financial profiling</strong>
              <p>
                Breaking down financial documentation
                into manageable steps.
              </p>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          DOCUMENTS / BANK POPUP
      ===================================== */}

      <section className="case-feature">

        <div className="case-feature-copy">

          <p className="case-section-label">
            03 — INTERACTION
          </p>

          <h2>
            Give users
            <br />
            <span>confidence.</span>
          </h2>

          <p>
            Important choices such as bank selection and
            document uploads were surfaced through focused
            interactions rather than hidden behind complex
            navigation.
          </p>

        </div>


        <motion.div
          className="feature-image"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={images.popup}
            alt="Bank selection interaction"
          />
        </motion.div>

      </section>


      {/* =====================================
          OUTCOME
      ===================================== */}

      <section className="case-outcome">

        <p className="case-section-label">
          THE OUTCOME
        </p>

        <h2>
          A more connected,
          <br />
          <span>guided experience.</span>
        </h2>

        <p className="case-outcome-text">
          The final experience brought multiple stages of
          the home loan process into a single mobile-first
          journey — creating a clearer path from application
          to financial profiling.
        </p>

        <div className="outcome-grid">

          <div>
            <strong>360°</strong>
            <span>Product ecosystem</span>
          </div>

          <div>
            <strong>Mobile</strong>
            <span>First experience</span>
          </div>

          <div>
            <strong>End-to-end</strong>
            <span>Loan journey</span>
          </div>

        </div>

      </section>


      {/* =====================================
          NEXT PROJECT
      ===================================== */}

      <section className="next-project">

        <p className="case-section-label">
          NEXT PROJECT
        </p>

        <a href="/#work">

          <span>Saarathi Bazaar</span>

          <ArrowUpRight size={30} />

        </a>

      </section>

    </main>
  );
}

export default HomeLoanCaseStudy;