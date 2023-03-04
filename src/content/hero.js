// import Profil from '../../assets/person.png';
import Profil from '../assets/person.png'
import './style/hero.css'

const Hero = () => {
    return(
        <section className="grid px-5 max-w-5xl m-auto center mb-24" style={{height: '90vh'}}>
            <main className='items-start'>
                <h1 className='font-bold text-left mb-10 leading' style={{color: "#302F2E"}}>Discover unique and rare items on <span className='hackbid'>Hackbid</span></h1>
                <p className='text-left text-xl' style={{color: "#302F2E"}}>There is no longer a geographic limit in the auction process - find products from all over the world with just a few clicks on our auction site.</p>
                <main className='text-white text-left mt-7 flex items-center gap-10'>
                <button className="download">
                    <a href="#download">
                    Download
                    </a>
                </button>
                </main>
            </main>
            <main className='background gambar-bg w-80 radius'>
                <img src={Profil} className="gambar" alt='gambar'/>
            </main>
        </section>
    )
} 

export default Hero