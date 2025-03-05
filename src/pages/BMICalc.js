import { useState } from 'react';



export default function BMICalc() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("");

    let handleKeyDown = (event) => {
          console.log(height, weight)
          setResult(  ((weight/height*100)/height*100)  )
    }


    return(
         <>
         <h1> BMI Calculator </h1>
         <form>
            <label>Enter your height in cm:  <t></t> 
                <input
                type="text" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              
                />
            </label>
        </form>
        <form>
            <label>Enter your weight in kg: <t></t> 
                <input
                type="text" 
                value={weight}
                onChange={(d) => setWeight(d.target.value)}
                
                />
            </label>
        </form>
        <br></br>
        <div>
            <label>Result: <t></t></label>
            <span>{result}</span>
        </div>
         <div>
            <button onClick={handleKeyDown}> Compute BMI </button>
         </div>
{/* Display message based on BMI category */}
        {result !== "" && (
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {result < 18.5 && (
                    <span style={{ color: "blue" }}>You are underweight. Consider a balanced diet with more nutrients.</span>
                )}
                {result >= 18.5 && result < 24.9 && (
                    <span style={{ color: "green" }}>You have a normal weight. Keep up your healthy lifestyle!</span>
                )}
                {result >= 25 && result < 29.9 && (
                    <span style={{ color: "orange" }}>You are overweight. Regular exercise and a healthy diet can help.</span>
                )}
                {result >= 30 && (
                    <span style={{ color: "red" }}>You are obese. It's important to focus on a healthier lifestyle.</span>
                )}
            </p>
        )}
         </>
    )
} 



              