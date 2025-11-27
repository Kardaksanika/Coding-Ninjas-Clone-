import Dropdown from "./DropDown";

function Navbar() {
  return (
    <header
      style={{
        animation: "slideDown 0.5s ease-out",
        backdropFilter: "blur(12px)",
      }}
      className="navbar navbar-expand-md fixed-top bg-white/70 shadow-md border-bottom border-gray-200"
    >
      <style>
        {`
        @keyframes slideDown {
          from { transform: translateY(-25px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        

        .nav-link-custom {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link-custom::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #FF6A00, #ff9a3c);
          left: 0;
          bottom: -4px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        .nav-link-custom:hover {
          color: #FF6A00;
        }
        .nav-link-custom:hover::after {
          width: 100%;
        }

        .logo:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 120%;
          height: 100%;
          background: linear-gradient(
            75deg,
            transparent 0%,
            rgba(255,255,255,0.6) 45%,
            transparent 100%
          );
          animation: shine 0.9s ease;
        }
        @keyframes shine {
          from { left: -100%; }
          to { left: 120%; }
        }

        .btn-animate:hover {
          transform: translateY(-3px);
        }
        .login-btn:hover {
          box-shadow: 0 6px 18px rgba(255, 106, 0, 0.4);
        }
        .signup-btn:hover {
          background: #f5f5f5;
          border-color: #d0d0d0;
        }
        `}
      </style>

      <div className="container d-flex align-items-center justify-content-between py-3">

        {/* Logo */}
        <div className="logo fs-3 fw-bold text-[#FF6A00] cursor-pointer position-relative">
          Coding Ninjas
        </div>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">

            <li className="nav-item">
              <Dropdown
                label="Courses"
                items={["Data Structures", "Web Dev", "Machine Learning", "CP"]}
              />
            </li>

            <li className="nav-item">
              <Dropdown
                label="Practice"
                items={["CodeStudio", "Mock Tests", "Interview Prep"]}
              />
            </li>

            <li className="nav-item">
              <a className="nav-link nav-link-custom text-gray-700 fw-medium">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-link-custom text-gray-700 fw-medium">
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex align-items-center gap-3 ms-4">
            <button className="btn btn-outline-secondary signup-btn btn-animate d-none d-md-block px-4 py-2 rounded-3">
              Sign Up
            </button>

            <button className="btn login-btn btn-animate px-4 py-2 rounded-3 text-white fw-semibold shadow-md"
              style={{ background: "#FF6A00" }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
