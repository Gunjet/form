
"use client"

import Card from './components/firstcard'
import { SecondCard } from './components/secondcard'
import { ThirdCard } from './components/thirdcard'
import { FourthCard } from './components/fourthcard'
import { useState } from 'react'

export default function Home() {
  const [page, setPage] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    dob: '',
    profileImage: null,
  });

  const [errors, setErrors]=useState({
    firstName: 'First name cannot contain special characters or numbers.',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    }
  )
  const handleInputChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  }

  const Next = () => {
    setPage(page + 1)
  }

  const Back = () => {
    setPage(page - 1)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F4F4F4]">
      {page === 1 && <Card
         Next={Next} 
         form={form} 
         handleInputChange={handleInputChange} 
         setErrors={setErrors}
         errors={errors}
     />}
      {page === 2 && <SecondCard Next={Next} Back={Back} formData={formData} handleInputChange={handleInputChange} />}
      {page === 3 && <ThirdCard Next={Next} Back={Back} formData={formData} handleInputChange={handleInputChange} />}
      {page === 4 && <FourthCard />}
      
    </div>
  )
}
