type CtaButtonProps = {
    text: string,
    strokeMode?: boolean
    margin?: boolean
}

const CtaButton = ({ text, strokeMode, margin }: CtaButtonProps) => {
    return (
        <button className={'text-cream font-mono py-2 px-6 rounded-lg ' + (strokeMode ? 'bg-transparent border-custom-pink border-2' : 'bg-custom-pink') + (margin ? ' mr-6' : '')}>
            {text}
        </button >
    );
}

export default CtaButton;