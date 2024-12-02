import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { StepProgress, StepOne, StepTwo, StepThree, ProgressControlAddress, ProgressControlCreditCard, ProgressControlShipping, Headers, NavbarMenu, SectionPayment, Thankyoupage } from './App.jsx'
import { Cart, Item } from './Cart.jsx'
import './cart.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './CartContext.js'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
  const [currentStep, setCurrentStep] = useState(1) //追蹤目前步驟
  const [carts, setCarts] = useState([
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
])

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
  <BrowserRouter>
  <Routes>
      <Route path="/" 
      element={<Home currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} carts={carts} setCarts={setCarts} />} />
      <Route path="/form_data_page" element={<Thankyoupage/>} />
    </Routes>
  </BrowserRouter>
</>
)
}


function Home({currentStep, nextStep, prevStep, carts, setCarts}){
  return (
    <CartContext.Provider value={{carts, setCarts}}>
      {(currentStep === 1) &&(
        <>
          <Headers />
          <StepProgress currentStep={currentStep}/>
          <StepOne />
          <Cart/>
          <ProgressControlAddress nextStep={nextStep} />
        </>
        )}

      {(currentStep === 2) && (
        <>
          <Headers />
          <StepProgress currentStep={currentStep}/>
          <StepTwo />
          <Cart/>
          <ProgressControlShipping nextStep={nextStep} prevStep={prevStep}/>
        </>
      )}
      
      {(currentStep === 3) && (
        <>
          <Headers />
          <StepProgress currentStep={currentStep}/>
          <SectionPayment prevStep={prevStep}/>
        </>
      )}
      </CartContext.Provider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
