import Main from '../features/auth/components/Main'
import Aside from '../features/auth/components/Aside'
import LoginForm from '../features/auth/components/LoginForm'
import Header from '../features/auth/components/Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function LoginPage() {
  const {loggedIn } = useSelector((state)=>state.user);
  const navigate=useNavigate();

  useEffect(()=>{
    if(loggedIn) navigate("/")
  } , [loggedIn , navigate])

  return (
    <section className="bg-clearwhite h-[100vh]">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <Aside/>
        <Main>
            <Header/>
            <LoginForm/>
        </Main>
    </div>
  </section>
  )
}
