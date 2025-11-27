function Testimonials() {
  return (
    <section
      className="bg-white border-t mt-16"
      style={{ animation: "fadeIn 0.7s ease" }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(25px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .testimonial-anim {
            opacity: 0;
            transform: translateY(20px);
            animation: slideUp 0.9s cubic-bezier(0.25, 0.8, 0.3, 1) forwards;
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          .testimonial-card {
            position: relative;
            overflow: hidden;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            border-radius: 20px;
            box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.08);
          }

          .testimonial-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(135deg, #FF6A00, #FF9A3C);
            opacity: 0;
            transition: opacity 0.35s ease;
            z-index: 0;
          }

          .testimonial-card:hover::before {
            opacity: 1;
          }

          .testimonial-card > div {
            position: relative;
            z-index: 1;
            background: white;
            border-radius: 18px;
            transition: background 0.3s ease;
          }

          .testimonial-card:hover {
            transform: translateY(-12px) scale(1.04);
            box-shadow: 0px 25px 60px rgba(0,0,0,0.14);
          }

          .avatar {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #FF6A00;
            box-shadow: 0 0 15px rgba(255, 106, 0, 0.45);
          }

          .section-title {
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 60%;
            height: 4px;
            background: linear-gradient(90deg, #FF6A00, #FF9A3C);
            border-radius: 4px;
          }

          .testimonial-text {
            font-size: 15.5px;
            line-height: 1.75;
            color: #555;
            margin-top: 8px;
          }
        `}
      </style>

      {/* OUTER WRAPPER – Better spacing */}
      <div className="max-w-7xl mx-auto px-10 py-24 ml-10">

        {/* Section Title */}
        <h3 className="text-4xl font-bold mb-14 text-gray-900 section-title">
          What our learners say
        </h3>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ml-6">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="testimonial-anim"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="testimonial-card shadow-md">
                <div className="p-8 border rounded-2xl bg-white">

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                      alt="User"
                      className="avatar"
                    />

                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        Student {i}
                      </div>
                      <div className="text-sm text-gray-500">
                        Software Engineer
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="testimonial-text">
                    “The course structure, mock interviews, and mentor support helped me build confidence.
                    I cracked my first tech job because of this program!”
                  </p>

                  {/* Rating */}
                  <div className="mt-6 flex items-center gap-2 text-orange-600 font-semibold">
                    ⭐ 4.9 / 5.0
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
