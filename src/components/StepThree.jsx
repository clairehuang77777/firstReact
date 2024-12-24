import { useContext, useState } from 'react'
import { formDataContext } from '../formDataContext'

export function StepThree(){
  const context = useContext(formDataContext)
  console.log(context)
  const {formData, setFormData} = context

  function handleChange(e){
    setFormData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value,
      })
    )
  }

  return (
    <>
    <form className="col col-12" data-phase="credit-card" action="/form_data_page">
              <h3 className="form-title">付款資訊</h3>
              <section className="form-body col col-12">
                <div className="col col-12">
                  <div className="input-group input-w-lg-4 input-w-sm-full">
                    <label className="input-label" htmlFor="cardHolderName">持卡人姓名</label>
                    <input 
                      id="cardHolderName"
                      type="text" 
                      placeholder="John Doe" 
                      name="cardHolderName"
                      onChange={handleChange}
                      />
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group input-w-lg-4 input-w-sm-full">
                    <label className="input-label" htmlFor="cardNumber">卡號</label>
                    <input 
                      id="cardNumber"
                      type="text" 
                      placeholder="1111 2222 3333 4444" 
                      name="cardNumber"
                      onChange={handleChange}
                      />
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group input-w-lg-3 input-w-sm-s3">
                    <label className="input-label" htmlFor="expiredDate">有效期限</label>
                    <input 
                      id="expiredDate"
                      type="text" 
                      placeholder="MM/YY" 
                      name="expiredDate" 
                      onChange={handleChange}
                      />
                  </div>
                  <div className="input-group input-w-lg-3 input-w-sm-s3">
                    <label className="input-label" htmlFor="CVC">CVC / CCV</label>
                    <input 
                      id="CVC"
                      type="text" 
                      placeholder="123" 
                      name="CVC"
                      onChange={handleChange}
                      />
                  </div>
                </div>
              </section>
            </form>
    </>
  )
}