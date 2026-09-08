import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Footer from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import Projects from "../components/Projects"
import photo from "../assets/images/personal-website-photo-crop.jpg"

function Home() {

  return (
<div className="min-h-screen flex flex-col">
      <h1 className="text-white pt-5 px-2 md:px-8 md:pt-8 md:text-2xl xl:pt-10 xl:pl-10 xl:text-4xl 2xl:pl-20 2xl:pt-25 2xl:text-6xl">
        <span className="italic tracking-tight">SHAHEEN</span>
        <span className="font-bold tracking-tight">MOHAMMED</span>
      </h1>
      <Header />
      <main className="flex-1">
        <Intro />
        <div>
          <img className="w-full object-stretch" src={photo} />
        </div>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default Home
