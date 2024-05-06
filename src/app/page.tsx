import { Header } from "./components/Header/Header.tsx";
import { AboutUs } from "./components/AboutUs/AboutUs.tsx";


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
