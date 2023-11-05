function Button({ children }) {
  return (
    <button className="button">
      {children}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-6 h-6 ml-2"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </button>
  );
}

export default Button;
