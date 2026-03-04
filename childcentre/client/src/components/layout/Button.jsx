import { Link } from "react-router-dom";

export function Button({
  text,
  onClick,
  variant = "secondary",
  className = "",
  to,
  type = "button",
  ...rest
}) {
  const baseStyles = "px-8 py-3 text-sm font-semibold tracking-wide transition-colors rounded-md";
  
  const variants = {
    primary: "bg-brand-blue hover:bg-brand-blue/90 text-white",
    secondary: "bg-brand-teal hover:bg-brand-teal-dark text-white",
    outline: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...rest}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
}
