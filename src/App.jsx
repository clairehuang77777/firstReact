import {Headers,NavbarMenu, ProgressControlAddress, ProgressControlShipping, SectionPayment,StepOne, StepProgress, StepTwo
} from '../src/components/index.js'
import { Cart } from './Cart.jsx';
import './App.scss'

export function App({currentStep, nextStep, prevStep, carts, setCarts}){
  return (
    <>
    <Headers />
    <div className="container">
      <StepProgress currentStep={currentStep} />
    
        {(currentStep === 1) &&(
          <>
            <StepOne />
            <Cart/>
            <ProgressControlAddress nextStep={nextStep} />
          </>
          )}

        {(currentStep === 2) && (
          <>
            <StepTwo />
            <Cart/>
            <ProgressControlShipping nextStep={nextStep} prevStep={prevStep}/>
          </>
        )}
        
        {(currentStep === 3) && (
          <>
            <SectionPayment prevStep={prevStep}/>
          </>
        )}
      </div>
  </>
  )
}