function Home() {
  const courses = [
    { name: "Java Full Stack", level: "Beginner" },
    { name: "Python DSA", level: "Intermediate" },
    { name: "Web Development", level: "Beginner" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(90deg, #ff6d00, #ff9100)",
          padding: "70px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Become a Coding Ninja
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.9, marginBottom: "25px" }}>
          Learn programming from beginner to advanced with expert-designed courses.
        </p>

        <a
          href="#courses-section"
          style={{
            background: "white",
            color: "#ff6d00",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          Explore Courses →
        </a>
      </section>

      {/* COURSES SECTION */}
      <section
        id="courses-section"
        style={{
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "25px" }}>
          Popular Courses
        </h2>

        <div
          className="course-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {courses.map((course, i) => (
            <div
              className="course-card"
              key={i}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                {course.name}
              </h3>

              <p
                className="level"
                style={{
                  fontSize: "14px",
                  background: "#ffe0c2",
                  display: "inline-block",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  color: "#ff6d00",
                  fontWeight: "bold",
                }}
              >
                {course.level}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
