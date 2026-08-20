import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import homeLoanHero from "../assets/home-loan-hero.png";
import saarathiBazaarCover from "../assets/saarathi-bazaar-cover.png";

// =========================================================
// PROJECT DATA
// =========================================================

const projects = [
  {
    number: "01",
    category: "FINTECH · HOME LOAN JOURNEY",
    title: "Home Loan Journey",
    description:
      "Designing a simpler, more guided mobile experience for customers navigating the home loan process.",
    tags: [
      "Product Design",
      "UX Research",
      "Mobile Experience",
    ],
    impact: [
      {
        value: "360°",
        label: "Product ecosystem",
      },
      {
        value: "Mobile",
        label: "First experience",
      },
    ],
    image: homeLoanHero,
    link: "/work/home-loan",
  },

  {
  number: "02",
  category: "FINTECH · PRODUCT ECOSYSTEM",
  title: "Saarathi Bazaar",
  description:
    "Designing a connected loan marketplace that helps borrowers discover offers while enabling sourcing partners to manage leads more efficiently.",
  tags: [
    "Product Design",
    "UX Research",
    "Fintech",
  ],
  impact: [
    {
      value: "360°",
      label: "Loan ecosystem",
    },
    {
      value: "Mobile",
      label: "First experience",
    },
  ],
  image: saarathiBazaarCover,
  link: "/work/saarathi-bazaar",
},

  {
  number: "03",
  category: "MEDIA · PORTAL DESIGN",
  title: "Hindustan Times",
  description:
    "Researching and redesigning inventory management workflows for print media teams.",
  tags: [
    "UX Research",
    "Workflow Design",
    "Enterprise UX",
  ],
  impact: [
    {
      value: "-35%",
      label: "Process errors",
    },
    {
      value: "+40%",
      label: "Task completion",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1800&q=85",
  link: "/work/ht-media",
},
];


// =========================================================
// PROJECT CARD
// =========================================================

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${
        index % 2 !== 0 ? "project-card-reverse" : ""
      }`}
      initial={{
        opacity: 0,
        y: 70,
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* PROJECT IMAGE */}

      <motion.div
        className="project-image-wrapper"
        whileHover="hover"
      >
        <div className="project-visual">

          <motion.img
            src={project.image}
            alt={`${project.title} project`}
            loading={index === 0 ? "eager" : "lazy"}
            variants={{
              hover: {
                scale: 1.045,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* HOVER LABEL */}

          <motion.div
            className="project-image-label"
            initial={{
              y: 15,
              opacity: 0,
            }}
            variants={{
              hover: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <span>Explore project</span>

            <ArrowUpRight size={16} />
          </motion.div>

        </div>
      </motion.div>


      {/* PROJECT CONTENT */}

      <div className="project-info">

        <div className="project-top">

          <span className="project-number">
            {project.number}
          </span>

          <span className="project-category">
            {project.category}
          </span>

        </div>


        <h3>
          {project.title}
        </h3>


        <p className="project-description">
          {project.description}
        </p>


        {/* TAGS */}

        <div className="project-tags">

          {project.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}

        </div>


        {/* IMPACT */}

        <div className="project-impact">

          {project.impact.map((item) => (
            <div
              className="impact-item"
              key={item.label}
            >

              <strong>
                {item.value}
              </strong>

              <span>
                {item.label}
              </span>

            </div>
          ))}

        </div>


        {/* CASE STUDY LINK */}

        <Link
  to={project.link}
  className="project-link"
  aria-label={`View ${project.title} case study`}
>
  <span>
    View case study
  </span>

  <span className="project-link-arrow">
    <ArrowUpRight size={18} />
  </span>
</Link>

      </div>

    </motion.article>
  );
}


// =========================================================
// WORK SECTION
// =========================================================

function Work() {
  return (
    <section
      className="work-section"
      id="work"
    >

      <div className="container">

        {/* SECTION INTRO */}

        <motion.div
          className="work-intro"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div>

            <p className="section-label">
              SELECTED WORK <span>01 — 03</span>
            </p>

            <h2>
              Selected
              <br />
              <span>work.</span>
            </h2>

          </div>


          <p className="work-intro-text">
            A collection of product experiences,
            interfaces and systems designed to solve
            complex problems with clarity.
          </p>

        </motion.div>


        {/* PROJECT LIST */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Work;