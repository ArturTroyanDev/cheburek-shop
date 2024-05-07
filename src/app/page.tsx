import { Header } from "./components/Header/Header"
import { AboutUs } from "./components/AboutUs/AboutUs";


export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <AboutUs />
      </div>
    </div>

  );
}
