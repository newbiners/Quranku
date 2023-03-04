import Header from "../header";
import Hero from "../hero";
import About from "../about";
import Testimonial from "../testimonial";
import Download from "../dowload";
import './index.css'


const Router= () => {
    return(
        <div className="Blur">
            <div className="posisi">
                <div>
                    <Header/>
                        <Hero/>
                    <div id="about">
                        <About/>
                    </div>
                    <div id="testmonial">
                        <Testimonial/>
                    </div>
                    <div id="download">
                        <Download/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Router