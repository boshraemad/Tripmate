import Main from '../features/auth/components/Main'
import Aside from '../features/auth/components/Aside'
import RegisterForm from '../features/auth/components/RegisterForm'
import Header from '../features/auth/components/Header'

export default function RegisterPage() {
  return (
    <section className="bg-clearwhite h-[100vh]">
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
