function CourseCard({ c }) {
  return (
    <div
      className="card p-4 border-0 shadow-sm rounded-4 
                 hover:shadow-lg hover:-translate-y-1 
                 transition-all duration-300 cursor-pointer"
      style={{ minHeight: "240px" }}
    >
      {/* Top Section */}
<div className="d-flex flex-column align-items-center gap-3">
  <img
    src="https://img.freepik.com/premium-vector/programming-code-coding-hacker-concept-with-magnifier-wireframe-hand-icons-magnifying-glass-programming-code-infographic-future-cyber-technology-vector-illustration_127544-1858.jpg?w=1060"
    alt={c.title}
    className="rounded-3"
    style={{ width: "270px", height: "270px", objectFit: "contain" }}
  />

  <div className="flex-grow-1 text-center">
    <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
      <h5 className="fw-bold text-dark mb-0">{c.title}</h5>

      {c.badge && (
        <span
          className="badge bg-orange-100 text-orange-700 rounded-pill px-2 py-1 fw-semibold"
          style={{ backgroundColor: "#ffe8d0", color: "#ff6a00" }}
        >
          {c.badge}
        </span>
      )}
    </div>

    <p className="text-muted small mb-0 lh-base">{c.desc}</p>
  </div>
</div>


      {/* Bottom Section */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="text-muted small d-flex align-items-center gap-1">
          <span
            className="rounded-circle"
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#FF6A00",
              display: "inline-block",
            }}
          ></span>
         <div>8 months
         </div> 
        </div>

        <button
          className="btn text-white fw-semibold px-4 py-2"
          style={{ background: "#FF6A00" }}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
