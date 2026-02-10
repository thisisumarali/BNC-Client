const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`outline-2 outline-black cursor-pointer hover:uppercase hover:bg-primary hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
