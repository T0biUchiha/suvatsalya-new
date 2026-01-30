export function Button({ text, onClick, variant = "secondary", className = "" }) {
  const baseStyles = "px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-colors";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white rounded-md",
    secondary: "bg-sky-700 hover:bg-sky-700/70 text-white rounded-md",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
}