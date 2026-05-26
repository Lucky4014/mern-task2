import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import Button from "./components/Button";
import Badge from "./components/Badge";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";

const courses = [
  { title: "React.js for Beginners", instructor: "Arjun Mehta", rating: 4.8, students: 12400, price: 499, badge: "Bestseller", image: "⚛️" },
  { title: "Full Stack MERN Bootcamp", instructor: "Priya Sharma", rating: 4.7, students: 8900, price: 799, badge: "New", image: "🚀" },
  { title: "Tailwind CSS Mastery", instructor: "Rohit Verma", rating: 4.5, students: 5200, price: 0, badge: "Free", image: "🎨" },
];

const testimonials = [
  { name: "Sneha Kapoor", role: "Frontend Developer", quote: "EduTech helped me land my first job in 3 months!" },
  { name: "Aman Singh", role: "MERN Intern", quote: "Best practical MERN course I've ever taken." },
  { name: "Divya Nair", role: "CS Student", quote: "Free Tailwind course is better than most paid ones." },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge color="yellow">🔥 10,000+ Students Enrolled</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">
            Learn. Build. <span className="text-yellow-300">Get Hired.</span>
          </h1>
          <p className="text-indigo-200 text-lg mb-8">Master React, Node.js, and the full MERN stack.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg">Explore Courses</Button>
            <Button variant="secondary" size="lg">Watch Demo</Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
