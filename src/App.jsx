import { Hero } from "@/sections/Hero"
import { Navbar } from "@/layout/Navbar"
import { Footer } from "@/layout/Footer"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Contact } from "@/sections/Contact"


function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {[...Array(30)].map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-magenta opacity-60"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              animation: `slow-drift ${15 + (index % 5) * 4}s ease-in-out infinite`,
              animationDelay: `${(index % 5) * 0.8}s`,
            }}
          />
        ))}
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
