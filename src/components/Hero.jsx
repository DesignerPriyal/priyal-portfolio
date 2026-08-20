import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

function Hero() {
  // =========================================================
  // MOUSE MOVEMENT
  // =========================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useTransform(smoothY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="hero">

      <div className="container hero-container">

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <motion.div
          className="hero-top"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span>PRODUCT DESIGNER</span>

          <span>INDIA · 2026</span>

        </motion.div>


        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="hero-content">

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            Designing digital

            <br />

            <motion.span
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 0.3,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              experiences that matter.
            </motion.span>

          </motion.h1>


          {/* =================================================
              HERO BOTTOM
          ================================================= */}

          <motion.div
            className="hero-bottom"
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
          >

            <p>
              I'm Priyal, a Product Designer focused on
              simplifying complex products through research,
              interaction and visual design.
            </p>


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="hero-actions">

              <motion.a
                href="#work"
                className="primary-button"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >

                View my work

                <motion.span
                  whileHover={{
                    x: 4,
                    y: -4,
                  }}
                >
                  <ArrowUpRight size={16} />
                </motion.span>

              </motion.a>


              <motion.a
                href="#about"
                className="secondary-button"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                More about me
              </motion.a>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            FLOATING DESIGN ELEMENT
        ===================================================== */}

        <motion.div
          className="hero-orbit"
          style={{
            rotateX,
            rotateY,
          }}
        >

          <motion.div
            className="hero-orbit-ring hero-orbit-ring-1"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-orbit-ring hero-orbit-ring-2"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-orbit-core"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>UX</span>
          </motion.div>

          <motion.div
            className="hero-orbit-dot"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </motion.div>


        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.div
          className="hero-scroll"
          animate={{
            y: [0, 8, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <ArrowDown size={18} />

          <span>
            Scroll to explore
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;