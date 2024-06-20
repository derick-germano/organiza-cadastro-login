"use client"
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function Input({name, label, type, required, ...props}) {
  return (    
    <div className='mb-6'>
      <div className="capitalize mb-2 block text-base font-semibold">
      {label || name } <span className='text-red-500'>{required && "*"}</span>
      <Field 
        name={name} 
        type={type} 
        {...props} 
        className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
      </div>
      <div className='text-red-600 text-xs mt-1'>
        <ErrorMessage name={name} />
        
      </div>
    </div>
  )
}
