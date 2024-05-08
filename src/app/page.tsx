import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Button } from "./components/Button/Button";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";


export default function Home() {
  return (
    <div className="wrapper">
        <Header />
      <div className="container">
        <AboutUs />
        <ShoppingCart />
        <Button />
      </div>
    </div>

  );
}
