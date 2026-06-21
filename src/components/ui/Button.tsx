type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[var(--color-navy)] text-white hover:opacity-90"
      : "border border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-gray-100";

  return (
    <button
      className={`
        px-6 
        py-3 
        rounded-lg 
        font-medium 
        transition 
        cursor-pointer
        ${styles}
      `}
    >
      {text}
    </button>
  );
}