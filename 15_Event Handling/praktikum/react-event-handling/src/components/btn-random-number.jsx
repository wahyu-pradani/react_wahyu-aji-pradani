
import { useState } from 'react'
export default function BtnRandomNumber(props){
    const [number, setNumber] = useState(null);
  

    function btnRandomNumber (){
      const RandomNumber = Math.floor(Math.random()* 100);
      console.log('Random Number is ', RandomNumber);
      setNumber({number: RandomNumber})
  
    };
  
    return(
        <section>
            <button className="bg-blue-500 text-white w-full rounded-md py-2" onClick={btnRandomNumber}>{props.name}</button>
        </section>
    );
}