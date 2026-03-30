import Contact_form from '@/components/Contact_form'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-8 py-16">
      <div className="text-center flex flex-col items-center gap-3">
        <h1 className="font-serif text-4xl font-semibold text-[#e8e2d9] tracking-tight">
          Server Action Demo
        </h1>
        <p className="text-sm font-light text-[#6b6560] tracking-widest uppercase">
          Connect form with MongoDB & revalidation
        </p>
      </div>
      <Contact_form />

    </div>
  )
}

export default page