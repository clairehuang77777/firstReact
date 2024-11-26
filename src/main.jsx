import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { StepProgress, StepOne, StepTwo, StepThree, ProgressControlAddress, ProgressControlCreditCard, ProgressControlShipping } from './App.jsx'
import { Cart } from './Cart.jsx'
import './cart.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [currentStep, setCurrentStep] = useState(1) //追蹤目前步驟

  const nextStep = () => {
    if (currentStep < 3 ){
      setCurrentStep (currentStep + 1)
    }
  }

  const prevStep =() => {
    if (currentStep > 1 ) {
      setCurrentStep(currentStep - 1)
    }
  }

  return(
<>
  {(currentStep === 1) &&(
    <>
      <StepProgress currentStep={currentStep}/>
      <StepOne />
      <Cart />
      <ProgressControlAddress nextStep={nextStep} />
    </>
    )}

  {(currentStep === 2) && (
    <>
      <StepProgress currentStep={currentStep}/>
      <StepTwo />
      <Cart />
      <ProgressControlShipping nextStep={nextStep} prevStep={prevStep}/>
    </>
  )}
  
  {(currentStep === 3) && (
    <>
      <StepProgress currentStep={currentStep}/>
      <StepThree />
      <Cart />
      <ProgressControlCreditCard prevStep={prevStep}/>
    </>
  )}
</>
)
}


createRoot(document.getElementById('root')).render(<App />)
