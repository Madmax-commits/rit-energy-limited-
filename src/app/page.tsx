import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <section className="py-32">
          <Container>

            <h1 
              className="
                text-5xl 
                md:text-7xl 
                font-bold 
                text-[var(--color-navy)]
                max-w-4xl
              "
            >
              A Multi-Division Infrastructure,
              Energy, Technology & Experience Group.
            </h1>


            <p 
              className="
                mt-8 
                text-lg 
                text-gray-600 
                max-w-2xl
              "
            >
              We operate specialized business divisions
              delivering energy solutions, digital systems,
              brand development, and event experiences
              across industries.
            </p>

          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}