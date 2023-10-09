import { Link } from 'react-router-dom';
import "./Anasayfa.css"


function Anasayfa() {
    return (
        <div className='main'>

            <h2>Teknolojik Yemekler</h2>
            <p>KOD ACIKTIRIR</p>
            <p>PIZZA, DOYURUR</p>


            <Link to="/pizza">
                <button id="order-pizza" >ACIKTIM</button>
            </Link>

        </div >
    )
}

export default Anasayfa