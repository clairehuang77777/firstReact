import leftArrow from "../assets/left-arrow.svg"
import rightArrow from "../assets/right-arrow.svg"

export function ProgressControlShipping({nextStep, prevStep}){
  return (
    <>
      <section className="button-group col col-12 progress-control-container" data-phase="shipping">
            <button className="prev" onClick={prevStep}>
              <object data={leftArrow} className="cursor-point">
              </object>
              上一步
            </button>
            <button className="next" onClick={nextStep}>
              下一步
              <object data={rightArrow} className="cursor-point">
              </object>
            </button>
          </section>
    </>
  )
}