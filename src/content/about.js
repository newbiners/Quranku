import Hp from "../assets/hp.png"
import "./style/about.css"

const About = () => {
    return(
        <>
        <h1 className="text-6xl mb-10 ml-32 font-medium">About Us</h1>
        <section className="grid grid-cols-35-65  max-w-6xl m-auto justify-around items-center mb-28">
            <main className="relative">
                <span className="satu"></span>
                <img src={Hp} alt="product" className="screen"/>
            </main>
            <ul>
                <li className="h-32 py-10 px-5 mb-10 borders text-center items-end" style={{backgroundColor: '#FEC72C'}}>
                    This auction app has an easy-to-understand interface, so users can easily explore the app's features without going through a complicated training process.
                </li>
                <li className="text-white h-32 py-10 px-5 mb-10 borders2 text-center items-start" style={{backgroundColor: '#07114F'}}>
                    With a verification system for users and goods to be auctioned, this application can ensure that each auction is carried out fairly and honestly.
                </li>
                <li className="bg-slate-500 h-32 py-10 px-5 mb-10 borders text-center items-end"  style={{backgroundColor: '#FEC72C'}}>
                This auction application provides high transparency and accuracy in the auction process, so users can trust the final outcome of the auction.
                </li>
            </ul>
        </section>
        </>
    )
}
export default About