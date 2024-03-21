import Header from "../../components/header";
import Navbar from "../../components/navbar";
import FormCreateProduct from "./form-create-product";

export default function CreateProduct(){
    return(
        <main>
            <Navbar></Navbar>
            <Header></Header>
            <FormCreateProduct></FormCreateProduct>
        </main>
    );
}