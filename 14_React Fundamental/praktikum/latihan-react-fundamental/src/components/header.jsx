import Imglogo from '../assets/Bootstrap_logo.png'

export default function Header(){
    return(
        <section className="container">
            <div className="grid grid-col gap-2 text-center mx-auto mt-5">
                <img className="mx-auto w-[72px] h-[57px]" src={Imglogo} alt="" /> 
                <h1 className="font-bold text-[31px] py-3">Create Product</h1>
                <p className="font-[300] mx-auto text-[20px] w-[921px]">Below is an example form built entirely with Bootstrap's form controls. 
                    Each required form group has a validation state that can be triggered by attempting 
                    to submit the form without completing it.</p>
            </div>
        </section>
    );
}