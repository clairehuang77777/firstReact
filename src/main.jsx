import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { StepProgress, StepOne, StepTwo, StepThree, ProgressControlAddress, ProgressControlCreditCard, ProgressControlShipping } from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [page, setPage] = useState(1)

  return(
<>
  {(page === 1) &&(
    <>
      <StepProgress />
      <StepOne />
      <ProgressControlAddress setPage={setPage} />
    </>
    )}

  {(page === 2) && (
    <>
      <StepProgress />
      <StepTwo />
      <ProgressControlShipping setPage={setPage}/>
    </>
  )}
  
  {(page === 3) && (
    <>
      <StepProgress />
      <StepThree />
      <ProgressControlCreditCard setPage={setPage}/>
    </>
  )}
</>
)
}


createRoot(document.getElementById('root')).render(<App />)
