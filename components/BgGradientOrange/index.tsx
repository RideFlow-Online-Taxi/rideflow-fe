interface bgGradientProps{
    className?: string;
}

const BgGradientOrange: React.FC<bgGradientProps> = ({className}) => {
    return(
        <div className={`${className} bg-bgGradientOrange h-[412px] bg-bottom bg-cover w-full bg-no-repeat`}></div>
    )
}

export default BgGradientOrange;