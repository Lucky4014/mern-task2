const Button = ({ children, variant = "primary", size = "md", onClick }) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-indigo-700 border-2 border-indigo-600 hover:bg-indigo-50",
    ghost: "bg-transparent text-indigo-600 hover:bg-indigo-50",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2",
    lg: "text-base px-7 py-3",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};

export default Button;