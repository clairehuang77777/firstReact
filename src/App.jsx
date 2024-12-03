import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './base.scss'
import './form.scss'
import './header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react'
import { Cart } from './Cart'
import { useNavigate } from "react-router-dom";
import React from 'react'


export function Headers(){
  return (
    <>
    <header className="site-header">
      <div className="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlfor="navbar-toggle" className="burger-container">
          <img src="/icons/toggle.svg" alt="Toggle icon" className="toggleIcon" />
        </label>
        <NavbarMenu />
        <a className="header-logo-container" href="#">
          <img src="/icons/logo.svg" alt="logo icon" className="logoIcon" />
        </a>
      </div>
    </header>
    </>
)}

export function NavbarMenu(){
  return(
    <>
    <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">男款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">女款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">最新消息</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">客製商品</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
      </nav>
    </>
  )
}

export function StepProgress({ currentStep }) {
  const steps = [
    { phase: 'address', label: '寄送地址' },
    { phase: 'shipping', label: '運送方式' },
    { phase: 'credit-card', label: '付款資訊' },
  ];

  return (
    <>
      <h2 className="register-title col col-6">結帳</h2>
      <section className="progress-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.phase}> 
          <div className='progress-wrapper'>
          <div
            className={`progress-group ${
              index + 1 < currentStep
                ? 'done'
                : index + 1 === currentStep
                ? 'current'
                : 'undone'
            }`}
            data-phase={step.phase}
          >
            <div className={`progress-icon ${index + 1 < currentStep ? 'done' : ''}`}>
              {index + 1 < currentStep ? (
                <span className="checkmark">&#10003;</span> // 已完成顯示打勾
              ) : (
                <span className="text">{index + 1}</span> // 未完成或當前步驟顯示數字
              )}
            </div>
            <span className="progress-label">{step.label}</span>
          </div>
          </div>
          {index < steps.length -1 &&(<span className="progress-bar" data-order="1"></span>)}
      </React.Fragment>
    ))}
      </section>
    </>
  );
}


export function StepOne(){
  return (
  <>
    <section className="form-container col col-12">
      <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
          <section className="form-body col col-12">
                <div className="col col-12">
                  <div className="input-group input-w-lg-2 input-w-sm-s1">
                    <div className="input-label">稱謂</div>
                    <div className="select-container">
                      <select defaultValue="mr">
                        <option value="mr">先生</option>
                        <option value="ms">女士</option>
                        <option value="mx">不明</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group input-w-lg-4 input-w-sm-s2">
                    <div className="input-label">姓名</div>
                    <input type="text" placeholder="請輸入姓名" />
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group input-w-lg-3 input-w-sm-full">
                    <div className="input-label">電話</div>
                    <input type="tel" placeholder="請輸入行動電話" />
                  </div>
                  <div className="input-group input-w-lg-3 input-w-sm-full">
                    <div className="input-label">Email</div>
                    <input type="email" placeholder="請輸入電子郵件" />
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group input-w-lg-2 input-w-sm-full">
                    <div className="input-label">縣市</div>
                    <div className="select-container">
                      <select required>
                        <option value="">請選擇縣市</option>
                        <option value="KLU">基隆市</option>
                        <option value="TPH">新北市</option>
                        <option value="TPE">臺北市</option>
                        <option value="TYC">桃園市</option>
                        <option value="HSH">新竹縣</option>
                        <option value="HSC">新竹市</option>
                        <option value="MAC">苗栗市</option>
                        <option value="MAL">苗栗縣</option>
                        <option value="TXG">臺中市</option>
                        <option value="CWH">彰化縣</option>
                        <option value="CWS">彰化市</option>
                        <option value="NTC">南投市</option>
                        <option value="NTO">南投縣</option>
                        <option value="YLH">雲林縣</option>
                        <option value="CHY">嘉義縣</option>
                        <option value="CYI">嘉義市</option>
                        <option value="TNN">臺南市</option>
                        <option value="KHH">高雄市</option>
                        <option value="IUH">屏東縣</option>
                        <option value="PTS">屏東市</option>
                        <option value="ILN">宜蘭縣</option>
                        <option value="ILC">宜蘭市</option>
                        <option value="HWA">花蓮縣</option>
                        <option value="HWC">花蓮市</option>
                        <option value="TTC">臺東市</option>
                        <option value="TTT">臺東縣</option>
                        <option value="PEH">澎湖縣</option>
                        <option value="KMN">金門縣</option>
                        <option value="LNN">連江縣</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group input-w-lg-4 input-w-sm-full">
                    <div className="input-label">地址</div>
                    <input type="text" placeholder="請輸入地址" />
                  </div>
                </div>
            </section>
          </form>
        </section>
    </>
  )
}


export function StepTwo(){
  return (
    <>
    <form className="col col-12" data-phase="shipping">
              <h3 className="form-title">運送方式</h3>
              <section className="form-body col col-12">
                <label className="radio-group col col-12" data-price="0">
                  <input 
                    id="shipping-standard" 
                    type="radio" 
                    name="shipping"  
                      />
                  <div className="radio-info">
                    <div className="col col-12">
                      <div className="text">標準運送</div>
                      <div className="price"></div>
                    </div>
                    <div className="period col col-12">約 3~7 個工作天</div>
                  </div>
                  <div className="radio-box-border"></div>
                </label>
                <label className="radio-group col col-12" data-price="500">
                  <input id="shipping-dhl" type="radio" name="shipping" />
                  <div className="radio-info">
                    <div className="col col-12">
                      <div className="text">DHL 貨運</div>
                      <div className="price"></div>
                    </div>
                    <div className="period col col-12">48 小時內送達</div>
                  </div>
                  <div className="radio-box-border"></div>
                </label>
              </section>
            </form>

    </>
  )
}

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

export function ProgressControlAddress({nextStep}){

  return (
    <>
        <hr></hr>
        <section className="progress-control-container col col-lg-6 col-sm-12">
          <section className="button-group col col-12" data-phase="address">
            <button className="next" onClick={nextStep}>
              下一步
              <object data="./public/icons/right-arrow.svg" className="cursor-point">
              </object>
            </button>
          </section>
        </section>
    </>
  )
}

export function ProgressControlShipping({nextStep, prevStep}){
  return (
    <>
          <section className="button-group col col-12" data-phase="shipping">
            <button className="prev" onClick={prevStep}>
              <object data="./public/icons/left-arrow.svg" className="cursor-point">
              </object>
              上一步
            </button>
            <button className="next" onClick={nextStep}>
              下一步
              <object data="./public/icons/right-arrow.svg" className="cursor-point">
              </object>
            </button>
          </section>
    </>
  )
}

export function ProgressControlCreditCard({prevStep, handleSubmit}){
  return(
    <>
    <hr></hr>
     <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={prevStep}>
        <object data="./public/icons/left-arrow.svg" className="cursor-point">
        </object>
          上一步
        </button>
        <button className="next" type="button" onClick={handleSubmit}>
          確認下單
        </button>
      </section>
    </>
  )
}
//變成全局變數，這樣各個function才能拿到值
const formDataContext = createContext({
  formData:'',
  setFormData:()=>{}
})

export function SectionPayment({prevStep}){
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  function handleSubmit(e){
    if (e) e.preventDefault();
    console.log("handleSubmit triggered!")
    const form = document.createElement("form");
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

export function Thankyoupage(){
  return(
    <h1>
      Thank you for your orders!
    </h1>
  )
}