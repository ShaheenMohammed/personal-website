import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Footer from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import Projects from "../components/Projects"
import photo from "../assets/images/personal-website-photo-crop.jpg"

function Home() {

  return (
    <div>
      <Header />
      <Intro />
      <div>
        <img className="object-stretch w-full" src= {photo}/>
      </div>
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
