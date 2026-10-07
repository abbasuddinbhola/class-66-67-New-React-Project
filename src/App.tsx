import Banner from "./layout/Banner";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductContainer from "./products/ProductContainer";
import {products} from "../data/products"
import {FoodProducts} from "../food/FoodProducts";


export default function App() {
  return (
    <div>
      <Header products={products} FoodProducts={FoodProducts}/>

      <main>
        <Banner />
        <ProductContainer products={products} FoodProducts={FoodProducts} />
       
      </main>

      <Footer />
    </div>
  );
}
