import OtakuNestImage from "../assets/images/OtakuNest-image.jpg"

function Projects() {
  return (
    <div className="text-white border-t pt-8 mx-6 md:pt-10 xl:mx-15 xl:grid xl:grid-cols-2 xl:gap-8 2xl:grid-cols-3 2xl:gap-8 2xl:pb-80 2xl:mx-80">
        <div className="2xl:col-span-2 2xl:pt-10">
            <h4 className="tracking-widest font-semibold md:text-3xl xl:text-4xl xl:pb-18">CURRENT PROJECT</h4>
            <img className="pt-6 md:pt-10 xl:w-120 2xl:pt-10 2xl:w-5xl" src={OtakuNestImage} />
        </div>
        <div className="pt-6 md:pt-10 xl:pt-0 2xl:pt-10">
            <h2 className="tracking-wider font-semibold md:text-xl xl:text-4xl xl:pb-20">OTAKUNEST</h2>
                <p className="text-sm font-extralight pt-5 md:text-base xl:text-2xl">
                    A personal media application that aims to provide a unified experience to view your personal collection of anime and manga.  The application is being built using Spring Framework, React, PostgreSQL, Redis, Nginx, and Docker.
                </p>
                <h3 className="font-semibold tracking-wider pt-6 md:text-lg xl:text-3xl xl:pb-6 xl:pt-10 2xl:pt-15 2xl:pb-15">Application Highlights</h3>
            <div className="text-sm font-extralight pt-5 pb-6 md:pb-10 md:text-lg xl:text-2xl">
                <p className="pb-8 xl:pb-10"><span className="font-normal tracking-wide">Anime-Manga Linkage System</span> - Maps anime episodes to corresponding manga chapters for seamless transitions between formats.</p>
                <p><span className="font-normal tracking-wide">AI Content Recommendation Engine</span> - Recommends unwatched anime and manga based on user data.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
