import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './cart.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './base.scss'
import './form.scss'
import './header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {App} from './App'
import { Thankyoupage } from './components';
import { CartContext } from './CartContext';

export function Main(){
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
    <CartContext.Provider value={{carts, setCarts}}>
    <Routes>
        <Route path="/" element={
          <App currentStep={currentStep} 
          nextStep={nextStep} 
          prevStep={prevStep} 
          carts={carts} 
          setCarts={setCarts} />} />
        <Route path="/form_data_page" element={<Thankyoupage/>} />
      </Routes>
    </CartContext.Provider>
    </BrowserRouter>
  </>
)
}


createRoot(document.getElementById('root')).render(<Main />)
