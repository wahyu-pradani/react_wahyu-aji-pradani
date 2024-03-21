import {Link} from "react-router-dom";

export default function NavList (props, value){
    return(
        <main>
            <Link to={'/'} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 light:text-white md:light:text-white-500" aria-current="page">{props.NavTitle}</Link>
        </main>
    );
}