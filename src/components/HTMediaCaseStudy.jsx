import { useState } from "react";
import "../index.css";

/* =========================================================
   COVER / RESEARCH ASSETS
========================================================= */
import cover from "../assets/htmedia/cover.png";

import userPersona from "../assets/htmedia/user-persona.png";
import userJourney from "../assets/htmedia/user-journey.png";

import iaSales from "../assets/htmedia/information-architecture-sales.png";
import iaAdops from "../assets/htmedia/information-architecture-adops.png";
import iaPac from "../assets/htmedia/information-architecture-pac.png";
import iaUmpire from "../assets/htmedia/information-architecture-umpire.png";

/* =========================================================
   SALES
========================================================= */

import salesDashboard from "../assets/htmedia/sales-dashboard.png";
import salesInventory from "../assets/htmedia/sales-inventory.png";
import salesMyRequests from "../assets/htmedia/sales-my-requests.png";
import salesNewRequest from "../assets/htmedia/sales-new-request.png";
import salesNoIssue from "../assets/htmedia/sales-no-issue-days.png";

/* =========================================================
   ADOPS
========================================================= */

import adopsDashboard from "../assets/htmedia/adops-dashboard.png";
import adopsPlanning from "../assets/htmedia/adops-planning-board.png";
import adopsDummyBoard from "../assets/htmedia/adops-dummy-board.png";
import adopsInventory from "../assets/htmedia/adops-inventory-visibility.png";
import adopsInventoryBlocking from "../assets/htmedia/adops-inventory-blocking.png";
import adopsApproval from "../assets/htmedia/adops-approval-action.png";
import adopsBroadcast from "../assets/htmedia/adops-broadcast.png";
import adopsNoIssue from "../assets/htmedia/adops-no-issue-days.png";

/* =========================================================
   PAC
========================================================= */

import pacDashboard from "../assets/htmedia/pac-dashboard.png";
import pacApproval from "../assets/htmedia/pac-approval.png";
import pacBlocking from "../assets/htmedia/pac-inventory-blocking.png";
import pacInventory from "../assets/htmedia/pac-inventory-visibility.png";
import pacViewRequest from "../assets/htmedia/pac-view-request.png";
import pacNoIssue from "../assets/htmedia/pac-no-issue-days.png";

/* =========================================================
   UMPIRE
========================================================= */

import umpireDashboard from "../assets/htmedia/umpire-dashboard.png";
import umpireInventory from "../assets/htmedia/umpire-inventory-visibility.png";
import umpireBlocking from "../assets/htmedia/umpire-inventory-blocking.png";
import umpireApproval from "../assets/htmedia/umpire-approval.png";
import umpirePlanning from "../assets/htmedia/umpire-planning-board.png";
import umpireNoIssue from "../assets/htmedia/umpire-no-issue-days.png";
import umpireDummy from "../assets/htmedia/umpire-view-dummy.png";
import umpireViewRequest from "../assets/htmedia/umpire-view-request.png";


/* =========================================================
   WORKFLOW DATA
========================================================= */

const workflows = [
  {
    name: "Sales",
    number: "01",
    title: "Sales workflow",
    description:
      "The Sales journey focused on helping teams understand available inventory, create advertising requests and track their requests without relying on fragmented manual processes.",
    screens: [
      {
        image: salesDashboard,
        title: "Dashboard",
        text: "A centralized starting point for navigating the advertising workflow."
      },
      {
        image: salesInventory,
        title: "Inventory visibility",
        text: "Helps the sales team understand available advertising positions before creating a request."
      },
      {
        image: salesMyRequests,
        title: "My requests",
        text: "Provides visibility into submitted requests and their current status."
      },
      {
        image: salesNewRequest,
        title: "New request",
        text: "Structures request creation around relevant publication and advertising details."
      },
      {
        image: salesNoIssue,
        title: "No-issue days",
        text: "Helps teams identify publication dates where inventory is available."
      }
    ]
  },

  {
    name: "AdOps",
    number: "02",
    title: "Ad Operations workflow",
    description:
      "AdOps sits at the centre of operational coordination. The workflow was structured around planning, inventory management, blocking, approvals and communication.",
    screens: [
      {
        image: adopsDashboard,
        title: "Dashboard",
        text: "A consolidated overview of operational activities and pending actions."
      },
      {
        image: adopsPlanning,
        title: "Planning board",
        text: "Supports publication planning and coordination across advertising inventory."
      },
      {
        image: adopsDummyBoard,
        title: "Dummy board",
        text: "Provides a visual representation of planned advertising positions."
      },
      {
        image: adopsInventory,
        title: "Inventory visibility",
        text: "Makes available and occupied inventory easier to review."
      },
      {
        image: adopsInventoryBlocking,
        title: "Inventory blocking",
        text: "Allows operational teams to manage and block inventory when required."
      },
      {
        image: adopsApproval,
        title: "Approval action",
        text: "Creates a clear path for reviewing and approving requests."
      },
      {
        image: adopsBroadcast,
        title: "Broadcast",
        text: "Keeps teams informed about important operational updates."
      },
      {
        image: adopsNoIssue,
        title: "No-issue days",
        text: "Helps identify publication days without operational conflicts."
      }
    ]
  },

  {
    name: "PAC",
    number: "03",
    title: "PAC workflow",
    description:
      "The PAC workflow focused on reviewing requests, managing approvals and maintaining visibility across publication and inventory details.",
    screens: [
      {
        image: pacDashboard,
        title: "Dashboard",
        text: "Provides a high-level view of PAC activities."
      },
      {
        image: pacApproval,
        title: "Approval",
        text: "Makes approval decisions more structured and visible."
      },
      {
        image: pacBlocking,
        title: "Inventory blocking",
        text: "Supports controlled management of unavailable inventory."
      },
      {
        image: pacInventory,
        title: "Inventory visibility",
        text: "Provides a clearer view of publication inventory."
      },
      {
        image: pacViewRequest,
        title: "View request",
        text: "Brings request details into one structured view."
      },
      {
        image: pacNoIssue,
        title: "No-issue days",
        text: "Provides visibility into publication availability."
      }
    ]
  },

  {
    name: "Umpire",
    number: "04",
    title: "Umpire workflow",
    description:
      "The Umpire journey brought together inventory, requests, planning and approval activities to support cross-team coordination and operational decision-making.",
    screens: [
      {
        image: umpireDashboard,
        title: "Dashboard",
        text: "A central overview of Umpire activities."
      },
      {
        image: umpireInventory,
        title: "Inventory visibility",
        text: "Makes inventory information easier to review."
      },
      {
        image: umpireBlocking,
        title: "Inventory blocking",
        text: "Supports operational control over advertising inventory."
      },
      {
        image: umpireApproval,
        title: "Approval",
        text: "Provides a structured approval experience."
      },
      {
        image: umpirePlanning,
        title: "Planning board",
        text: "Helps coordinate advertising positions and publication planning."
      },
      {
        image: umpireNoIssue,
        title: "No-issue days",
        text: "Helps identify available publication dates."
      },
      {
        image: umpireDummy,
        title: "Dummy board",
        text: "Provides a visual planning representation."
      },
      {
        image: umpireViewRequest,
        title: "View request",
        text: "Centralizes important request information for review."
      }
    ]
  }
];


/* =========================================================
   IMAGE VIEWER
========================================================= */

function ImageViewer({ image, title, onClose }) {
  if (!image) return null;

  return (
    <div
      className="ht-image-viewer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="ht-image-viewer-close"
        onClick={onClose}
        aria-label="Close image"
      >
        ×
      </button>

      <img
        src={image}
        alt={title}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}


/* =========================================================
   IMAGE BLOCK
========================================================= */

function ExpandableImage({
  image,
  title,
  onImageClick,
  className = ""
}) {
  return (
    <div className={`ht-image-large ${className}`}>
      <button
        className="ht-full-image-button"
        onClick={() => onImageClick(image, title)}
        aria-label={`Open ${title}`}
      >
        <img src={image} alt={title} loading="lazy" />

        <span>Click to explore ↗</span>
      </button>
    </div>
  );
}


/* =========================================================
   WORKFLOW SECTION
========================================================= */

function WorkflowSection({ workflow, onImageClick }) {
  return (
    <section className="ht-workflow">

      <div className="ht-workflow-header">

        <div className="ht-workflow-number">
          {workflow.number}
        </div>

        <div>
          <p className="ht-workflow-label">
            ROLE-SPECIFIC EXPERIENCE
          </p>

          <h2>
            {workflow.title}
          </h2>

          <p className="ht-workflow-description">
            {workflow.description}
          </p>
        </div>

      </div>


      <div className="ht-screen-grid">

        {workflow.screens.map((screen, index) => (
          <article
            className={`ht-screen-card ${
              index === 0 ? "ht-screen-featured" : ""
            }`}
            key={`${workflow.name}-${screen.title}`}
          >

            <button
              className="ht-screen-image"
              onClick={() =>
                onImageClick(screen.image, screen.title)
              }
              aria-label={`Open ${screen.title}`}
            >

              <img
                src={screen.image}
                alt={screen.title}
                loading="lazy"
              />

              <span className="ht-image-overlay">
                View image ↗
              </span>

            </button>


            <div className="ht-screen-copy">

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>
                  {screen.title}
                </h3>

                <p>
                  {screen.text}
                </p>
              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   MAIN CASE STUDY
========================================================= */

function HTMediaCaseStudy() {

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image, title) => {
    setSelectedImage({
      image,
      title
    });
  };


  return (
    <div className="ht-case-study">

      {/* =========================================================
    HERO
========================================================= */}

<section className="ht-hero">

  <div className="ht-hero-content">

    <div className="ht-hero-copy">

      <p className="eyebrow">
        UX/UI CASE STUDY · MEDIA & ADVERTISING
      </p>

      <h1>
        Hindustan
        <span>Times</span>
        Media
      </h1>

      <p className="hero-description">
        Designing a centralized inventory management experience
        to simplify advertising operations, improve visibility
        and coordinate multiple teams.
      </p>

      <div className="hero-meta">

        <div>
          <span>ROLE</span>
          <strong>UX/UI Designer</strong>
        </div>

        <div>
          <span>DOMAIN</span>
          <strong>Media & Advertising</strong>
        </div>

        <div>
          <span>PROJECT</span>
          <strong>Inventory Management</strong>
        </div>

      </div>

    </div>


    {/* COVER IMAGE */}

    <div className="ht-hero-cover">

      <div className="ht-cover-frame">

        <img
          src={cover}
          alt="Hindustan Times Media inventory management case study"
        />

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          AT A GLANCE
      ===================================================== */}

      <section className="ht-section ht-snapshot">

        <div className="ht-section-heading">
          <span>00</span>

          <h2>
            At a glance
          </h2>
        </div>


        <div className="ht-snapshot-grid">

          <div className="ht-snapshot-card">

            <span>THE PROBLEM</span>

            <h3>
              Fragmented advertising operations
            </h3>

            <p>
              Inventory, requests, approvals and publication
              planning required better visibility and coordination
              across multiple teams.
            </p>

          </div>


          <div className="ht-snapshot-card">

            <span>THE APPROACH</span>

            <h3>
              One connected operational system
            </h3>

            <p>
              I mapped role-specific journeys and translated
              them into information architectures, workflows,
              dashboards and operational interfaces.
            </p>

          </div>


          <div className="ht-snapshot-card ht-snapshot-highlight">

            <span>MEASURED IMPACT</span>

            <div className="ht-metric-big">
              −35%
            </div>

            <p>
              Process errors
            </p>

            <div className="ht-metric-big">
              +40%
            </div>

            <p>
              Task completion
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="ht-section">

        <div className="ht-section-heading">
          <span>01</span>

          <h2>
            Project Overview
          </h2>
        </div>


        <div className="ht-overview-intro">

          <p className="ht-big-statement">
            How might we make a complex
            advertising operation feel
            clear, predictable and manageable?
          </p>

        </div>


        <div className="ht-two-column">

          <div className="ht-content-card">

            <span className="ht-card-label">
              THE CONTEXT
            </span>

            <h3>
              Modernising print advertising operations
            </h3>

            <p>
              This project focused on creating a centralized
              Inventory Management Solution for Hindustan
              Times Media.
            </p>

            <p>
              The existing process was manual and fragmented,
              making it difficult for teams to track inventory,
              coordinate requests and manage complex advertising
              packages such as roadblocks.
            </p>

          </div>


          <div className="ht-content-card">

            <span className="ht-card-label">
              THE GOAL
            </span>

            <h3>
              Create one connected operational experience
            </h3>

            <p>
              The proposed platform brings inventory tracking,
              ad booking, scheduling and utilization into one
              connected experience.
            </p>

            <p>
              The system also connects Sales, AdOps, PAC and
              Umpire so that teams can collaborate around the
              same information instead of working in silos.
            </p>

          </div>

        </div>


        <div className="ht-highlight-statement">

          <span>CORE IDEA</span>

          <h3>
            From fragmented coordination
            <br />
            to connected decision-making.
          </h3>

        </div>

      </section>


      {/* =====================================================
          PROBLEMS & SOLUTIONS
      ===================================================== */}

      <section className="ht-section ht-light-section">

        <div className="ht-section-heading">
          <span>02</span>

          <h2>
            UX improvement
          </h2>
        </div>


        <p className="ht-section-intro">
          The research highlighted three major areas where
          the existing workflow created friction for users
          and the business.
        </p>


        <div className="ht-problem-solution-grid">

          <div className="ht-problem-card">

            <span>01 · PROBLEM</span>

            <h3>
              Lack of real-time inventory visibility
            </h3>

            <p>
              Manual and fragmented systems made it difficult
              for teams to instantly understand available,
              booked or blocked advertising inventory.
            </p>

            <div className="ht-solution-mini">

              <strong>
                Solution
              </strong>

              <p>
                A centralized real-time inventory system that
                gives teams a shared view of available,
                booked and blocked ad spaces.
              </p>

            </div>

          </div>


          <div className="ht-problem-card">

            <span>02 · PROBLEM</span>

            <h3>
              Inefficient complex ad bookings
            </h3>

            <p>
              Bundled offerings such as roadblocks and
              multi-page advertisements required significant
              manual coordination.
            </p>

            <div className="ht-solution-mini">

              <strong>
                Solution
              </strong>

              <p>
                System-driven booking and validation for
                bundled advertising packages to reduce
                manual effort and errors.
              </p>

            </div>

          </div>


          <div className="ht-problem-card">

            <span>03 · PROBLEM</span>

            <h3>
              Poor cross-team coordination
            </h3>

            <p>
              Sales, AdOps, PAC and Scheduling teams often
              worked in silos, creating communication gaps,
              rework and delays.
            </p>

            <div className="ht-solution-mini">

              <strong>
                Solution
              </strong>

              <p>
                Connected role-based workflows that improve
                collaboration, accountability and turnaround
                time.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="ht-section ht-dark-section">

        <div className="ht-section-heading">
          <span>03</span>

          <h2>
            My process
          </h2>
        </div>


        <div className="ht-process-intro">

          <p className="ht-big-statement">
            Explore the problem.
            <br />
            Define the system.
            <br />
            Design the experience.
          </p>

          <p>
            I used the Double Diamond as a framework to first
            understand and define the problem before exploring
            and delivering the right solution.
          </p>

        </div>


        <div className="ht-double-diamond">

          <div className="ht-process-stage">

            <span>01</span>

            <small>
              DISCOVER
            </small>

            <h3>
              Research
            </h3>

            <p>
              Understand users, existing workflows,
              reviews and operational pain points.
            </p>

          </div>


          <div className="ht-process-stage">

            <span>02</span>

            <small>
              DEFINE
            </small>

            <h3>
              UX Analysis
            </h3>

            <p>
              Identify recurring problems and define
              opportunities for improvement.
            </p>

          </div>


          <div className="ht-process-stage">

            <span>03</span>

            <small>
              DEVELOP
            </small>

            <h3>
              UX / UI Design
            </h3>

            <p>
              Explore information architecture, flows,
              dashboards and role-based interfaces.
            </p>

          </div>


          <div className="ht-process-stage">

            <span>04</span>

            <small>
              DELIVER
            </small>

            <h3>
              Solution
            </h3>

            <p>
              Translate the system into an accessible,
              quick-to-use enterprise experience.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESEARCH OBJECTIVE
      ===================================================== */}

      <section className="ht-section">

        <div className="ht-section-heading">
          <span>04</span>

          <h2>
            Research objective & needs
          </h2>
        </div>


        <div className="ht-research-grid">

          <div className="ht-content-card">

            <span className="ht-card-label">
              RESEARCH OBJECTIVE
            </span>

            <h3>
              Understand where the operational system breaks down
            </h3>

            <ul className="ht-clean-list">

              <li>
                Investigate inefficiencies in ad request
                processing, including manual communication
                and disparate inventory management.
              </li>

              <li>
                Identify opportunities to streamline digital
                inventory tracking for Roadblock bookings.
              </li>

              <li>
                Explore ways to simplify bundling between
                print inventory and advertising sales.
              </li>

            </ul>

          </div>


          <div className="ht-content-card">

            <span className="ht-card-label">
              RESEARCH NEEDS
            </span>

            <h3>
              Move from fragmented processes to connected workflows
            </h3>

            <ul className="ht-clean-list">

              <li>
                Integrate disparate inventory systems.
              </li>

              <li>
                Improve calendar and publication planning.
              </li>

              <li>
                Enhance real-time inventory tracking.
              </li>

              <li>
                Reduce turnaround time and operational errors.
              </li>

              <li>
                Improve decision-making and inventory utilization.
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUALITATIVE RESEARCH
      ===================================================== */}

      <section className="ht-section ht-light-section">

        <div className="ht-section-heading">
          <span>05</span>

          <h2>
            Empathize & research
          </h2>
        </div>


        <div className="ht-research-intro">

          <p className="ht-big-statement">
            The interface was only one part
            of the problem.
          </p>

          <p>
            The real challenge was understanding how multiple
            teams make decisions, exchange information and
            coordinate advertising inventory throughout the
            publishing process.
          </p>

        </div>


        <div className="ht-research-stats">

          <div>
            <strong>
              10
            </strong>

            <span>
              Print media professionals interviewed
            </span>
          </div>

          <div>
            <strong>
              1+
            </strong>

            <span>
              Month of research and product exploration
            </span>
          </div>

          <div>
            <strong>
              4
            </strong>

            <span>
              Core operational journeys identified
            </span>
          </div>

        </div>


        <div className="ht-two-column">

          <div className="ht-content-card">

            <span className="ht-card-label">
              QUALITATIVE RESEARCH
            </span>

            <p>
              I adopted a qualitative approach to understand
              real experiences, challenges and expectations
              of professionals involved in print advertising
              inventory management.
            </p>

            <p>
              This helped uncover operational gaps that would
              not be visible through numerical data alone.
            </p>

          </div>


          <div className="ht-content-card">

            <span className="ht-card-label">
              METHODOLOGY
            </span>

            <ul className="ht-clean-list">

              <li>
                Semi-structured interviews with 10 print
                media professionals.
              </li>

              <li>
                Participants included marketing managers,
                sales heads and planners.
              </li>

              <li>
                Purposive and stratified sampling was used
                to achieve role diversity.
              </li>

              <li>
                A structured interview guide allowed
                open-ended responses.
              </li>

              <li>
                Thematic analysis was used to identify
                recurring patterns.
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEY INSIGHTS
      ===================================================== */}

      <section className="ht-section">

        <div className="ht-section-heading">
          <span>06</span>

          <h2>
            What I learned
          </h2>
        </div>


        <div className="ht-insight-grid">

          <div className="ht-insight-card">

            <span>01</span>

            <h3>
              Inventory management was largely manual
            </h3>

            <p>
              Fragmented workflows increased the likelihood
              of inefficiencies, delays and errors.
            </p>

          </div>


          <div className="ht-insight-card">

            <span>02</span>

            <h3>
              Visibility influenced business decisions
            </h3>

            <p>
              Without real-time inventory visibility,
              pricing, scheduling and revenue decisions
              became harder to make.
            </p>

          </div>


          <div className="ht-insight-card">

            <span>03</span>

            <h3>
              Teams needed a shared source of truth
            </h3>

            <p>
              Sales, AdOps, PAC and scheduling activities
              were highly dependent on one another.
            </p>

          </div>


          <div className="ht-insight-card">

            <span>04</span>

            <h3>
              Users wanted less coordination overhead
            </h3>

            <p>
              The opportunity was not simply to add features,
              but to reduce the amount of manual coordination
              required to complete everyday tasks.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PERSONA
      ===================================================== */}

      <section className="ht-section ht-light-section">

        <div className="ht-section-heading">
          <span>07</span>

          <h2>
            Understanding the user
          </h2>
        </div>


        <p className="ht-section-intro">
          Understanding the needs, challenges and motivations
          of the people involved in print advertising inventory
          management helped ground the design decisions.
        </p>


        <ExpandableImage
          image={userPersona}
          title="Hindustan Times Media User Persona"
          onImageClick={openImage}
        />

      </section>


      {/* =====================================================
          USER JOURNEY
      ===================================================== */}

      <section className="ht-section">

        <div className="ht-section-heading">
          <span>08</span>

          <h2>
            Mapping the user journey
          </h2>
        </div>


        <div className="ht-journey-intro">

          <p>
            This journey map represents Amit, a Planner at
            Hindustan Times Media, responsible for managing
            print ad inventory, coordinating with multiple
            teams and ensuring timely and accurate placements.
          </p>

        </div>


        <div className="ht-journey-points">

          <span>
            Awareness
          </span>

          <span>
            Consideration
          </span>

          <span>
            Research
          </span>

          <span>
            Decision
          </span>

          <span>
            Action
          </span>

          <span>
            Review
          </span>

        </div>


        <ExpandableImage
          image={userJourney}
          title="Hindustan Times Media User Journey"
          onImageClick={openImage}
        />

      </section>


      {/* =====================================================
          INFORMATION ARCHITECTURE
      ===================================================== */}

      <section className="ht-section ht-dark-section">

        <div className="ht-section-heading">
          <span>09</span>

          <h2>
            Information architecture
          </h2>
        </div>


        <p className="ht-section-intro">
          The product was not a single workflow. It was an
          interconnected system used by different teams.
          I therefore structured the information architecture
          around four distinct journeys.
        </p>


        <div className="ht-ia-grid">

          <div className="ht-ia-card">

            <div className="ht-ia-number">
              01
            </div>

            <h3>
              Sales
            </h3>

            <p>
              Request creation, inventory visibility and
              request tracking.
            </p>

            <button
              onClick={() =>
                openImage(
                  iaSales,
                  "Sales Information Architecture"
                )
              }
            >
              Explore architecture ↗
            </button>

            <img
              src={iaSales}
              alt="Sales information architecture"
              loading="lazy"
            />

          </div>


          <div className="ht-ia-card">

            <div className="ht-ia-number">
              02
            </div>

            <h3>
              AdOps
            </h3>

            <p>
              Planning, inventory control, approvals and
              operational communication.
            </p>

            <button
              onClick={() =>
                openImage(
                  iaAdops,
                  "AdOps Information Architecture"
                )
              }
            >
              Explore architecture ↗
            </button>

            <img
              src={iaAdops}
              alt="AdOps information architecture"
              loading="lazy"
            />

          </div>


          <div className="ht-ia-card">

            <div className="ht-ia-number">
              03
            </div>

            <h3>
              PAC
            </h3>

            <p>
              Request review, approval and inventory
              management.
            </p>

            <button
              onClick={() =>
                openImage(
                  iaPac,
                  "PAC Information Architecture"
                )
              }
            >
              Explore architecture ↗
            </button>

            <img
              src={iaPac}
              alt="PAC information architecture"
              loading="lazy"
            />

          </div>


          <div className="ht-ia-card">

            <div className="ht-ia-number">
              04
            </div>

            <h3>
              Umpire
            </h3>

            <p>
              Planning, inventory, requests and cross-team
              coordination.
            </p>

            <button
              onClick={() =>
                openImage(
                  iaUmpire,
                  "Umpire Information Architecture"
                )
              }
            >
              Explore architecture ↗
            </button>

            <img
              src={iaUmpire}
              alt="Umpire information architecture"
              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DESIGN SOLUTION
      ===================================================== */}

      <section className="ht-section">

        <div className="ht-section-heading">
          <span>10</span>

          <h2>
            Design solution
          </h2>
        </div>


        <div className="ht-solution-intro">

          <p className="ht-big-statement">
            One system.
            <br />
            Four journeys.
            <br />
            Clearer decisions.
          </p>

          <p>
            The final product was designed around role-specific
            workflows, allowing each team to access the
            information and actions most relevant to their work.
          </p>

        </div>


        <div className="ht-solution-points">

          <div>

            <span>01</span>

            <h3>
              Centralized visibility
            </h3>

            <p>
              Inventory, requests and planning information
              were brought into a connected experience.
            </p>

          </div>


          <div>

            <span>02</span>

            <h3>
              Role-based workflows
            </h3>

            <p>
              Different teams received workflows aligned
              with their responsibilities.
            </p>

          </div>


          <div>

            <span>03</span>

            <h3>
              Operational clarity
            </h3>

            <p>
              Tables, dashboards and planning boards made
              complex operational information easier to scan
              and act on.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESIGN SYSTEM / TYPOGRAPHY
      ===================================================== */}

      <section className="ht-section ht-light-section">

        <div className="ht-section-heading">
          <span>11</span>

          <h2>
            Typography & visual language
          </h2>
        </div>


        <div className="ht-typography-showcase">

          <div className="ht-type-intro">

            <span className="ht-card-label">
              DESIGN SYSTEM
            </span>

            <h3>
              Clear hierarchy for information-heavy workflows
            </h3>

            <p>
              Since the product handles large amounts of
              operational information, typography was used
              to create hierarchy, improve scanability and
              help users quickly identify important actions.
            </p>

          </div>


          <div className="ht-font-card">

            <span>
              PRIMARY TYPEFACE
            </span>

            <h3>
              Sanomat Sans Trial
            </h3>

            <p className="ht-type-sample">
              Aa Bb Cc 0123
            </p>

            <div className="ht-type-weights">

              <span>
                Regular
              </span>

              <span>
                Medium
              </span>

              <strong>
                Bold
              </strong>

            </div>

          </div>


          <div className="ht-font-card">

            <span>
              SECONDARY TYPEFACE
            </span>

            <h3>
              Ubuntu
            </h3>

            <p className="ht-type-sample">
              Aa Bb Cc 0123
            </p>

            <div className="ht-type-weights">

              <span>
                Regular
              </span>

              <span>
                Medium
              </span>

              <strong>
                Bold
              </strong>

            </div>

          </div>

        </div>


        <div className="ht-type-scale">

          <div>
            <span>H1</span>
            <strong>
              Sanomat Bold · 32/32
            </strong>
          </div>

          <div>
            <span>H2</span>
            <strong>
              Sanomat Medium · 16/20
            </strong>
          </div>

          <div>
            <span>H3</span>
            <strong>
              Sanomat Regular · 16/20
            </strong>
          </div>

          <div>
            <span>Body 1</span>
            <strong>
              Sanomat Regular · 14/16
            </strong>
          </div>

          <div>
            <span>Body 2</span>
            <strong>
              Ubuntu Regular · 18/18
            </strong>
          </div>

          <div>
            <span>Button</span>
            <strong>
              Sanomat Regular · 14/16
            </strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          FOUR WORKFLOWS
      ===================================================== */}

      <section className="ht-workflows-intro">

        <p>
          ROLE-BASED PRODUCT EXPERIENCE
        </p>

        <h2>
          Designing the system
          <br />
          around the people using it.
        </h2>

      </section>


      {workflows.map((workflow) => (
        <WorkflowSection
          key={workflow.name}
          workflow={workflow}
          onImageClick={openImage}
        />
      ))}


      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="ht-section ht-outcome-section">

        <div className="ht-section-heading">
          <span>16</span>

          <h2>
            Outcome
          </h2>
        </div>


        <div className="ht-impact-grid">

          <div className="ht-impact-card">

            <strong>
              −35%
            </strong>

            <span>
              Process errors
            </span>

            <p>
              A more structured workflow reduced ambiguity
              and process-related errors.
            </p>

          </div>


          <div className="ht-impact-card">

            <strong>
              +40%
            </strong>

            <span>
              Task completion
            </span>

            <p>
              Clearer workflows helped users complete
              operational tasks more effectively.
            </p>

          </div>


          <div className="ht-impact-card">

            <strong>
              4
            </strong>

            <span>
              Role-based journeys
            </span>

            <p>
              Sales, AdOps, PAC and Umpire workflows were
              structured into one connected system.
            </p>

          </div>

        </div>


        <div className="ht-outcome-statement">

          <p>
            The biggest shift was moving from fragmented
            operational steps toward a connected product
            experience where teams could understand,
            manage and act on advertising inventory
            with greater clarity.
          </p>

        </div>

      </section>


      {/* =====================================================
          LEARNINGS
      ===================================================== */}

      <section className="ht-section ht-learning-section">

        <div className="ht-section-heading">

          <span>17</span>

          <h2>
            What I learned
          </h2>

        </div>


        <div className="ht-learning-grid">

          <div>

            <span>
              01
            </span>

            <h3>
              Enterprise UX is about systems
            </h3>

            <p>
              Designing enterprise products requires
              understanding how different people,
              responsibilities and decisions connect.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <h3>
              Information architecture comes first
            </h3>

            <p>
              A clear information structure makes complex
              interfaces significantly easier to navigate
              and understand.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <h3>
              Visibility drives better decisions
            </h3>

            <p>
              When users can clearly see inventory,
              requests and statuses, they spend less time
              searching and coordinating manually.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="ht-case-footer">

        <p>
          HINDUSTAN TIMES MEDIA · UX/UI CASE STUDY
        </p>

        <h2>
          Designing clarity
          <br />
          for complex workflows.
        </h2>

        <p className="ht-footer-description">
          A product design exercise focused on turning
          fragmented advertising operations into a more
          connected and understandable enterprise experience.
        </p>

        <a
          href="/"
          className="ht-back-link"
        >
          ← Back to selected work
        </a>

      </section>


      {/* =====================================================
          IMAGE VIEWER
      ===================================================== */}

      <ImageViewer
        image={selectedImage?.image}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />

    </div>
  );
}


export default HTMediaCaseStudy;