

import Banner from "./layout/Banner";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductSection from "./sections/ProductSection";
import Ratting from "./share/Ratting";

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main className="flex-1">
        <ProductSection />
      </main>
      <Footer />

      <Ratting />


    </div>
  )
}











































  // const test = "This is test";

  // const url = "https://picsum.photos/200/300"

  // console.log(users);

  // const age = 5;


   // <div className="text-red-500">
    //   <span>{test}</span>

    //   <Header test="this is test" title="this is title from app component" />

    //   <Footer />

    //   {
    //     age >= 10 ? <p>Sakib</p> : <p>Fardin</p>
    // }

    //   <img width="300" src={url} alt="" />

    //   <div>
    //     <h2>Our User List</h2>

    //     {users.map((user, index) => {
    //       return (
    //         <li key={index}>{user.name}</li>
    //       )
    //     })}

    //     <ul>
         
    //     </ul>
    //   </div>

    // </div>


// {/* <div className="" />

// <label htmlFor=""></label>

// <div dataID ></div> */}