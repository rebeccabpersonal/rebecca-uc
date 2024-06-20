import "./App.css";
import Nav from "./components/Nav.tsx";
import Categories from "./components/Categories.tsx";
import Products from "./components/Products.tsx";
import Hero from "./components/Hero.tsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="hidden md:flex p-5">
        <Categories />
        <Products />
      </div>
    </>
  );
}

export default App;
