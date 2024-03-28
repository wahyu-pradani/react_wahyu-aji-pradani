import Logo from '../../../assets/LogoFooter.png'
import {Link} from 'react-router-dom'
import WhatsApp from '../../../assets/ic/Whatsapp1.svg'
import Instagram from '../../../assets/ic/Instagram.svg'
import Youtube from '../../../assets/ic/YouTube.svg'
import { PAGE_URL, socials } from '../../../helper/contanst'


export default function Footer(){
    return (
        <footer className="bg-[#1F2230]">
            <div className="container max-w-screen-xl mx-auto py-8">
                <div className=" grid grid-cols-3 justify-between gap-24">
                    <div className='grid gap-4'>
                        <div><img width={179} height={34} src={Logo} alt="" /></div>
                        <p className='text-white text-[14px]'>Our goal at LoanHomi company is to provide access to personal loans and education loan, 
                            car loan, home loan at insight competitive interest rates.</p>
                        <div className='grid grid-cols-3 justify-between text-white w-fit gap-4'>
                            <Link to={socials.youtube}><img width={24} src={Youtube} alt="" /></Link>
                            <Link to={socials.ig}><img width={24} src={Instagram} alt="" /></Link>
                            <Link to={socials.wa}><img width={24} src={WhatsApp} alt="" /></Link>
                        </div>
                    </div>
                    <div className='grid gap-3 justify-self-center h-fit'>
                        <h3 className='text-white text-[18px] font-semibold'>Useful Links</h3>
                        <ul className='grid gap-3 text-[14px] font-normal text-white'>
                            <li >
                                <Link to={PAGE_URL.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link to={PAGE_URL.ABOUT}>About</Link>
                            </li>
                            <li>
                                <Link to={PAGE_URL.SERVICE}>Service</Link>
                            </li>
                            <li>
                                <Link to={PAGE_URL.CONTACT}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='grid gap-3 align-top justify-self-center text-white h-fit'>
                        <h3 className=' text-[18px] font-semibold'>Address</h3>
                        <p className='grid text-[14px] font-normal text-white'>Email: hello@loanhomi.com</p>
                        <p className='grid text-[14px] font-normal text-white'>Call: +1 509-931-1663</p>
                        <p className='grid text-[14px] font-normal text-white'>Address: 992 Saint Street, 99354
                            <span className='pl-[60px]'>Richland, WA, US</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 bg-sky-900'>
                <p className='text-white text-[14px] font-bold py-2'>Copyright LoanHomi</p>
            </div>
        </footer>
    );
}