import Cpp from "./Blogs/Cpp/Cpp";
import Javascript from "./Blogs/Javascript/Javascript";
import Python from "./Blogs/Python/Python";
import Card from "./components/Card";
import Header from "./components/Header";
// import Posts from "./components/Posts";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div class="flex flex-col min-h-screen">
        <div class="flex-1 bg-gray-200">
          <div className="m-8">
            {/* <Card /> */}
            {/* <Posts /> */}
            <Cpp/>
            {/* <Javascript/>
            <Python/> */}
          </div>
        </div>

        <div class="flex items-end bg-black text-white p-4">Footer</div>
      </div>
    </div>
  );
}
