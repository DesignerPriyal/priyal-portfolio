import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


// =========================================================
// IMAGES
// =========================================================

import saarathiBazaarCover from "../assets/saarathi-bazaar-cover.png";

import financialProfile from "../assets/saarathi/financial-profile.png";
import homeScreen from "../assets/saarathi/home.png";
import informationArchitecture from "../assets/saarathi/information-architecture.png";
import lenderContact from "../assets/saarathi/lender-contact.png";
import loanDetails from "../assets/saarathi/loan-details.png";
import loginScreen from "../assets/saarathi/login.png";
import myLoanRequest from "../assets/saarathi/my-loan-request.png";
import offersScreen from "../assets/saarathi/offers.png";
import otpScreen from "../assets/saarathi/otp.png";
import personaScreen from "../assets/saarathi/persona.png";
import propertyDetails from "../assets/saarathi/property-details.png";
import revealLender from "../assets/saarathi/reveal-lender.png";
import summaryScreen from "../assets/saarathi/summary.png";


// =========================================================
// SMALL REUSABLE COMPONENTS
// =========================================================

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mockup-section-header">

      <p className="section-label">
        {eyebrow}
      </p>

      <h2>
        {title}
      </h2>

      {subtitle && (
        <p className="section-header-description">
          {subtitle}
        </p>
      )}

    </div>
  );
}


function ScreenCard({ image, alt }) {
  return (
    <div className="screen-mockup phone">

      <img
        src={image}
        alt={alt}
        loading="lazy"
      />

    </div>
  );
}


function WideImage({ image, alt }) {
  return (
    <div className="screen-mockup-wide">

      <img
        src={image}
        alt={alt}
        loading="lazy"
      />

    </div>
  );
}


// =========================================================
// SAARATHI BAZAAR
// =========================================================

function SaarathiBazaar() {

  return (

    <main className="saarathi-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="saarathi-hero">

        <div className="container">

          <p className="section-label">
            FINTECH · PRODUCT DESIGN
          </p>

          <h1>
            Saarathi
            <br />
            <span>Bazaar.</span>
          </h1>

          <p className="saarathi-intro">
            Designing a connected loan marketplace that helps
            borrowers discover suitable loan offers while enabling
            sourcing partners to manage leads more efficiently.
          </p>


          <motion.div
            className="saarathi-cover-wrapper"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <img
              src={saarathiBazaarCover}
              alt="Saarathi Bazaar product experience"
              className="saarathi-cover-image"
            />

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          PROJECT SNAPSHOT
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <div className="saarathi-overview-grid">

            <div>

              <p className="section-label">
                PROJECT SNAPSHOT
              </p>

              <h2>
                A one-stop
                <br />
                <span>loan marketplace.</span>
              </h2>

            </div>


            <div className="saarathi-overview-copy">

              <p>
                Saarathi Bazaar was designed as a one-stop loan
                discovery platform connecting borrowers, Channel
                Partners and financial institutions.
              </p>

              <p>
                The experience brings loan discovery, comparison,
                application and tracking into a single guided
                journey.
              </p>

            </div>

          </div>


          <div className="saarathi-meta-grid">

            <div>
              <span>ROLE</span>
              <strong>Product Designer</strong>
            </div>

            <div>
              <span>DOMAIN</span>
              <strong>Fintech · Lending</strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>Mobile Application</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>End-to-end UX</strong>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PROBLEM STATEMENT
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <div className="saarathi-content-narrow">

            <p className="section-label">
              01 — PROBLEM
            </p>

            <h2>
              The loan ecosystem
              <br />
              <span>was difficult to navigate.</span>
            </h2>

            <p>
              The loan ecosystem is burdened by inefficiency,
              where borrowers face lack of transparency, tedious
              processes, and difficulty in comparing real-time
              offers.
            </p>

            <p>
              At the same time, loan agents and sourcing partners
              struggle with limited reach, manual operations and
              low efficiency in deal closures.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          PROBLEM VALIDATION
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <div className="saarathi-two-column">

            <div>

              <p className="section-label">
                PROBLEM VALIDATION
              </p>

              <h3>
                The problem was visible
                <br />
                <span>across the ecosystem.</span>
              </h3>

            </div>


            <div className="saarathi-text-block">

              <p>
                Team feedback, process inefficiencies and recurring
                customer complaints confirmed the lack of
                transparency and efficiency in the existing loan
                process.
              </p>

              <p>
                These observations helped define an opportunity to
                bring the fragmented journey into one connected
                experience.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          POSSIBLE SOLUTION
      ===================================================== */}

      <section className="saarathi-section saarathi-dark-section">

        <div className="container">

          <div className="saarathi-content-narrow">

            <p className="section-label">
              POSSIBLE SOLUTION
            </p>

            <h2>
              One platform.
              <br />
              <span>Multiple stakeholders.</span>
            </h2>

            <p>
              To address the challenges faced by borrowers,
              agents and institutions, we designed Saarathi Bazaar
              as a one-stop loan discovery platform with a focus
              on simplicity, transparency and efficiency.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          TARGET AUDIENCE
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="TARGET AUDIENCE"
            title={
              <>
                Designing for
                <br />
                <span>three key users.</span>
              </>
            }
          />


          <div className="audience-grid">

            <div className="audience-card">
              <span>01</span>
              <h3>Borrower</h3>
              <p>
                Looking for convenient, transparent and suitable
                loan options.
              </p>
            </div>

            <div className="audience-card">
              <span>02</span>
              <h3>Channel Partner</h3>
              <p>
                Managing customers, leads and loan opportunities.
              </p>
            </div>

            <div className="audience-card">
              <span>03</span>
              <h3>Banks</h3>
              <p>
                Providing relevant loan products and processing
                qualified opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          DESIGN OPPORTUNITY
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <div className="saarathi-content-narrow">

            <p className="section-label">
              DESIGN OPPORTUNITY
            </p>

            <h2>
              Turning complexity
              <br />
              <span>into clarity.</span>
            </h2>

            <p>
              The opportunity was to create a connected experience
              where borrowers could discover and compare suitable
              loan options while sourcing partners could manage
              leads and grow their business more efficiently.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          MY ROLE
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="MY ROLE"
            title={
              <>
                From research
                <br />
                <span>to product design.</span>
              </>
            }
          />


          <div className="role-grid">

            <span>Design Strategy</span>
            <span>Problem Solving</span>
            <span>Information Architecture</span>
            <span>Empathy Mapping</span>
            <span>User Flow</span>
            <span>Prototyping</span>
            <span>Wireframes</span>
            <span>Competitive Analysis</span>
            <span>Visual Design</span>
            <span>User Research</span>
            <span>User Persona</span>
            <span>Design Thinking</span>

          </div>

        </div>

      </section>



      {/* =====================================================
          DESIGN THINKING PROCESS
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="PROCESS"
            title={
              <>
                A human-centered
                <br />
                <span>design process.</span>
              </>
            }
          />


          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Empathize</h3>
              <p>
                User Research
                <br />
                Competitor Analysis
                <br />
                User Persona
                <br />
                User Journey Map
              </p>
            </div>


            <div>
              <span>02</span>
              <h3>Define</h3>
              <p>
                Goal Statement
                <br />
                Empathy Map
                <br />
                Problem Definition
              </p>
            </div>


            <div>
              <span>03</span>
              <h3>Ideate</h3>
              <p>
                Brainstorming
                <br />
                Card Sorting
                <br />
                Information Architecture
              </p>
            </div>


            <div>
              <span>04</span>
              <h3>Design</h3>
              <p>
                User Flow
                <br />
                Wireframes
                <br />
                Visual Design
                <br />
                Prototype
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PROJECT TIMELINE
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="PROJECT TIMELINE"
            title={
              <>
                From strategy
                <br />
                <span>to final product.</span>
              </>
            }
          />


          <div className="timeline">

            <div className="timeline-row">
              <strong>01 — 03</strong>
              <span>Research & Strategy</span>
            </div>

            <div className="timeline-row">
              <strong>04 — 06</strong>
              <span>Information Architecture & UX</span>
            </div>

            <div className="timeline-row">
              <strong>07 — 09</strong>
              <span>Wireframes & Visual Design</span>
            </div>

            <div className="timeline-row">
              <strong>10 — 12</strong>
              <span>Prototype & Refinement</span>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          EMPATHIZE
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="EMPATHIZE PHASE"
            title={
              <>
                Understanding the
                <br />
                <span>people behind the process.</span>
              </>
            }
          />


          <div className="saarathi-two-column">

            <div>

              <h3>
                Qualitative Research
              </h3>

            </div>


            <div className="saarathi-text-block">

              <p>
                The objective of the qualitative research was to
                understand the needs, behaviors, challenges and
                motivations of borrowers, loan agents and sourcing
                partners in the loan comparison and application
                process.
              </p>

              <p>
                The insights were used to guide product improvements,
                enhance user experience and strengthen Saarathi
                Bazaar's value proposition as a one-stop,
                transparent loan comparison platform.
              </p>

            </div>

          </div>


          <div className="research-methods">

            <div>
              <span>01</span>
              Observation of current loan processes
            </div>

            <div>
              <span>02</span>
              Competitor analysis of similar loan platforms
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          KEY INSIGHTS
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="RESEARCH INSIGHTS"
            title={
              <>
                What the research
                <br />
                <span>told us.</span>
              </>
            }
          />


          <div className="insight-list">

            <div className="insight">
              <span>01</span>
              <p>
                Borrowers find the loan process confusing and
                time-consuming, struggling with complex paperwork,
                multiple bank visits and unclear charges.
              </p>
            </div>

            <div className="insight">
              <span>02</span>
              <p>
                Transparency and trust are top priorities. Users
                prefer verified lenders, clear comparisons and data
                security assurance.
              </p>
            </div>

            <div className="insight">
              <span>03</span>
              <p>
                Personalized loan recommendations based on
                eligibility and needs can improve user satisfaction.
              </p>
            </div>

            <div className="insight">
              <span>04</span>
              <p>
                Sourcing partners face inefficiency in managing
                multiple clients and need a single platform to
                track, match and grow their business.
              </p>
            </div>

            <div className="insight">
              <span>05</span>
              <p>
                A simple, guided digital experience helps users
                confidently explore and select suitable loan
                options.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          USER PERSONA
      ===================================================== */}

      <section className="mockup-section">

        <div className="container">

          <SectionHeader
            eyebrow="DEFINE PHASE · USER PERSONA"
            title={
              <>
                Designing around
                <br />
                <span>borrower motivations.</span>
              </>
            }
          />


          <WideImage
            image={personaScreen}
            alt="Saarathi Bazaar borrower persona"
          />

        </div>

      </section>



      {/* =====================================================
          PERSONA DESCRIPTION
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <div className="saarathi-content-narrow">

            <p className="section-label">
              PERSONA
            </p>

            <p>
              The borrower values convenience, clarity and trust.
              They seek a quick and transparent way to compare loan
              options without visiting multiple banks or handling
              excessive paperwork.
            </p>

            <p>
              Saarathi Bazaar appeals to these needs by offering
              personalized, verified and hassle-free loan solutions
              through a guided digital experience.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          EMPATHY MAP
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="EMPATHY MAP"
            title={
              <>
                Understanding what
                <br />
                <span>users say, think, do & feel.</span>
              </>
            }
          />


          <div className="empathy-grid">

            <div>
              <span>SAYS</span>

              <p>
                "I don't have time to visit multiple banks."
              </p>

              <p>
                "I just want to know which loan is best for me."
              </p>

              <p>
                "Too much paperwork and hidden charges make it
                stressful."
              </p>

              <p>
                "I need a trusted and simple way to get a loan."
              </p>

            </div>


            <div>
              <span>THINKS</span>

              <p>
                Is this platform secure and genuine?
              </p>

              <p>
                Will I really get better loan options here?
              </p>

              <p>
                I hope I don't waste time filling out unnecessary
                details.
              </p>

              <p>
                I want a process that is fast and transparent.
              </p>

            </div>


            <div>
              <span>DOES</span>

              <p>
                Compares a few loan websites but gets overwhelmed.
              </p>

              <p>
                Asks friends or agents for recommendations.
              </p>

              <p>
                Searches online for trusted loan options.
              </p>

              <p>
                Prefers apps or websites with simple steps and clear
                results.
              </p>

            </div>


            <div>
              <span>FEELS</span>

              <p>
                Frustrated by complex loan processes and delays.
              </p>

              <p>
                Skeptical about online financial platforms.
              </p>

              <p>
                Relieved when options are clear and trustworthy.
              </p>

              <p>
                Confident when the platform saves time and provides
                real offers.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          TASK FLOW
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="TASK FLOW"
            title={
              <>
                From opening the app
                <br />
                <span>to receiving a loan offer.</span>
              </>
            }
          />


          <div className="task-flow">

            <div>Start an app</div>
            <span>→</span>

            <div>Home page</div>
            <span>→</span>

            <div>Get Loan Offer</div>
            <span>→</span>

            <div>Loan Details</div>
            <span>→</span>

            <div>Applicant Details</div>
            <span>→</span>

            <div>Property Details</div>
            <span>→</span>

            <div>Financial Profile</div>
            <span>→</span>

            <div>Submit to get offer</div>

          </div>

        </div>

      </section>



      {/* =====================================================
          CARD SORTING
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="CARD SORTING"
            title={
              <>
                Organizing the product
                <br />
                <span>around user needs.</span>
              </>
            }
          />


          <div className="card-sorting-grid">

            <div>
              <h3>Get Loan Offer</h3>

              <p>
                Loan Details
              </p>

              <p>
                Applicant Details
              </p>

              <p>
                Property Details
              </p>

              <p>
                Financial Details
              </p>

              <p>
                Co-applicant Details
              </p>

            </div>


            <div>
              <h3>Utilities</h3>

              <p>EMI Calculator</p>
              <p>Rate Change Calculator</p>
              <p>PPF Calculator</p>
              <p>Home Loan Eligibility Calculator</p>
              <p>Fixed Deposit Calculator</p>
              <p>Recurring Deposit Calculator</p>

            </div>


            <div>
              <h3>Account</h3>

              <p>Privacy Settings</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Share App</p>
              <p>Logout</p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          INFORMATION ARCHITECTURE
      ===================================================== */}

      <section className="mockup-section">

        <div className="container">

          <SectionHeader
            eyebrow="INFORMATION ARCHITECTURE"
            title={
              <>
                Creating a clear
                <br />
                <span>product structure.</span>
              </>
            }
          />


          <WideImage
            image={informationArchitecture}
            alt="Saarathi Bazaar information architecture"
          />

        </div>

      </section>



      {/* =====================================================
          DESIGN SYSTEM
      ===================================================== */}

      <section className="saarathi-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="DESIGN SYSTEM"
            title={
              <>
                A visual language built
                <br />
                <span>for clarity and trust.</span>
              </>
            }
          />


          <div className="design-system-grid">

            <div>

              <span>FONT</span>

              <h3 className="roboto-demo">
                Roboto
              </h3>

              <p>
                Roboto has a dual nature. It has a mechanical
                skeleton and largely geometric forms, while its
                friendly and open curves help maintain approachability.
              </p>

            </div>


            <div>

              <span>PRIMARY</span>

              <div
                className="color-swatch"
                style={{
                  background: "#FF4D15",
                }}
              >
                #FF4D15
              </div>

            </div>


            <div>

              <span>SECONDARY</span>

              <div
                className="color-swatch"
                style={{
                  background: "#404040",
                }}
              >
                #404040
              </div>

            </div>


            <div>

              <span>BACKGROUND</span>

              <div
                className="color-swatch light"
              >
                #ECEFF3
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          LOGIN / OTP
      ===================================================== */}

      <section className="mockup-section">

        <div className="container">

          <SectionHeader
            eyebrow="VISUAL DESIGN · ONBOARDING"
            title={
              <>
                Making the first step
                <br />
                <span>quick and trustworthy.</span>
              </>
            }
          />


          <div className="screen-mockup-two">

            <ScreenCard
              image={loginScreen}
              alt="Saarathi Bazaar login screen"
            />

            <ScreenCard
              image={otpScreen}
              alt="Saarathi Bazaar OTP screen"
            />

          </div>


          <div className="design-explanation">

            <p>
              The login screen only asks for the user's mobile
              number, making the first step quick and easy.
            </p>

            <p>
              The "No spam" promise builds trust immediately.
              The OTP screen clearly shows the phone number and
              countdown timer, reducing uncertainty while providing
              a clear security step.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          HOME SCREEN
      ===================================================== */}

      <section className="mockup-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="HOME SCREEN"
            title={
              <>
                Putting the primary action
                <br />
                <span>front and center.</span>
              </>
            }
          />


          <div className="screen-mockup-single">

            <ScreenCard
              image={homeScreen}
              alt="Saarathi Bazaar home screen"
            />

          </div>


          <div className="design-explanation">

            <p>
              The Home Screen drives users toward the primary goal:
              finding a loan.
            </p>

            <p>
              The prominent "Get Loan Offer" action is supported
              by a trust badge and messaging that reassures users
              before they begin the process.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          GET LOAN OFFER — 4 STEPS
      ===================================================== */}

      <section className="mockup-section">

        <div className="container">

          <SectionHeader
            eyebrow="GET LOAN OFFER · 01 — 04"
            title={
              <>
                Breaking a complex form
                <br />
                <span>into guided steps.</span>
              </>
            }
          />


          <div className="screen-mockup-grid">

            <ScreenCard
              image={loanDetails}
              alt="Loan details"
            />

            <ScreenCard
              image={propertyDetails}
              alt="Property details"
            />

            <ScreenCard
              image={financialProfile}
              alt="Financial profile"
            />

          </div>


          <div className="four-step-list">

            <div>
              <strong>01</strong>
              <span>Loan Details</span>
              <p>
                Captures the user's core loan requirement.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <span>Applicant Details</span>
              <p>
                Collects essential personal information.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <span>Property Details</span>
              <p>
                Captures relevant collateral information.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <span>Financial Profile</span>
              <p>
                Collects sensitive income information later in
                the journey.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <section className="mockup-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="GET LOAN OFFER · SUMMARY"
            title={
              <>
                Giving users confidence
                <br />
                <span>before submission.</span>
              </>
            }
          />


          <div className="screen-mockup-single">

            <ScreenCard
              image={summaryScreen}
              alt="Saarathi Bazaar loan summary"
            />

          </div>


          <div className="design-explanation">

            <p>
              The Summary Screen presents all application inputs
              together before submission.
            </p>

            <p>
              Edit actions next to each section help users correct
              information and reduce submission errors while
              improving transparency and confidence.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          MY LOAN REQUEST
      ===================================================== */}

      <section className="mockup-section">

        <div className="container">

          <SectionHeader
            eyebrow="MY LOAN REQUEST"
            title={
              <>
                Making progress
                <br />
                <span>visible after submission.</span>
              </>
            }
          />


          <div className="screen-mockup-single">

            <ScreenCard
              image={myLoanRequest}
              alt="Saarathi Bazaar My Loan Request"
            />

          </div>


          <div className="design-explanation">

            <p>
              My Loan Request acts as a status dashboard that
              reduces uncertainty by confirming the application
              details and providing context around offers currently
              being processed.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          LENDER CONNECTION
      ===================================================== */}

      <section className="mockup-section saarathi-light-section">

        <div className="container">

          <SectionHeader
            eyebrow="LENDER EXPERIENCE"
            title={
              <>
                Connecting users with
                <br />
                <span>the right lender.</span>
              </>
            }
          />


          <div className="screen-mockup-two">

            <ScreenCard
              image={revealLender}
              alt="Reveal lender"
            />

            <ScreenCard
              image={lenderContact}
              alt="Lender contact"
            />

          </div>


          <div className="design-explanation">

            <p>
              The experience helps borrowers move from loan
              discovery toward lender interaction with greater
              clarity.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          DESIGN DECISIONS
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <SectionHeader
            eyebrow="KEY DESIGN DECISIONS"
            title={
              <>
                Designing for
                <br />
                <span>clarity, trust and momentum.</span>
              </>
            }
          />


          <div className="decision-grid">

            <div>
              <span>01</span>

              <h3>
                Progressive disclosure
              </h3>

              <p>
                Instead of presenting a large form at once,
                information is collected through smaller,
                understandable steps.
              </p>

            </div>


            <div>
              <span>02</span>

              <h3>
                Transparency
              </h3>

              <p>
                Clear summaries, edit actions and status information
                help users understand what is happening throughout
                the journey.
              </p>

            </div>


            <div>
              <span>03</span>

              <h3>
                Trust
              </h3>

              <p>
                Trust signals and clear communication are introduced
                at important moments in the financial journey.
              </p>

            </div>


            <div>
              <span>04</span>

              <h3>
                Guided experience
              </h3>

              <p>
                The product guides users toward the next meaningful
                action instead of overwhelming them with options.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="saarathi-final-section">

        <div className="container">

          <div className="saarathi-final-content">

            <p className="section-label">
              THE OUTCOME
            </p>

            <h2>
              A clearer path through
              <br />
              <span>the lending ecosystem.</span>
            </h2>

            <p>
              Saarathi Bazaar brings loan discovery, application,
              financial information and lender interaction into one
              connected experience.
            </p>

            <p>
              The design focuses on reducing complexity while
              maintaining the transparency and trust required when
              users make important financial decisions.
            </p>

          </div>


          <div className="saarathi-final-image">

            <img
              src={homeScreen}
              alt="Saarathi Bazaar final product"
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          LEARNING
      ===================================================== */}

      <section className="saarathi-section">

        <div className="container">

          <div className="saarathi-content-narrow">

            <p className="section-label">
              REFLECTION
            </p>

            <h2>
              What I learned
              <br />
              <span>from the project.</span>
            </h2>

            <p>
              Designing a fintech product reinforced the importance
              of balancing business requirements with user trust.
              Financial journeys can be information-heavy, but the
              experience does not need to feel complicated.
            </p>

            <p>
              Breaking complex processes into smaller steps,
              communicating clearly and providing users with
              control became key principles throughout the design.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}

      <section className="saarathi-next-project">

        <div className="container">

          <p className="section-label">
            NEXT PROJECT
          </p>

          <a
            href="/work/home-loan"
            className="saarathi-next-link"
          >

            <h2>

              Home Loan Journey

              <span>
                <ArrowUpRight size={32} />
              </span>

            </h2>

          </a>

        </div>

      </section>


    </main>
  );
}


export default SaarathiBazaar;