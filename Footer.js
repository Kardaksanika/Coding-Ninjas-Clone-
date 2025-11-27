import { Logo } from "./Logo";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111214",
        color: "#e5e7eb",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "48px 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px",
        }}
      >
        {/* Use media query for responsive grid */}
        <style>
          {`
            @media (min-width: 768px) {
              footer .footer-grid {
                grid-template-columns: 1fr 1fr 1fr;
              }
            }

            .footer-link:hover {
              color: #ffffff;
              transition: color 0.3s;
            }
          `}
        </style>

        <div className="footer-grid"></div>

        {/* Logo Section */}
        <div>
          <Logo />
          <p
            style={{
              marginTop: "12px",
              fontSize: "14px",
              color: "#9ca3af",
              maxWidth: "260px",
              lineHeight: "1.5",
            }}
          >
            Building career-ready developers since 2016.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h4
            style={{
              fontWeight: "600",
              marginBottom: "12px",
              color: "#ffffff",
            }}
          >
            Company
          </h4>

          <ul style={{ fontSize: "14px", color: "#9ca3af", listStyle: "none", padding: 0 }}>
            {["About", "Careers", "Blogs"].map((item) => (
              <li
                key={item}
                className="footer-link"
                style={{
                  cursor: "pointer",
                  marginBottom: "6px",
                  transition: "color 0.3s",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4
            style={{
              fontWeight: "600",
              marginBottom: "12px",
              color: "#ffffff",
            }}
          >
            Contact
          </h4>

          <p
            className="footer-link"
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
          >
            support@codingninjasclone.com
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div
        style={{
          borderTop: "1px solid #1f2937",
          padding: "16px 0",
          textAlign: "center",
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        © 2025 Coding Ninjas Clone
      </div>
    </footer>
  );
}

export default Footer;
