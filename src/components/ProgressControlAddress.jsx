import rightArrow from '../assets/right-arrow.svg'

export function ProgressControlAddress({nextStep}){

  return (
    <>
        <section className="progress-control-container col col-lg-12 col-sm-12">
          <section className="button-group col col-12" data-phase="address">
            <button className="next" onClick={nextStep}>
              下一步
              <object data={rightArrow} className="cursor-point">
              </object>
            </button>
          </section>
        </section>
    </>
  )
}