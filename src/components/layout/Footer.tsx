import Container from "./Container";

export default function Footer() {
  return (
    <footer 
      className="
        bg-[var(--color-navy)] 
        text-white 
        py-16
        mt-24
      "
    >
      <Container>

        <h2 className="text-2xl font-bold">
          RIT ENERGY LIMITED
        </h2>

        <p className="mt-4 max-w-xl text-gray-300">
          A multi-division operations company delivering
          energy solutions, digital systems, brand development,
          and event experiences through specialized business
          divisions.
        </p>


        <div className="mt-10 border-t border-white/20 pt-6 text-sm">
          © 2026 RIT ENERGY LIMITED.
          All rights reserved.
        </div>

      </Container>
    </footer>
  );
}