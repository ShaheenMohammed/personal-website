import { RosetteIcon } from "../../assets/icons/RosetteIcon"

function Header() {
  return (
    <header className = "mx-auto text-white">
      <h1 className="pt-5 px-2 md:px-8 md:pt-8 md:text-2xl xl:pt-10 xl:pl-10 xl:text-4xl 2xl:pl-20 2xl:pt-25 2xl:text-6xl">
        <span className="italic tracking-tight">SHAHEEN</span>
        <span className="font-bold tracking-tight">MOHAMMED</span>
      </h1>
      <section className="place-items-center xl:pt-10 2xl:pt-20">
        <div className="flex justify-between place-items-center font-extralight pt-8 gap-4 text-xs md:gap-6 md:pt-9 md:text-sm xl:text-lg xl:pt-10 xl:gap-8 2xl:text-xl 2xl:gap-8">
          <RosetteIcon className="w-16 md:w-25 xl:w-40 2xl:w-50" />
          <a href="https://github.com/ShaheenMohammed/">GITHUB</a>
          <a href="https://www.instagram.com/mohammed072592/">INSTAGRAM</a>
          <a href="https://shaheenmohammed.dev/">LINKEDIN</a>
        </div>
      </section>
    </header>
  )
}

export default Header
