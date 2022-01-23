import './App.css';
import HighlivCarousel from './components/HighlivCarousel/HighlivCarousel';

function App() {
  const slides = [
    {
      city: "Eyelashes",
      country: "Stunning",
      img:
        "https://cdn.shopify.com/s/files/1/0047/0941/6995/files/shutterstock_1445102159_1_f63dc842-52c2-474e-b9e1-8642cc5455b3.jpg?v=1586451349"
    },
    {
      city: "Holistic Therapy",
      country: "In the Cotswolds",
      img:
        "https://cdn.shopify.com/s/files/1/0047/0941/6995/files/dfeb6b6c-9e0f-4f25-adf8-e69ca8dba0df.jpg?v=1581089712"
    },
    {
      city: "Facial - Beuaty",
      country: "No-thirtysix",
      img:
        "https://cdn.shopify.com/s/files/1/0047/0941/6995/files/shutterstock_1028333365.jpg?v=1586451213"
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img:
        "https://cdn.shopify.com/s/files/1/0047/0941/6995/files/shutterstock_648860656.jpg?v=1586451084"
    },
    {
      city: "Moscow",
      country: "Russia",
      img:
        "https://cdn.shopify.com/s/files/1/0047/0941/6995/files/shutterstock_372828910.jpg?v=1585905661"
    }
  ];
  
  return (
    <div className="App">
      <HighlivCarousel slides={slides} />
    </div>
  );
}

export default App;

