interface OnePageProps{
    children?: JSX.Element | React.ReactNode;
    className?: string;
}

const OnePage: React.FC<OnePageProps> = ({ children, className }) => {
    return(
        <div className={`max-w-lg w-full ${className}`}>
            {children}
        </div>
    )
}

export default OnePage;