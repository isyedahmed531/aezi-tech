import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import Stats from './components/Statistics';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CaseStudy />
      <Testimonials />
      <Stats />
      <ContactBanner />
      <Footer />
    </div>
  );
}

export default App;
