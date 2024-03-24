export default function Button(props){
    return(
        <section>
            <button className="bg-blue-500 text-white w-full rounded-md py-2" onClick={props.func}>{props.name}</button>
        </section>
    );
}