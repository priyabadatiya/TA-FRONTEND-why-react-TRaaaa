import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Blog from "./Blog";
import Work from "./Work";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
    return (
      <>
        <Header />
        <main>
            <Hero />
            <About />
            <Blog />
            <Work />
            <Contacts />   
        </main>
        <Footer />
      </>         
    )
}

export default App;
