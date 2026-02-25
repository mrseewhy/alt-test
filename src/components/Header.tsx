
const Header = ({ header }: { header: string }) => {
    return (
        <div className="bg-gray-50 h-24 w-full grid place-items-center">
            <p className="font-bold text-4xl">{header}</p>
        </div>
    )
}

export default Header