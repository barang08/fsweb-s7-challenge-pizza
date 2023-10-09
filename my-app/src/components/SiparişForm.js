import { useState } from "react"
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Onay from "./Onay";
/* import { useHistory } from "react-router-dom"; */
import "./SiparişForm.css"

function SiparişForm() {
    /* const history = useHistory() */
    const initialPizza = {
        name: "Position Absolute Acı Pizza",
        price: 85.5,
        tl: "₺",
        describe: "Front dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve diğer geleneksel malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir."

    }

    const [counter, setCounter] = useState(1)
    const [pizza, setPizza] = useState(initialPizza);

    const artir = () => {

        setCounter(counter + 1);
        setPizza((e) => ({
            ...pizza,
            "price": e.price + 85.5,
        }));


    };

    const azalt = () => {
        setCounter(counter - 1);
        setPizza((e) => ({
            ...pizza,
            "price": e.price - 85.5,
        }))

    };








    const [malzemeSecim, setMalzemeSecim] = useState([])
    const maxSecim = 10;
    const minSecim = 4;

    const handleSecimChange = (e) => {
        const malzemeSecimi = e.target.name;
        console.log(malzemeSecimi)

        if (e.target.checked) {
            if (malzemeSecim.length <= maxSecim) {
                setMalzemeSecim([...malzemeSecim, malzemeSecimi])
            } else {
                console.log(`En fazla ${maxSecim} adet malzeme seçebilirsiniz.`);
                e.target.checked = false
            }
        }
    }
    const totalPrice = () => {
        return malzemeSecim.length * 5 + pizza.price
    }

    const [not, setNot] = useState("")

    const handlesiparisNotChange = (e) => {
        setNot(e.target.value)
    }





    return (
        <>
            <div className="header-container">
                <h1 className="title">Teknolojik Yemekler</h1>
                <div className="nav-links">
                    <NavLink to="/">Anasayfa -</NavLink>
                    <NavLink to="/">Seçenekler -</NavLink>
                    <NavLink to="/pizza">Sipariş Oluştur</NavLink>
                </div>
            </div>
            <div className="main-container">
                <h3 className="pizza-name">{initialPizza.name}</h3>
                <p>{initialPizza.price + initialPizza.tl}</p>
                <p>{initialPizza.describe}</p>




                <div className="boyut-hamur container">
                    <h3>Boyut Seç *</h3>
                    <div className="">
                        <input type="radio" id="boyutsec-kucuk" name="boyutsec" value="kücük" />
                        <label for="contactChoice1">Küçük</label>

                        <input type="radio" id="boyutsec-orta" name="boyutsec" value="orta" />
                        <label for="contactChoice2">Orta</label>

                        <input type="radio" id="boyutsec-buyuk" name="boyutsec" value="büyük" />
                        <label >Büyük</label>
                    </div>

                    <h3>Hamur Seç *</h3>
                    <select>
                        <option>Hamur kalınlığı seç</option>
                        <option>Ekstra ince</option>
                        <option>İnce</option>
                        <option>Orta</option>
                        <option>Kalın</option>
                        <option>Susam kenarlı</option>

                    </select>
                </div>


                <h3>Ek Malzemeler</h3>
                <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                <div>
                    <input type="checkbox" id="pepperoni" name="pepperoni" onChange={handleSecimChange} />
                    <label for="pepperoni">Pepperoni</label>
                </div>

                <div>
                    <input type="checkbox" id="sosis" name="sosis" onChange={handleSecimChange} />
                    <label for="sosis">Sosis</label>
                </div>
                <div>
                    <input type="checkbox" id="kanadajambonu" name="kanadajambonu" onChange={handleSecimChange} />
                    <label for="kanadajambonu">Kanada Jambonu</label>
                </div>
                <div>
                    <input type="checkbox" id="tavukızgara" name="tavukızgara" onChange={handleSecimChange} />
                    <label for="tavukızgara">Tavuk Izgara</label>
                </div>
                <div>
                    <input type="checkbox" id="sogan" name="sogan" onChange={handleSecimChange} />
                    <label for="sogan">Soğan</label>
                </div>
                <div>
                    <input type="checkbox" id="domates" name="domates" onChange={handleSecimChange} />
                    <label for="domates">Domates</label>
                </div>
                <div>
                    <input type="checkbox" id="mısır" name="mısır" onChange={handleSecimChange} />
                    <label for="mısır">Mısır</label>
                </div>
                <div>
                    <input type="checkbox" id="sucuk" name="sucuk" onChange={handleSecimChange} />
                    <label for="sucuk">Sucuk</label>
                </div>
                <div>
                    <input type="checkbox" id="jalepeno" name="jalepeno" onChange={handleSecimChange} />
                    <label for="jalepeno">Jalepeno</label>
                </div>
                <div>
                    <input type="checkbox" id="sarımsak" name="sarımsak" onChange={handleSecimChange} />
                    <label for="sarımsak">Sarımsak</label>
                </div>
                <div>
                    <input type="checkbox" id="biber" name="biber" onChange={handleSecimChange} />
                    <label for="biber">Biber</label>
                </div>
                <div>
                    <input type="checkbox" id="sucuk" name="sucuk" onChange={handleSecimChange} />
                    <label for="sucuk">Sucuk</label>
                </div>
                <div>
                    <input type="checkbox" id="ananas" name="ananas" onChange={handleSecimChange} />
                    <label for="ananas">Ananas</label>
                </div>
                <div>
                    <input type="checkbox" id="kabak" name="kabak" onChange={handleSecimChange} />
                    <label for="kabak">Kabak</label>
                </div>
                <div className="sipariş-not">
                    <h3>Sipariş Notu</h3>
                    <form id="pizza-form">
                        <input type="text" className="sipariş-form" placeholder='Siparişine eklemek istediğin bir not var mı?' />

                    </form>

                </div>

                <p>{counter}</p>
                <button onClick={artir} >+</button>
                <button disabled={counter <= 1 ? true : false} onClick={azalt}>-</button>

                <div className="toplam-container">
                    <p>Sipariş Toplamı </p>
                    <p>Seçimler {malzemeSecim.length * 5} ₺</p>
                    <p>Toplam {totalPrice()}₺ </p>
                </div>
                <Link to="/onay">
                    <button  >SİPARİŞ VER</button>
                </Link>
                {/*  <button type="button" onClick={() => history.goBack()}>
                Go Back
            </button>
 */}

            </div>

        </>
    )
}

export default SiparişForm