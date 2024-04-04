import Imglogo from '../assets/Bootstrap_logo.png'

export default function Article (){
    const DataArticle = 
        {
            title:
                {
                id: "Buat Akun",
                en: "Create Account"
                },

            description:
                {
                id: `Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. 
                Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba 
                mengirimkan formulir tanpa menyelesaikannya.`,
                en: `Below is an example form built entirely with Bootstrap’s form controls. 
                Each required form group has a validation state that can be triggered by attempting to 
                submit the form without completing it.`
                }
            
        }
    
    
    return(
        <section className="container">
            <div className="grid grid-col gap-2 text-center mx-auto mt-16">
                <img className="mx-auto w-[72px] h-[57px]" src={Imglogo} alt="" /> 
                <h1 className="font-bold text-[31px] py-3">{DataArticle.title.en}</h1>
                <p className="font-[300] mx-auto text-[20px] w-[921px]">{DataArticle.description.en}</p>
            </div>
        </section>
    );
}