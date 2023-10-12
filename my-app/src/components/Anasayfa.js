import { Link } from 'react-router-dom';
import "./Anasayfa.css"
import img1 from "../Assets/mvp-banner.png"


function Anasayfa() {
    return (

        <div className='main'>

            <div className='header-content'>
                <h2>Teknolojik Yemekler</h2>
                <p className='acıktırır'>KOD ACIKTIRIR</p>
                <p className='doyurur'>PIZZA, DOYURUR</p>


                <Link to="/pizza">
                    <button id="order-pizza" >ACIKTIM</button>
                </Link>

            </div>



        </div >
    )
}

export default Anasayfa