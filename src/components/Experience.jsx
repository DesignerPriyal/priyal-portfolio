import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 — Present",
    company: "Half Onion",
    role: "UI/UX Designer & Developer",
    description:
      "Designed digital experiences and websites while working across UI/UX, interaction design and front-end development. Focused on creating visually engaging, responsive and user-friendly digital products.",
    type: "DESIGN + DEVELOPMENT",
  },

  {
    year: "2024 — 2026",
    company: "Decimal Technologies Pvt. Ltd.",
    role: "Product Designer",
    description:
      "Designed digital products and workflow experiences across fintech, focusing on simplifying complex processes through UX research, interaction design and scalable UI systems.",
    type: "PRODUCT DESIGN",
  },

  {
    year: "2021 — 2022",
    company: "Wipro",
    role: "Associate",
    description:
      "Worked in a structured enterprise environment, developing experience in collaboration, process management, business requirements and problem solving.",
    type: "ENTERPRISE",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="experience-header"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div>

            <p className="section-label">
              EXPERIENCE
            </p>

            <h2>
              A journey of
              <br />
              <span>building & learning.</span>
            </h2>

          </div>


          <p className="experience-intro">
            My experience spans product design, UI/UX and
            development, with a focus on understanding
            people, simplifying complex problems and
            creating meaningful digital experiences.
          </p>

        </motion.div>


        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="experience-timeline">

          {/* =================================================
              TIMELINE LINE
          ================================================= */}

          <motion.div
            className="experience-line"
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />


          {/* =================================================
              EXPERIENCE ITEMS
          ================================================= */}

          {experiences.map((experience, index) => (

            <motion.article
              className="experience-item"
              key={`${experience.company}-${experience.year}`}

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
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* =================================================
                  YEAR
              ================================================= */}

              <div className="experience-year">
                {experience.year}
              </div>


              {/* =================================================
                  TIMELINE DOT
              ================================================= */}

              <div className="experience-dot">
                <span />
              </div>


              {/* =================================================
                  EXPERIENCE CONTENT
              ================================================= */}

              <div className="experience-content">

                <div className="experience-meta">

                  <span className="experience-type">
                    {experience.type}
                  </span>

                </div>


                <h3>
                  {experience.company}
                </h3>


                <h4>
                  {experience.role}
                </h4>


                <p>
                  {experience.description}
                </p>

              </div>


              {/* =================================================
                  INDEX
              ================================================= */}

              <div className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;