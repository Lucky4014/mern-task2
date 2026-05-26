const CourseCard = ({ title, instructor, rating, students, price, badge, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative h-40 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-5xl">
        {image || "🎓"}
        {badge && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-indigo-900 text-xs font-bold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-800 text-base">{title}</h3>
        <p className="text-sm text-gray-500">By {instructor}</p>

        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400 font-bold">{rating}</span>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
          ))}
          <span className="text-gray-400 text-xs">({students?.toLocaleString()})</span>
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-indigo-700 font-bold text-lg">
            {price === 0 ? "Free" : `₹${price}`}
          </span>
          <button className="bg-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-indigo-700">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;