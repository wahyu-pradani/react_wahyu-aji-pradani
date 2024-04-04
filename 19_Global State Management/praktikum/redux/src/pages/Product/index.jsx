import Article from "../../components/article";
import Navbar from "../../components/global/Navbar/navbar";
import FormCreateProduct from "./form-create-product";
import Footer from "../../components/global/Footer/Footer";

export default function CreateProduct(){
    return(
        <main>
            <Navbar></Navbar>
            <Article></Article>
            <FormCreateProduct></FormCreateProduct>
            <Footer></Footer>
        </main>
    );
}