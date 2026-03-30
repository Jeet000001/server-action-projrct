import Contact_form from '@/components/Contact_form'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <h1>Server action Demo</h1>
        <p>Connect form with MongoDB & revalidation</p>
      </div>
      <Contact_form />
    </div>
  )
}

export default page