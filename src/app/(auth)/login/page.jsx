"use client"
import Carousel from "@/components/Carousel";
import Button from "@/components/login-cadastro/Button";
import Input from "@/components/login-cadastro/Input";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const { status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/")
    }
  }, [status, router])

  // if (status !== "authenticated") {
  //   return null
  // }

   const initialValues = {
    email: "",
    password: "",
  }

  const validationScheme = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"), 
  });

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true)
    try {      
      signIn("Credentials", { email: values.email, password: values.password, redirect: false }).then(
        ({ error }) => {          
          if (!error) {
            router.push("/")
          } else {
            renderError(error.replace("Error:", ""))
            resetForm()
          }
          setFormSubmitting(false)
        }
      )      
    } catch (error) {      
      setFormSubmitting(false)
      renderError("Erro ao criar conta, tente mais tarde!")      
    }
  }

  function renderError(msg) {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, 3000)
  }

  return (
    <>
      <div className="h-screen flex">
        <div className="hidden lg:flex items-center justify-center w-1/3 bg-gradient-to-b from-custom1-green to-custom2-green ">
          <div className="w-screen">    
            <h1 className="fixed top-4 left-9 text-white text-4xl">Organiza</h1>
            <div className="p-5" >
            <Carousel />
            </div>            
          </div>                
        </div>

        <div className="lg:flex lg:w-2/3 w-screen justify-center items-center bg-white">
          <div className="block lg:hidden bg-gradient-to-r from-custom1-green to-custom2-green p-4">
            <h1 className="text-4xl text-white">Organiza</h1>
          </div>
          <div className="p-7 h-auto bg-white">
            <h1 className="text-3xl font-semibold">Bem-vindo de volta!</h1>
            <small className="text-gray-400">Por favor insira seus dados</small>

            <div className="mt-5">
              <Formik initialValues={initialValues} validationSchema={validationScheme} onSubmit={handleSubmit}>
                {({values}) => (
                  <Form noValidate>
                    <Input name="email" type="email" required/>
                    <Input name="password" type="password" required autoComplete="off"/>
                    <Button 
                      type="submit" 
                      text={isFormSubmitting ? "Carregando..." : "Iniciar sessão"}
                      disabled={isFormSubmitting} 
                      className="mb-1.5 block w-full text-center text-white bg-cor-button hover:bg-green-900 px-2 py-1.5 rounded-md"/>
                      {!values.email && !values.password && error && (
                        <span className="text-red-600 text-sm text-center">{error}</span>
                      )}            
                  </Form>
                )}
              </Formik>
            </div> 

            <div className="text-center mb-6">
              <span className="text-xs text-gray-400 font-semibold">Não tem uma conta?</span>
              <Link href="/cadastro" className="text-xs border-b border-green-700  font-semibold text-green-700"> Criar conta</Link>
            </div>

            <div className="block lg:hidden">          
            <Carousel />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}