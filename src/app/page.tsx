import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Button } from "./components/Button/Button";


export default function Home() {
  return (
    <div className="wrapper">
        <Header />
      <div className="container">
        <AboutUs />
        <Button />
        <Button />
        <Button />
      </div>
    </div>

  );
}
