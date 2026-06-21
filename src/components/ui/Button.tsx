type ButtonProps = {
  text: string;
};


export default function Button({
  text,
}: ButtonProps) {
  return (
    <button
      className="
        px-6
        py-3
        rounded-lg
        bg-[var(--color-navy)]
        text-white
        font-medium
        cursor-pointer
        transition
        hover:opacity-90
      "
    >
      {text}
    </button>
  );
}