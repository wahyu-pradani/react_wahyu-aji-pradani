import ImgAbout from '../../../assets/ImgAbout.png'
import Footer from '../../global/Footer';
import Navbar from '../../global/Navbar';

export default function About (){
    return (
        <main>
            <Navbar></Navbar>
            <section className="container max-w-screen-xl h-screen grid mx-auto items-center">
                <div className='grid grid-cols-2 justify-between items-center'>
                    <div>
                        <img width={400} height={500} src={ImgAbout} alt="" />
                    </div>
                    <div className=" grid gap-4">
                        <div className="font-bold text-[64px]">
                            <h1 className=" text-[#10375C]">About <span className="text-[#499BE9]">LoanHomi</span></h1>
                        </div>
                        <div className="grid gap-3 w-[500px] text-[18px] text-justify">
                            <p>LoanHomi has a variety of loans to make sure we pick the best financing for your scenario.</p>
                            <p>We partner with sustainable home improvement professionals across the country to make 
                                sustainable home upgrades simple, with flexible payment options that fit any budget.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita itaque dolorum cum, 
                                ex saepe perferendis excepturi doloremque nam fuga modi adipisci facere quos animi veritatis eligendi. 
                                Rem, eum itaque.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}