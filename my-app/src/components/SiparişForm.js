
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./SiparişForm.css";
import Onay from "./Onay";







function SiparişForm() {
    const initialPizza = {
        name: "Position Absolute Acı Pizza",
        price: 85.5,
        tl: "₺",
        describe: "Front dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve diğer geleneksel malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir."

    }

    const history = useHistory()


    const [counter, setCounter] = useState(1)
    const [pizza, setPizza] = useState(initialPizza);

    const artir = () => {

        setCounter(counter + 1);
        setPizza((e) => ({
            ...pizza,
            "price": e.price + 85.5,
        }));
        console.log("Sipariş Adeti :", counter + 1)

    };

    const azalt = () => {
        setCounter(counter - 1);
        setPizza((e) => ({
            ...pizza,
            "price": e.price - 85.5,
        }))
        console.log("Sipariş Adeti :", counter - 1)
    };

    const [malzemeSecim, setMalzemeSecim] = useState([])
    const maxSecim = 10;
    const minSecim = 4;

    const handleSecimChange = (e) => {
        const malzemeSecimi = e.target.name;

        if (e.target.checked) {
            if (!malzemeSecim.includes(malzemeSecimi) && malzemeSecim.length < maxSecim) {

                setMalzemeSecim([...malzemeSecim, malzemeSecimi]);
            }
        } else {

            const updatedMalzemeSecim = malzemeSecim.filter((item) => item !== malzemeSecimi);
            setMalzemeSecim(updatedMalzemeSecim);
        }


    }
    useEffect(() => {
        console.log("Seçilen Malzemeler:", malzemeSecim);
    }, [malzemeSecim]);

    const totalPrice = () => {
        return malzemeSecim.length * 5 + pizza.price

    }



    const [boyut, setBoyut] = useState("");

    const handleBoyutSecim = (e) => {
        setBoyut(e.target.value)
        console.log("Seçtiğiniz boyut:", e.target.value)

    }

    const [hamurKalinligi, setHamurKalinligi] = useState("")
    const handleHamurKalinligi = (e) => {

        setHamurKalinligi(e.target.value);
        console.log("Seçilen hamur kalınlığı:", e.target.value)

    }


    const [not, setNot] = useState("")

    const handlesiparisNotChange = (e) => {
        setNot(e.target.value)
    }
    useEffect(() => {
        console.log("Siraiş Notunuz:", not)
    }, [not])


    return (
        <>

            <div className="header-container">
                <h1 className="title">Teknolojik Yemekler</h1>
                <div className="nav-links" >
                    <NavLink to="/" className="nav-link" >Anasayfa -</NavLink>
                    <NavLink to="/" className="nav-link "  >Seçenekler -</NavLink>
                    <NavLink to="/pizza" className="nav-link siparisolustur" >Sipariş Oluştur</NavLink>
                </div>
            </div>
            <div className="main-container">
                <div className="main-content">
                    <p className="pizza-name">{initialPizza.name}</p>
                    <div className="baslik">
                        <p className="fiyattl">{initialPizza.price + initialPizza.tl}</p>
                        <p className="imdb">(4.9)</p>
                        <p className="comments">(200)</p>

                    </div>
                    <p>{initialPizza.describe}</p>
                </div>







                <div className="boyut-hamur-container">

                    <div className="boyut-container">
                        <h3 className="boyut">Boyut Seç <span className="kirmizi-yildiz">*</span></h3>
                        <div className="radio-buttons">
                            <div>
                                <input type="radio" id="boyutsec-kucuk" name="boyutsec" value="kücük" checked={boyut === "kücük"} onChange={handleBoyutSecim} />
                                <label for="boyutsec-kucuk"><p className="kücük">Küçük</p></label>
                            </div>



                            <div>
                                <input type="radio" id="boyutsec-orta" name="boyutsec" value="orta" checked={boyut === "orta"} onChange={handleBoyutSecim} />
                                <label for="boyutsec-orta"><p>Orta</p></label>
                            </div>

                            <div>
                                <input type="radio" id="boyutsec-buyuk" name="boyutsec" value="büyük" checked={boyut === "büyük"} onChange={handleBoyutSecim} />
                                <label for="boyutsec-buyuk"><p>Büyük</p></label>
                            </div>

                        </div>

                    </div>
                    <div className="hamur-container">
                        <h3 className="hamur">Hamur Seç <span className="kirmizi-yildiz">*</span></h3>

                        <div className="kalinlik">
                            <select value={hamurKalinligi} onChange={handleHamurKalinligi}>
                                <option >Hamur kalınlığı seç</option>
                                <option value="ekstra ince"  >Ekstra ince</option>
                                <option value="ince" >İnce</option>
                                <option value="orta" >Orta</option>
                                <option value="kalın" >Kalın</option>
                                <option value="susam kenarlı"  >Susam kenarlı</option>

                            </select>
                        </div>

                    </div>

                </div >
                <div className="malzemeler">
                    <h3>Ek Malzemeler</h3>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </div>
                <div className="malzemelist">
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

                </div>


                <div className="sipariş-not">
                    <h3>Sipariş Notu</h3>
                    <div className="not-container">
                        <form id="pizza-form">
                            <input type="text" size="75" value={not} className="sipariş-form" placeholder='Siparişine eklemek istediğin bir not var mı?' onChange={handlesiparisNotChange} />

                        </form>
                    </div>


                </div>
                <p>{counter}</p>
                <button onClick={artir} >+</button>
                <button disabled={counter <= 1 ? true : false} onClick={azalt}>-</button>

                <div className="toplam-container">
                    <p>Sipariş Toplamı </p>
                    <p>Seçimler {malzemeSecim.length * 5} ₺</p>
                    <p>Toplam {totalPrice()}₺ </p>
                </div>
                <Link to="/onay" >

                    <button  >SİPARİŞ VER</button>
                </Link>
                <button type="button" onClick={() => history.goBack()}>
                    Go Back
                </button>


            </div >

        </>
    )

}



export default SiparişForm 