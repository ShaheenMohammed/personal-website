import personIcon from "../assets/icons/personIcon.png"

function Hero() {
  return (
    <div className="text-white 2xl:pt-30 2xl:h-180">
      <div className="flex justify-center place-items-center pt-5 gap-5 md:pt-10 xl:pt-15">
        <img className="h-15 w-15 md:h-25 md:w-25 xl:h-35 xl:w-35 2xl:h-50 2xl:w-50" src={personIcon} />
        <h2 className="font-semibold text-center tracking-widest md:text-3xl xl:text-4xl 2xl:text-6xl">HEY THERE!</h2>
      </div>
          <p className="tracking-wide font-extralight pb-8 pt-5 px-8 text-sm text-justify md:text-lg md:pb-10 xl:pb-20 xl:text-2xl xl:mx-15 xl:pt-15 2xl:text-2xl 2xl:pt-15 2xl:mx-80">
              I love building systems from the ground up and solving complex problems.  I'm always looking for opportunities to learn, experiment, and push beyond what I already know.  I have a particular fondness for Java and Python and enjoy developing software; for me, software development is relishing in the blissful agony of building a system that starts from a simple thought, followed by the satisfaction, appreciation, and disbelief seeing it through completion.<br/><br/>When I am not glued to my screen, I often connect with nature, spend time with family and friends, and try find new coffee places.
          </p>
    </div>
  )
}

export default Hero
