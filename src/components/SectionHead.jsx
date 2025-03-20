import React from 'react'

function SectionHead({view, description, title,subtitle }) {
  return (
    <div className={`text-center mb-16 opacity-0 ${view ? 'animate-fade-slide-up' : ''}`}>
    <span className="text-primary font-semibold mb-4 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
      {title}
    </h2>
    <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
      {description}
    </p>
  </div>
  )
}

export default SectionHead