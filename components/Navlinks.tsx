import { RefObject, useEffect, useRef, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import { motion, AnimatePresence } from 'framer-motion'

type NavLinksProps = {
    links: { text: string, link: string }[]
}

const Navlinks = ({ links }: NavLinksProps) => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const { lockScroll, unlockScroll } = useScrollLock();

    const activateShowHamburgerMenu = () => {
        setShowHamburgerMenu(true);
        lockScroll();
    }

    const desactivateShowHamburgerMenu = () => {
        setShowHamburgerMenu(false);
        unlockScroll();
    }

    const useClickOutside = (ref: RefObject<HTMLDivElement>) => {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    desactivateShowHamburgerMenu();
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const hamburgerMenuRef = useRef(null);
    useClickOutside(hamburgerMenuRef);

    return (
        <>
            <div className="hidden md:flex font-mono text-lg cursor-pointer">
                {
                    links.map((value, index) => { return <a href={value.link} key={value.link} className={'hover:text-custom-pink custom-transition ' + (index === 0 ? '' : 'ml-8')}><span className='text-custom-pink'>{index < 9 ? '0' : ''}{index + 1}.</span> {value.text}</a> })
                }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={activateShowHamburgerMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {
                showHamburgerMenu && (
                    <div className="md:hidden h-screen w-screen backdrop-blur-sm absolute top-0 left-0 overflow-hidden">
                        <motion.div
                            className="bg-custom-purple-700 w-2/3 h-full ml-auto flex flex-col items-center justify-center drop-shadow-xl overflow-hidden"
                            ref={hamburgerMenuRef}
                            key='hambergerMenu'
                            initial={{ width: 0 }}
                            animate={{ width: "66.67%" }}
                            transition={{ duration: 0.2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="w-8 h-8 text-custom-pink absolute top-8 right-8" onClick={desactivateShowHamburgerMenu}>
                                <polyline fill="none" stroke="currentColor" points="1 1,6.5 6.5,12 1" />
                                <polyline fill="none" stroke="currentColor" points="1 12,6.5 6.5,12 12" />
                            </svg>
                            {
                                links.map((value, index) => { return <a href={value.link} key={value.link} className='hover:text-custom-pink font-mono custom-transition mt-8 flex flex-col justify-center items-center'><span className='text-custom-pink'>{index < 9 ? '0' : ''}{index + 1}.</span> <span>{value.text}</span></a> })
                            }
                        </motion.div>
                    </div>
                )
            }
        </>
    );
}

export default Navlinks;