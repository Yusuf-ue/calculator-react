import { useState } from 'react';



export default function BMICalc() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("");

    let handleKeyDown = (event) => {
          console.log(height, weight)
          setResult(  ((weight/height)/height)  )
    }


    return(
         <>
         <h1> BMI Calculator </h1>
         <form>
            <label>Enter your height in meter: 
                <input
                type="text" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              
                />
            </label>
        </form>
        <form>
            <label>Enter your weight in kg:
                <input
                type="text" 
                value={weight}
                onChange={(d) => setWeight(d.target.value)}
                
                />
            </label>
        </form>
        <label>Result:
                <input
                type="text"
                value={result}
                onKeyDown={handleKeyDown} />
         </label>
         <div>
            <button onClick={handleKeyDown}> Compute BMI </button>
         </div>

         </>
         )
} 



              