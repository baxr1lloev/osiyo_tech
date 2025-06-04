import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Features from "./components/Features"
import Department from "./components/Department"
import News from "./components/News"



export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <News />
      <Department />
      <Contact />
      <Footer />
    </main>
  )
}
