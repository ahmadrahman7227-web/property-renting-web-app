type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "bg-[#a43b2c] text-white hover:scale-[1.02] hover:opacity-90",

  secondary:
    "bg-[#006491] text-white hover:scale-[1.02] hover:opacity-90",

  outline:
    "border border-[#006491] text-[#006491] hover:bg-[#006491] hover:text-white",
};

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;