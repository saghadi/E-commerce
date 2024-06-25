import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import TodaySection from './components/TodaySection';
import Categories from './components/Categories';
import Selling from './components/Selling';
import Enhance from './components/Enhance';
import Explore from './components/Explore';
import Arrival from './components/Arrival';
import Delivery from './components/Delivery';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <TodaySection />
      <Categories />
      <Selling />
      <Enhance />
      <Explore />
      <Arrival />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;
