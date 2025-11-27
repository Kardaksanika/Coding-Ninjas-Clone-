import CourseCard from "./CourseCard";
import { coursesData } from "./Hero";

function Courses() {
  return (
    <section
      id="courses"
      className="max-w-7xl mx-auto px-6 py-16"
      style={{
        animation: "fadeIn 0.7s ease",
      }}
    >
      <style>
        {`
          /* SECTION FADE-IN ANIMATION */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(25px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* INDIVIDUAL CARD SLIDE-UP */
          .course-card-anim {
            opacity: 0;
            transform: translateY(20px);
            animation: slideUp 0.7s ease forwards;
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* PREMIUM HOVER EFFECTS */
          .course-hover {
            transition: 
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;
            border: 2px solid transparent;
            border-radius: 18px;
          }

          .course-hover:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0px 16px 36px rgba(0,0,0,0.12);
            border-color: #FF6A00;
          }

          /* SOFT GLOW ON HOVER */
          .course-hover:hover {
            box-shadow:
              0px 16px 36px rgba(0,0,0,0.10),
              0px 0px 8px rgba(255, 106, 0, 0.3);
          }

          /* HEADING STYLING */
          .courses-title {
            position: relative;
            display: inline-block;
          }

          .courses-title::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 40%;
            height: 3px;
            background: linear-gradient(90deg, #FF6A00, #FF9A3C);
            border-radius: 4px;
          }
        `}
      </style>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800 courses-title">
        Popular Courses
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coursesData.map((c, i) => (
          <div
            key={i}
            className="course-card-anim"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="course-hover p-1">
              <CourseCard c={c} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
