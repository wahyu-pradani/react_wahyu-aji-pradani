import Article from "./article";
import Navbar from "../../components/global/Navbar/navbar";
import Footer from "../../components/global/Footer/Footer";
import Hero from "./hero-section";

export default function Home(){
    return(
        <main>
            <Navbar></Navbar>
            <Hero></Hero>
            <Article></Article>
            <Footer></Footer>
        </main>
    );
}