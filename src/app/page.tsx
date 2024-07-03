import styles from "./page.module.scss";
// import { Header } from "../components/Header/Header";
import "./globals.scss";

import { TypeProvider } from '../context/ContextValue';
import { ProductCard } from "../components/ProductCard/ProductCard";
import { CardList } from "../components/CardList/CardList";
// import { Sidebar } from "../components/Sidebar/Sidebar";
import { getStaticProps } from "../components/utils/dataReceiver/productData";
import { useContextValue } from "../context/ContextValue";
import { DynamicPlaceholderBlur } from "@/components/DynamicPlaceholderBlur/DynamicPlaceholderBlur";
import { Sidebar } from "@/components/Sidebar/Sidebar";

// import Sceleton from "./loading";
// import Sceleton from "./loading";

// type Props = {
//   obj: any
//   attributes: any,
//   id: number;
// }

// 1. finish the layout and disable the navbar`s showing logic if computers screen 
// 3. disable vertical scroll


export default async function Home() {
  const data = await getStaticProps();

  // console.log("http://localhost:1337" + data[0].attributes.image.data[0].attributes.url)

  return (
    <div className="wrapper">
      <Sidebar />

      <CardList>
        {
          data.map((obj: any) => <ProductCard key={obj.id} child={<DynamicPlaceholderBlur src={"http://localhost:1337" + obj.attributes.image.data[0].attributes.url} width={300} height={240} styles={styles.image} alt={obj.attributes.title} />} image={"http://localhost:1337" + obj.attributes.image.data[0].attributes.url} title={obj.attributes.title} price={obj.attributes.price} />)
        }
      </CardList>
    </div>
  );
}



// fallback={<Sceleton />}
// const [items, setItems] = React.useState<props[]>([]);
// // const [isLoading, setIsLoading] = React.useState<any>(true);


// React.useEffect(() => {
//   fetch('http://localhost:1337/api/chebureks?populate=*')
//     .then((response) => response.json())
//     .then((arr) => { setItems(arr.data) })
//     // .then((() => setIsLoading(false)))
// }, []);




// const imgUrls = [
//   "http://localhost:1337/uploads/cheburek1_300x240px_742fd965a3.jpg",
//   "http://localhost:1337/uploads/cheburek3_300x240px_9a4937f2ac.jpg"

// ]