import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Work",
    target: "work",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Experience",
    target: "experience",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (target) => {
    setMenuOpen(false);

    const section = document.getElementById(target);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >

        <div className="navbar-inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <button
            className="navbar-logo"
            onClick={() => handleNavigation("top")}
            aria-label="Go to top"
          >
            PRIYAL
          </button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="navbar-links"
            aria-label="Primary navigation"
          >

            {navItems.map((item) => (
              <button
                key={item.target}
                className="navbar-link"
                onClick={() =>
                  handleNavigation(item.target)
                }
              >
                <span>
                  {item.label}
                </span>

                <ArrowUpRight size={13} />
              </button>
            ))}

          </nav>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-menu"

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="mobile-menu-inner">

              <p className="mobile-menu-label">
                NAVIGATION
              </p>


              <nav
                className="mobile-menu-links"
                aria-label="Mobile navigation"
              >

                {navItems.map((item, index) => (

                  <motion.button
                    key={item.target}
                    className="mobile-menu-link"

                    onClick={() =>
                      handleNavigation(item.target)
                    }

                    initial={{
                      opacity: 0,
                      x: -20,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay: index * 0.06,
                      duration: 0.4,
                    }}
                  >

                    <span className="mobile-menu-number">
                      0{index + 1}
                    </span>

                    <span className="mobile-menu-title">
                      {item.label}
                    </span>

                    <ArrowUpRight size={20} />

                  </motion.button>

                ))}

              </nav>


              <div className="mobile-menu-footer">

                <span>
                  PRODUCT DESIGNER
                </span>

                <span>
                  INDIA
                </span>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;