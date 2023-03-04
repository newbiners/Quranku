import Luffy from '../assets/luffy.jpg'
import Naruto from '../assets/naruto.jpg'
import Tanjiro from "../assets/Kamado-Tanjiro.jpg"

import './style/testimonial.css'

const Testimonial = () => {
    return(
        <main className=" h-64 mb-80" >
            <h1 className="text-center mb-24 text-4xl">Testimonial</h1>
            <ul className="flex gap-14 justify-center items-center" style={{}}>
                <li className="bg-slate-500 h-64 w-64 relative induk" style={{borderRadius: '2rem',overflow: 'hidden'}}>
                    <section className='flex absolute tansitions'>
                    <main className="color transforms text-center px-5 py-7 flex flex-col gap-5">
                    <p>"This product really helps me in solving various problems related to buying and selling, I can get the best price here"</p>
                    <p className="mt-2">"Reseller" <br/>"Monky D Luffy"</p>
                        </main>
                        <main className="w-96 image" >
                        <img src={Luffy} alt="luffy" style={{height: '20rem'}}/>
                        </main>
                    </section>
                </li>
                <li className="bg-slate-500 h-64 w-64 relative induk" style={{borderRadius: '2rem',overflow: 'hidden'}}>
                    <section className='flex absolute tansitions'>
                    <main className="color transforms text-center px-5 py-16 flex flex-col gap-3">
                            <p>"I can buy goods here with the best price and fast delivery"</p>
                            <p className="mt-10">"Buyer" <br/>"Uzumaki Naruto"</p>
                        </main>
                        <main className="w-96 image" >
                        <img src={Naruto} alt="Naruto" style={{height: '17rem',}}/>
                        </main>
                    </section>
                </li>
                <li className="bg-slate-500 h-64 w-64 relative induk" style={{borderRadius: '2rem',overflow: 'hidden'}}>
                    <section className='flex absolute tansitions'>
                    <main className="color transforms text-center px-5 py-12 flex flex-col gap-10">
                    <p>"I can get the best price and quality product here and also on time delivery"</p>
                    <p className="mt-3">"Buyer" <br/>"Kamado Tanjiro"</p>
                        </main>
                        <main className="w-96 image" >
                        <img src={Tanjiro} alt="Tanjiro" style={{height: '17rem'}}/>
                        </main>
                    </section>
                </li>
            </ul>
        </main>
    )
}
export default Testimonial