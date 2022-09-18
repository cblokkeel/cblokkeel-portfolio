import CtaButton from "./CtaButton";
import { motion } from "framer-motion";

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <motion.div
                className="max-w-5xl overflow-hidden"
                variants={container}
                initial="hidden"
                animate="visible">
                <motion.p
                    className="font-mono text-custom-pink mb-1 text-sm md:text-md lg:text-lg"
                    variants={child}>Je suis</motion.p>
                <motion.h1
                    className="font-bold text-cream text-4xl md:text-7xl lg:text-9xl mb-2"
                    variants={child}>Colin Blokkeel</motion.h1>
                <motion.h3
                    className="font-bold text-custom-purple-300 text-2xl md:text-4xl lg:text-6xl mb-8"
                    variants={child}>Développeur web fullstack</motion.h3>
                <motion.p
                    className="text-custom-purple-300"
                    variants={child}>I’m a software engineer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building accessible, human-centered products at <span className="text-custom-pink">Auchan</span></motion.p>
                <div className="mt-12">
                    <CtaButton text="See more" margin={true} />
                    <CtaButton text="Resume" strokeMode={true} />
                </div>
            </motion.div>
        </div>
    );
}

export default Hero;