import { FC } from "react";
import Navlinks from "./Navlinks";

const navbarLinks = [
    {
        text: 'super',
        link: '/test'
    },
    {
        text: 'bravo',
        link: '/bravo'
    },
    {
        text: 'oui',
        link: '/oui'
    }
]

const Navbar: FC = () => {
    return (
        <div className='h-24 md:h-48 w-full px-12 md:px-18 lg:px-24 flex justify-between items-center text-cream fixed'>
            <h1 className="font-bold text-2xl md:text-4xl">Logo</h1>
            <Navlinks links={navbarLinks} />
        </div>
    );
}





export default Navbar;