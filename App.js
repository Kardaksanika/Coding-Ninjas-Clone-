import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#1f2937", // matches text-gray-900
        fontFamily: "sans-serif",
      }}
    >
      <Navbar />

      <main style={{ marginTop: "0px" }}>
        <Hero />

        <div style={{ marginTop: "48px" }}>
          <Courses />
        </div>

        <div style={{ marginTop: "48px" }}>
          <Testimonials />
        </div>
      </main>

      <Footer />
    </div>
  );
}
