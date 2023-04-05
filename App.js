import'./App.css';
// import Greeting from './components/Greeting';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import HomePage from "./Pages/Home"
import AboutPage from "./Pages/About"
import ContactPage from "./Pages/Contact"
import BlogPage from "./Pages/Blog"
import {Routes,Route} from "react-router-dom"



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element ={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Blog" element={<BlogPage />} />
    </Routes>
    </>

  );
}
export default App;

