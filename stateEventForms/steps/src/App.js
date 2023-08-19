import { useState } from 'react';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App(){
  return (
    <div>
      <Steps/>
      {/* <Steps/> */}
      <StepMessage step={1}>
        <p>Pass in Content</p>
        <p>❗️</p>
         </StepMessage>
      <StepMessage step={2}>
        <p>Read Children Prop</p>
        <p>😀</p>
         </StepMessage>
    </div>
  )
}

 function Steps(){
  const [step,setStep]= useState(1)
  const [test,setTest]=useState({name:'Tuan Anh'})
  // console.log(arr)
  const [isOpen,setIsOpen]=useState(true)


  function handlePrevious (){
    if(step>1)
    setStep((s)=>s-1)
    setTest({name:'Tuan Anh'})
  }
  function handleNext (){
     if(step<3){
      //  setStep((s)=>s+1)
       setStep((s)=>s+1)
      }
     setTest({name:'Phuong Anh'})

  }


  return(
  <div>
    <button className='close' onClick={()=>setIsOpen((is)=>!is)}>&times;</button>
   {isOpen &&(
   <div className="steps">
    <div className="numbers">
      <div className={step>=1 ? "active":'' }>1</div>
      <div className={step>=2 ? "active":'' }>2</div>
      <div className={step>=3 ? "active":'' }>3</div>
      </div>
         <StepMessage step={step}>
         {messages[step-1]}
         <div className='buttons'>
         <Button bgColor='#e7e7e7' textColor='#333' onClick={()=>alert(`Learn how to ${messages[step-1]}`)}>Learn how 
         </Button>
         </div>
         </StepMessage>
      <div className="buttons">
        <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}> <span>🐶</span> Previous </Button>
        <Button bgColor= '#7950f2' textColor= '#fff' onClick={handleNext} > <span>⛑️</span> Next </Button>
          {/* <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={handleNext}>Next</button> */}

      </div>
      </div>
   
   )}

    </div>
    )

  }
  function StepMessage({step,children}){
    return <div className="message">
    <h3>Step{step}</h3>
    {children} 
    </div>
  }
  function Button({textColor,bgColor,onClick,children}){
    return <button>
          <button style={{backgroundColor:bgColor,color:textColor}} onClick={onClick}>{children} </button>

    </button>
  }
