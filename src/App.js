import Cpp from "./Blogs/Cpp/Cpp";
import Javascript from "./Blogs/Javascript/Javascript";
import Python from "./Blogs/Python/Python";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
// {/* <div class="flex flex-col min-h-screen">
//         <div class="flex-1 bg-gray-200">
//           <div className="m-8">
//             {/* <Card /> */}
//             {/* <Posts /> */}
//             {/* <Cpp/> */}
//             {/* <Javascript/>
//             <Python/> */}
//             </div>
//             </div>
//           </div> */}

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
