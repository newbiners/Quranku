import iphone from "../assets/iPhone.png"
import Playstore from '../assets/playstore.png'
import Appstore from "../assets/appstore.png"

const Download = () => {
    return (
        <div className="h-80" style={{background: "#FEC72C",overflow: 'hidden'}}>
            <main className="flex justify-between mx-60">
                <section className="self-center max-w-xl ">
                    <h1 className="text-2xl font-semibold text-white mb-6">Download Our App New</h1>
                    <p className="text-white">"Have you ever struggled to get the products you want? Don't worry, with Hackbid, you can participate in the bidding process and win your dream products at an affordable price."</p>
                    <section className="mt-9">
                        <button>
                            <img src={Playstore} alt="playstore" className="h-12"/>
                        </button>
                        <button>
                            <img src={Appstore} alt="playstore" className="h-12"/>
                        </button>
                    </section>
                </section>
                <img src={iphone} alt="iphone" style={{height: "25rem" ,top: '-2rem',right: 0}}/>
            </main>
        </div>
    )
}
export default Download