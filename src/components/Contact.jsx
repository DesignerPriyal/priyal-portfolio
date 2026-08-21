import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

function Contact() {
  const email = "priyalsrv@gmail.com";
  const phone = "+917827507583";

  const emailSubject = encodeURIComponent("Project Inquiry — Priyal Shrivastava");
  const emailBody = encodeURIComponent(
    "Hi Priyal,\n\nI came across your portfolio and would like to discuss a project with you.\n\nThanks!"
  );

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <motion.p
          className="contact-label"
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.7,
          }}
        >
          HAVE A PROJECT IN MIND?
        </motion.p>


        {/* =====================================================
            MAIN HEADING
        ===================================================== */}

        <motion.div
          className="contact-heading"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <h2>
            Let's build
            <br />
            <span>something meaningful.</span>
          </h2>

        </motion.div>


        {/* =====================================================
    MAIN CTA
===================================================== */}

<motion.a
  href="mailto:priyalsrv@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Priyal%20Shrivastava"
  className="contact-cta"

  initial={{
    opacity: 0,
    scale: 0.95,
  }}

  whileInView={{
    opacity: 1,
    scale: 1,
  }}

  whileHover={{
    scale: 1.02,
  }}

  whileTap={{
    scale: 0.98,
  }}

  viewport={{
    once: true,
    amount: 0.3,
  }}

  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <span>
    Start a conversation
  </span>

  <span className="contact-cta-icon">
    <ArrowUpRight size={22} />
  </span>
</motion.a>


        {/* =====================================================
            CONTACT DETAILS
        ===================================================== */}

        <div className="contact-details">

          {/* =================================================
              EMAIL
          ================================================= */}

          <motion.a
            href={`mailto:${email}`}
            className="contact-detail"

            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <div className="contact-detail-icon">
              <Mail size={18} />
            </div>

            <div>
              <span className="contact-detail-label">
                EMAIL
              </span>

              <span className="contact-detail-value">
                {email}
              </span>
            </div>

            <ArrowUpRight
              className="contact-detail-arrow"
              size={18}
            />

          </motion.a>


          {/* =================================================
              PHONE
          ================================================= */}

          <motion.a
            href={`tel:${phone}`}
            className="contact-detail"

            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <div className="contact-detail-icon">
              <Phone size={18} />
            </div>

            <div>
              <span className="contact-detail-label">
                PHONE
              </span>

              <span className="contact-detail-value">
                +91 78275 07583
              </span>
            </div>

            <ArrowUpRight
              className="contact-detail-arrow"
              size={18}
            />

          </motion.a>


          {/* =================================================
              LINKEDIN
          ================================================= */}

          <motion.a
            href="https://www.linkedin.com/in/priyalshrivastava/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-detail"

            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              delay: 0.3,
            }}
          >

            <div className="contact-detail-icon">
              <span className="linkedin-icon">
                in
              </span>
            </div>

            <div>
              <span className="contact-detail-label">
                LINKEDIN
              </span>

              <span className="contact-detail-value">
                Connect with me
              </span>
            </div>

            <ArrowUpRight
              className="contact-detail-arrow"
              size={18}
            />

          </motion.a>

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="contact-footer">

          <span>
            © 2026 Priyal Shrivastava
          </span>

          <span>
            Product Designer · UI/UX · Developer
          </span>

          <span>
            INDIA
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;