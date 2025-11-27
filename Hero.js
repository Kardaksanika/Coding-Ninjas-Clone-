export default function Hero() {
  return (
    <section className="mt-40 pt-5 bg-gradient-to-b from-white to-gray-50 position-relative overflow-hidden">

      <div className="container py-5">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6 animate-fadeInUp">
            <h1 className="display-5 fw-bold text-dark lh-tight">
              India’s Best Coding Courses
              <br />
              <span className="text-[#FF6A00]">Mentor-led, Industry-ready.</span>
            </h1>

            <p className="mt-4 text-secondary fs-5 lh-lg">
              Upskill with projects, live doubt sessions, and real interview prep.
              Join thousands of learners and fast-track your tech career.
            </p>

            {/* Buttons */}
            <div className="mt-4 d-flex gap-3">
              <a
                href="#courses"
                className="btn px-4 py-3 rounded-3 text-white fw-semibold shadow-md"
                style={{ background: "#FF6A00" }}
              >
                Explore Courses
              </a>

              <a
                href="#contact"
                className="btn border px-4 py-3 rounded-3 fw-semibold"
              >
                Talk to Counsellor
              </a>
            </div>

            {/* Stats */}
            <div className="mt-5 d-flex gap-5">
              <div>
                <div className="h2 fw-bold mb-0">1M+</div>
                <div className="text-muted small">Learners</div>
              </div>

              <div>
                <div className="h2 fw-bold mb-0">4.8 ⭐</div>
                <div className="text-muted small">Avg. Rating</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/153/366/original/3d-web-developer-working-on-project-illustration-png.png "      
              alt="Coding Illustration"
              referrerPolicy="no-referrer"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxWidth: "520px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

        </div>
      </div>

    </section>
  );
}

export const coursesData = [
  {
    title: "Full Stack Web Development",
    desc: "React, Node.js, Express, MongoDB + projects",
    img: "https://cdni.iconscout.com/illustration/premium/thumb/web-development-illustration-download-in-svg-png-gif-file-formats--website-code-programming-pack-design-development-illustrations-7093410.png",
    badge: "Popular",
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Master DSA with problem sets & mocks",
    img: "https://cdni.iconscout.com/illustration/premium/thumb/problem-solving-illustration-download-in-svg-png-gif-file-formats--algorithmic-thinking-critical-design-development-pack-business-illustrations-7123140.png",
    badge: "Career",
  },
  {
    title: "Machine Learning",
    desc: "Build ML models & end-to-end projects",
    img: "https://cdni.iconscout.com/illustration/premium/thumb/machine-learning-illustration-download-in-svg-png-gif-file-formats--ai-artificial-intelligence-robot-automation-pack-science-technology-illustrations-7106301.png",
    badge: "New",
  },
];
