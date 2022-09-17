import CtaButton from "./CtaButton";

const Hero = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="max-w-5xl">
                <p className="font-mono text-custom-pink mb-1 text-sm md:text-md lg:text-lg">Je suis</p>
                <h1 className="font-bold text-cream text-4xl md:text-7xl lg:text-9xl mb-2">Colin Blokkeel</h1>
                <h3 className="font-bold text-custom-purple-300 text-2xl md:text-4xl lg:text-6xl mb-8">Développeur web fullstack</h3>
                <p className="text-custom-purple-300">I’m a software engineer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building accessible, human-centered products at <span className="text-custom-pink">Auchan</span></p>
                <div className="mt-12">
                    <CtaButton text="See more" margin={true} />
                    <CtaButton text="Resume" strokeMode={true} />
                </div>
            </div>
        </div>
    );
}

export default Hero;