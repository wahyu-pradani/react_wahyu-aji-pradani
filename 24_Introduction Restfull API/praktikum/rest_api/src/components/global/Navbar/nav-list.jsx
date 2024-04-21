import {Link} from "react-router-dom";

export default function NavList (props, value){
    return(
        <main>
            <Link to={'/home'} className="block rounded font-medium" aria-current="page">{props.NavTitle}</Link>
        </main>
    );
}