const Header = () => {
    return(
        <div>
            <header className="flex justify-start gap-48 px-5 py-3 max-w-5xl m-auto items-center" style={{color: '#302F2E'}}>
                <h1 className="text-3xl font-bold">logo</h1>
                <ul className="flex gap-14 font-medium text-xl">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testmonial">Testimonial</a></li>
                </ul>
            </header>
        </div>
    )
}
export default Header