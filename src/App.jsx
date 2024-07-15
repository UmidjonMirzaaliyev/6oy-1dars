import "./App.css";
import Logo from "./assets/images/Logo.png";
import Language from "./assets/images/language.svg";
import Location from "./assets/images/location.png";
import Cart from "./assets/images/Cart.png";
import Person from "./assets/images/person.png";
import rightSection from "./assets/images/right-section.svg";
import Axon from "./assets/images/company/axon.png"
import Expedia from "./assets/images/company/expedia.png"
import Jetstar from "./assets/images/company/jetstar.png"
import Qantas from "./assets/images/company/qantas.png"
import Alitalia from "./assets/images/company/alitalia.png"
import Nature1 from "./assets/images/nature/nature 1.jpg"
import Nature2 from "./assets/images/nature/nature 2.jpg"
import Nature3 from "./assets/images/nature/nature 3.jpg"
import Nature4 from "./assets/images/nature/nature 4.jpg"

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <img src={Logo} width="200px" alt="" />
          <input placeholder="Cari apapun disini..." type="text" />
          <div className="lang">
            <img src={Language} alt="" />
            <p>Bahasa Indonesia</p>
          </div>
          <div className="loc">
            <img src={Location} alt="" />
            <p>Indonesia, Yogyakarta</p>
          </div>
        </div>

        <div className="list-container">
          <div className="list">
            <p>Gunung</p>
            <p>Pantai</p>
            <p>Kuliner</p>
            <p>Outbond</p>
            <p>Sejarah</p>
            <p>Edukasi</p>
            <p>Romantis</p>
            <p>Alam</p>
          </div>
          <div className="list-img">
            <img src={Cart} alt="" />
            <img src={Person} alt="" />
          </div>
        </div>
      </header>

      <main>
        <div className="container main-card">
          <div className="left-section">
            <h1 className="section-title">
              Liburan & nikmati <span className="blue-text">tempat baru</span>
              di indonesia ️🏝
            </h1>
            <p className="section-text">
              Destinize membuat kamu selalu update terkait tempat liburan baru
              di Indonesia dengan mengikuti perkembangan para influencer di
              sosial media ✨
            </p>
            <div className="section-btn">
              <button>Mulai sekarang →</button>
              <p>Putar Demo</p>
            </div>
          </div>
          <div className="right-section">
            <img src={rightSection} alt="" />
          </div>
        </div>

        <div className="container company-logos">
          <img className="img img-1" src={Axon} alt="" />
          <img className="img img-2" src={Jetstar} alt="" />
          <img className="img img-3" src={Expedia} alt="" />
          <img className="img img-4" src={Qantas} alt="" />
          <img className="img img-5" src={Alitalia} alt="" />
        </div>

        <div className="container nature">
          <h4 className="nature-text blue-text">DESTINASI FAVORIT</h4>
          <h2 className="nature-title">✈ • Temukan Destinasi Favoritmu</h2>
          <div className="nature-images">
            <img src={Nature1} alt="" />
            <img src={Nature2} alt="" />
            <img src={Nature3} alt="" />
            <img src={Nature4} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
