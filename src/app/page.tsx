import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Card from './Components/Card';
import Banner1 from './Components/Banner1';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <div>
  <Navbar/>;
  <Banner/>;
  <Card/>;
  <Banner1/>;
  <Footer/>;
  </div>

  
  );
}