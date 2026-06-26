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
    className="
  bg-[var(--color-navy)]
  text-white
  px-8
  py-4
  font-semibold
  rounded-full
  hover:opacity-90
  transition-all
  duration-300
  ease-in-out
  font-medium
"
    >
      {text}
    </button>
  );
}