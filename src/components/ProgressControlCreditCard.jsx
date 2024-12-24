import leftArrow from "../assets/left-arrow.svg"


export function ProgressControlCreditCard({prevStep, handleSubmit}){
  return(
    <>
    <hr></hr>
     <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={prevStep}>
        <object data={leftArrow} className="cursor-point">
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