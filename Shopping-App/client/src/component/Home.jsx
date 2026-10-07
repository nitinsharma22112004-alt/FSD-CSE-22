import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => (
  <>
    <Header />
    <Navbar />
    <main className="home">
      <Outlet />
    </main>
    <footer className="footer">My Shopping App</footer>
  </>
);

export default Home;
