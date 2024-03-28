import Logo from '../../../assets/LogoLoan.svg'
import {Link} from "react-router-dom";
import { PAGE_URL } from '../../../helper/contanst';

export default function Navbar (){
    return (
        <nav className='py-8'>
            <div className="container mx-auto max-w-screen-xl">
                <div className='grid grid-cols-2 justify-between'>
                    <div><img src={Logo} alt="" /></div>
                    <div className='justify-self-end'>
                        <ul className='flex gap-5 justify-between text-[16px] font-medium'>
                            <li className='text-[#499BE9]'>
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
                </div>
            </div>
        </nav>
    );
}