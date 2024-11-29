import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { StepProgress, StepOne, StepTwo, StepThree, ProgressControlAddress, ProgressControlCreditCard, ProgressControlShipping, Headers, NavbarMenu } from './App.jsx'
import { Cart, Item } from './Cart.jsx'
import './cart.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const carts = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 1,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

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
      <Headers />
      <StepProgress currentStep={currentStep}/>
      <StepOne />
      <Cart carts={carts}/>
      <ProgressControlAddress nextStep={nextStep} />
    </>
    )}

  {(currentStep === 2) && (
    <>
      <Headers />
      <StepProgress currentStep={currentStep}/>
      <StepTwo />
      <Cart carts={carts}/>
      <ProgressControlShipping nextStep={nextStep} prevStep={prevStep}/>
    </>
  )}
  
  {(currentStep === 3) && (
    <>
      <Headers />
      <StepProgress currentStep={currentStep}/>
      <StepThree />
      <Cart carts={carts}/>
      <ProgressControlCreditCard prevStep={prevStep}/>
    </>
  )}
</>
)
}


createRoot(document.getElementById('root')).render(<App />)
