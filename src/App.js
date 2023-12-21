import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div class="flex flex-col min-h-screen">
        <div class="flex-1 bg-gray-200">
          <div className="m-8">
            <Card />
          </div>
        </div>

        <div class="flex items-end bg-black text-white p-4">Footer</div>
      </div>
    </div>
  );
}
