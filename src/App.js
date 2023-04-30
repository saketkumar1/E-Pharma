import "./App.css";
import SupportList from "./Components/Support/SupportList";
import BigCardList from "./Components/BigCard/BigCardList";
import "./Components/Support/Support.css";
import "./Components/Card/Card.css";
import CardList from "./Components/Card/CardList";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


function App() {
  const products = [
    {
      img: "./assets/hand.png",
      head: "Secure payment",
      subhead: "All card accepted",
    },
    {
      img: "./assets/customer-service.png",
      head: "Online Support",
      subhead: "Technical 24/7",
    },
    {
      img: "./assets/truck.png",
      head: "Free shiping",
      subhead: "On all order",
    },
    {
      img: "./assets/discount.png",
      head: "Discount online",
      subhead: "weekend sale",
    },
  ];

  const BigCardData = [
    {
      img: "./assets/ProteinSupplementBanner.png",
      price: "Starting with 19$",
      subhead: "Your daily life protection",
      head: "Protein Supliment",
    },
    {
      img: "./assets/ImmunityBoostersBanner.png",
      price: "Starting with 14$",
      subhead: "GET UPTO 26%",
      head: "Immunity Boosters",
    },
  ];

  const CardData = [
    {
      img: "./assets/HumidifyingUnitforHome.jpg",
      price: "20$",
      title: "Humidifying unit for home",
    },
    {
      img: "./assets/EssentialOilsSet.jpg",
      price: "29$",
      title: "Essential unit set",
    },
    {
      img: "./assets/BloodPressureMonitor.jpg",
      price: "10$",
      title: "Blood Pressure Monitor",
    },
    {
      img: "./assets/NailsandHairComplex.jpg",
      price: "22$",
      title: "Nails and Hair Complex",
    },
  ];

  return (
    <>
      <div className="App">
        <>
          <Navbar />
          <Hero />
        </>
      </div>
      <div className="infogrid">
        <SupportList products={products} />
      </div>
      <div className="bigcardgrid">
        <BigCardList cardData={BigCardData} />
      </div>

    <h1 className="text-center mt-5" style={{fontWeight:'600'}}>New Arrivals</h1>
      <div className="card-grid">
        <CardList CardData={CardData} />
      </div>
    </>
  );
}

export default App;