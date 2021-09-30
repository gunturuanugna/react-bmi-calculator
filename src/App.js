import "./styles.css";
import React,{useState} from 'react';
export default function App() {
  const [height,setHeight]=useState(0);
  const [weight,setWeight]=useState(0);
  const [bmi,setBmi]=useState(0);
  const calculateBmi=(e)=>{
     e.preventDefault();
      var x=(weight/height)/height;
      setBmi(x.toFixed(2));
     reset()
  };
  const reset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
   
  };
  const getBmi=(bmi)=>{
    if(bmi==="") return "-";
    if(bmi < 18.5) {
        return "Underweight";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    }
    if(bmi >= 30) {
        return "Obesity";
    }
}
  return (
    <div className="App">
      <h1  style={{color:"blue"}}>BMI CALCULATOR</h1>
     <form >
       <p ><b>Height :</b></p>
       <input type="text" id="ht" onChange={(e)=>setHeight(e.target.value)} placeholder="Enter height in meters" />
       <p><b>Weight :</b></p>
       <input type="text" id="wt" onChange={(e)=>setWeight(e.target.value)} placeholder="Enter weight in kgs" />
        <br/><br/>
        <button type="submit" onClick={calculateBmi} style={{backgroundColor:"orange",color:"white"}}> Calculate BMI </button>
        <p>Height : {height ? height:"-"}</p>
        <p>Weight : {weight ? weight:"-"}</p>
       <p>BMI : {bmi ? bmi:"-"}</p>
       <p>Result: {bmi ? getBmi(bmi):"-"}</p>
    </form>
    </div>
  );
}
