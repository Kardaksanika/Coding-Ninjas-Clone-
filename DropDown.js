import React, { useState, useRef, useEffect } from "react";

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // Updated styles (more modern + polished)
  const styles = {
    button: {
      padding: "10px 18px",
      borderRadius: "12px",
      background: "white",
      cursor: "pointer",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.3s ease",
      border: "1px solid #e5e7eb",
      fontSize: "15px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    },
    buttonHover: {
      backgroundColor: "#f3f4f6",
      boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    },
    menu: {
      position: "absolute",
      left: 0,
      marginTop: "12px",
      width: "220px",
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
      padding: "8px 0",
      zIndex: 40,
      animation: "fadeScale .25s ease",
      transformOrigin: "top center",
    },
    menuItem: {
      padding: "10px 16px",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "8px",
      transition: "0.2s",
      color: "#374151",
    },
  };

  return (
    <div className="relative" ref={ref} style={{ position: "relative" }}>
      <style>
        {`
          @keyframes fadeScale {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      {/* Button */}
      <button
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        style={styles.button}
        onMouseEnter={(e) =>
          Object.assign(e.currentTarget.style, styles.buttonHover)
        }
        onMouseLeave={(e) =>
          Object.assign(e.currentTarget.style, styles.button)
        }
      >
        <span>{label}</span>

        {/* Arrow Icon */}
        <svg
          style={{
            width: "16px",
            height: "16px",
            transition: "0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            opacity: 0.7,
          }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Menu */}
      {open && (
        <ul role="menu" style={styles.menu}>
          {items.map((it, i) => (
            <li
              key={i}
              role="menuitem"
              style={styles.menuItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f3f4f6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setOpen(false)}
            >
              {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
