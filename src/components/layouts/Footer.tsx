import Github from "../../assets/icons/github.svg"
import Instagram from "../../assets/icons/instagram.svg"
import Linkedin from "../../assets/icons/linkedin.svg"



function Footer() {
  return (
    <footer className="flex flex-col tracking-wider justify-center place-items-center py-3 bg-[#C2C8CC]">
      <h2 className="text-xs font-semibold md:text-2xl xl:text-4xl 2xl:text-6xl">LET'S BUILD SOMETHING AMAZING TOGETHER</h2>
      <div className="flex place-items-center gap-13 xl:gap-50 py-3 xl:py-8  ">
        <a href="https://github.com/ShaheenMohammed/">
          <img className="h-6 md:h-11 xl:h-15 2xl:h-18" src={Github}/>
        </a>
        <a href="https://www.instagram.com/mohammed072592/">
          <img className="h-6 md:h-11 xl:h-15 2xl:h-18" src={Instagram}/>
        </a>
        <a href="https://shaheenmohammed.dev/">
          <img className="h-6 md:h-11 xl:h-15 2xl:h-18" src={Linkedin}/>
        </a>
      </div>
      <div className="text-center text-xs font-semibold md:text-base xl:text-2xl 2xl:text-3xl">
        <h2 className="pb-1">
          shaheenmohammedO1@hotmail.com
        </h2>
        <h2>(604) 440-0682</h2>
      </div>
    </footer>
  )
}

export default Footer
