import Company from './pages/Company';
import Header from './pages/Header';
import Production from './pages/Production';
import Service from './pages/Service';
import News from './pages/News';
import Partners from './pages/Partners';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Production />
      <Service />
      <Company />
      <News />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
