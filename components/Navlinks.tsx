type NavLinksProps = {
    links: { text: string, link: string }[]
}

const Navlinks = ({ links }: NavLinksProps) => {
    return (
        <div className="flex font-mono text-lg cursor-pointer">
            {
                links.map((value, index) => { return <a href={value.link} className={'hover:text-custom-pink custom-transition ' + (index === 0 ? '' : 'ml-8')}><span className='text-custom-pink'>{index < 9 ? '0' : ''}{index + 1}.</span> {value.text}</a> })
            }
        </div>
    );
}

export default Navlinks;