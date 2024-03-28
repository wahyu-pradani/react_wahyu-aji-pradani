import HeroImg from '../../../assets/Hero/hero-img.png'
import Button from 'react-bootstrap/Button';
import Navbar from '../../global/Navbar';
import Footer from '../../global/Footer';

export default function Home (){
    return (
        
        <main className="">
            <Navbar></Navbar>
            <section className="container mx-auto max-w-screen-xl grid items-center h-screen">
                <div className=" grid grid-cols-2 justify-between items-center">
                    <div className='grid gap-3'>
                        <div className='grid w-[643px] text-[64px] font-bold '>
                            <h1 className="text-[#10375C]">Welcome To Website</h1>
                            <span className='text-[#499BE9]'>LoanHomi</span>
                        </div>
                        <div className='grid gap-4'>
                            <p className='w-[580px] text-[22px] font-normal'>LoanHomi is a finance company that provides financing for the solar energy industry.</p>
                            <p className='text-[18px] font-light'>We specialize in helping homeowners finance quality solar systems.</p>
                        </div>
                        <div className='grid grid-cols-2 gap-3 w-fit'>
                            <Button variant="primary" className='rounded-full mt-7 py-3 px-6'>Get Started</Button>
                            <Button variant="secondary" className='rounded-full mt-7 py-3 px-6 opacity-50'>Learn More</Button>
                        </div>
                    </div>
                    <div className='w-fit flex justify-self-end'>
                        <img className='flex' width={513} height={214} src={HeroImg} alt="" />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}