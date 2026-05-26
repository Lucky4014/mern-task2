const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">📚 <span className="text-yellow-300">Edu</span>Tech</h2>
          <p className="mt-3 text-indigo-300 text-sm">Empowering learners with modern education.</p>
        </div>

        <div>
          <h3 className="font-semibold text-yellow-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-indigo-300">
            {["Home", "Courses", "Instructors", "Blog", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-yellow-300 mb-3">Newsletter</h3>
          <p className="text-sm text-indigo-300 mb-3">Get latest courses in your inbox.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="your@email.com"
              className="flex-1 rounded-full px-4 py-2 text-sm text-gray-800 bg-white focus:outline-none" />
            <button className="bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-indigo-800 text-center py-4 text-indigo-400 text-xs">
        © {new Date().getFullYear()} EduTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;