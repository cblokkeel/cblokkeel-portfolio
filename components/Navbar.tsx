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

const Navbar = () => {
    return (
        <div className='h-24 md:h-48 flex justify-between items-center text-cream'>
            <h1 className="font-bold text-4xl">Logo</h1>
            <Navlinks links={navbarLinks} />
        </div>
    );
}

export default Navbar;