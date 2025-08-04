import Main from '../features/auth/components/Main'
import Aside from '../features/auth/components/Aside'
import RegisterForm from '../features/auth/components/RegisterForm'
import Header from '../features/auth/components/Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function RegisterPage() {
  const {registered}=useSelector((state)=>state.user);
  const navigate=useNavigate();
  useEffect(()=>{
    if(registered){
      navigate("/login")
    }
  },[navigate , registered ])

  return (
    <section className="bg-clearwhite min-h-[100vh]">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <Aside/>
        <Main>
            <Header/>
            <RegisterForm/>
        </Main>
    </div>
  </section>
  )
}
