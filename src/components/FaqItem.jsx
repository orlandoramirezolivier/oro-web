import { useState } from 'react'

export default function FaqItem({ question, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className={`faq-question${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        {question}
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className={`faq-answer${open ? ' open' : ''}`}>
        {children}
      </div>
    </div>
  )
}
