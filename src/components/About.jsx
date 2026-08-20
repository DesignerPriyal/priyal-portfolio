import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          ABOUT ME
        </motion.p>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="about-grid">

          {/* LEFT — HEADING */}

          <motion.div
            className="about-heading"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <h2>
              Designing
              <br />
              <span>with purpose.</span>
            </h2>

          </motion.div>


          {/* RIGHT — CONTENT */}

          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p className="about-lead">
              I'm Priyal, a UI/UX and Product Designer focused on
              turning complex problems into clear, intuitive digital
              experiences.
            </p>

            <p>
              With a background in Experience Design and experience
              working across fintech, enterprise and workflow-driven
              products, I enjoy understanding how people, systems
              and business goals connect.
            </p>

            <p>
              My approach combines research, structured thinking and
              thoughtful visual design to create products that are
              useful, scalable and easy to understand.
            </p>


            {/* CTA */}

            <a
              href="#experience"
              className="about-link"
            >

              <span>
                Explore my experience
              </span>

              <span className="about-link-icon">
                <ArrowUpRight size={18} />
              </span>

            </a>

          </motion.div>

        </div>


        {/* =====================================================
            MOVING DESIGN / TOOLS / FOCUS
        ===================================================== */}

        <motion.div
          className="about-marquee"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >

          {/* =================================================
              DESIGN
          ================================================= */}

          <div className="about-marquee-row">

            <div className="about-marquee-track">

              <div className="about-marquee-item">

                <span>
                  DESIGN
                </span>

                <p>
                  Product Design · UI/UX Design · UX Research ·
                  Interaction Design · Design Systems
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  DESIGN
                </span>

                <p>
                  Product Design · UI/UX Design · UX Research ·
                  Interaction Design · Design Systems
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  DESIGN
                </span>

                <p>
                  Product Design · UI/UX Design · UX Research ·
                  Interaction Design · Design Systems
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  DESIGN
                </span>

                <p>
                  Product Design · UI/UX Design · UX Research ·
                  Interaction Design · Design Systems
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              TOOLS
          ================================================= */}

          <div className="about-marquee-row reverse">

            <div className="about-marquee-track">

              <div className="about-marquee-item">

                <span>
                  TOOLS
                </span>

                <p>
                  Figma · Adobe Photoshop · Illustrator ·
                  Prototyping
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  TOOLS
                </span>

                <p>
                  Figma · Adobe Photoshop · Illustrator ·
                  Prototyping
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  TOOLS
                </span>

                <p>
                  Figma · Adobe Photoshop · Illustrator ·
                  Prototyping
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  TOOLS
                </span>

                <p>
                  Figma · Adobe Photoshop · Illustrator ·
                  Prototyping
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              FOCUS
          ================================================= */}

          <div className="about-marquee-row">

            <div className="about-marquee-track">

              <div className="about-marquee-item">

                <span>
                  FOCUS
                </span>

                <p>
                  Fintech · Enterprise UX · SaaS ·
                  Data-heavy Products · Workflow Design
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  FOCUS
                </span>

                <p>
                  Fintech · Enterprise UX · SaaS ·
                  Data-heavy Products · Workflow Design
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  FOCUS
                </span>

                <p>
                  Fintech · Enterprise UX · SaaS ·
                  Data-heavy Products · Workflow Design
                </p>

              </div>

              <div className="about-marquee-item">

                <span>
                  FOCUS
                </span>

                <p>
                  Fintech · Enterprise UX · SaaS ·
                  Data-heavy Products · Workflow Design
                </p>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            DESIGN PHILOSOPHY
        ===================================================== */}

        <motion.div
          className="about-philosophy"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="about-philosophy-label">
            DESIGN PHILOSOPHY
          </p>

          <h3>
            Good design doesn't just
            <span> look good.</span>
            <br />
            It makes complexity
            <span> feel simple.</span>
          </h3>

        </motion.div>

      </div>

    </section>
  );
}

export default About;