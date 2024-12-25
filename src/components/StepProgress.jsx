import React from 'react';

export function StepProgress({ currentStep }) {
  const steps = [
    { phase: 'address', label: '寄送地址' },
    { phase: 'shipping', label: '運送方式' },
    { phase: 'credit-card', label: '付款資訊' },
  ];

  return (
    <>
      <h2 className="register-title">結帳</h2>
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
                <div className="checkmark">&#10003;
                </div> // 已完成顯示打勾
              ) : (
                <div className="text">{index + 1}</div> // 未完成或當前步驟顯示數字
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