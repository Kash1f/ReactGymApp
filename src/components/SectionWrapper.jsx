import React from 'react'

const SectionWrapper = ({children, header, title}) => {

   

  return (
  <section className='min-h-screen flex flex-col gap-10'>
    
    <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center'>

    <p className='uppercase font-medium'>{header}</p>
    
    <h2>{title[0]} <span className='uppercase text-blue-400'>   {title[1]} </span>   {title[2]}</h2>



    </div>



  </section>
  )
}

export default SectionWrapper