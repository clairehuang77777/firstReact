import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formDataContext } from "../formDataContext";
import { StepThree, ProgressControlCreditCard } from "./index";
import { Cart } from "../Cart";

export function SectionPayment({prevStep}){
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  function handleSubmit(e){
    if (e) e.preventDefault();
    console.log("handleSubmit triggered!")
    const form = document.createElement("form");
    console.log(formData);
    navigate("/form_data_page")
    ;

    
    Object.entries(formData).forEach(([key, value])=>{
      const input = document.createElement("input");
      input.type="hidden";
      input.name=key;
      input.value=value;
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)

  }

  //建立一個暫時的表單讓瀏覽器可以提交,並在提交後刪除
  return(
    <formDataContext.Provider value={{formData, setFormData}}>
      <StepThree />
      <Cart/>
      <ProgressControlCreditCard prevStep={prevStep} handleSubmit={handleSubmit}/>
    </formDataContext.Provider>
  )
}