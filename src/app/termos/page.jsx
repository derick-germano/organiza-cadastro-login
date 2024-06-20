import Link from "next/link";

export default function Termos() {

  return (
    <>
      <div className="py-10 px-12 sm:px-28 md:px-48 lg:px-60 xl:px-80">
        <h1 className="font-bold text-2xl">Termos e condições</h1>
        <div className="mt-4">
          <h2 className="font-semibold mb-4">1. Registro e Conta</h2>
          <p className="mb-4">1.1 Para utilizar os nossos Serviços, você deve criar uma conta. Você concorda em fornecer informações precisas, atualizadas e completas durante o processo de registro.</p>
          <p className="mb-4">1.2 Você é responsável por manter a segurança da sua conta, incluindo a senha, e por todas as atividades realizadas em sua conta.</p>
          <p>1.3  Seus dados financeiros e pessoais serão tratados de acordo com nossa Política de Privacidade. Nós nos comprometemos a proteger suas informações conforme descrito na política.</p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold mb-4">2. Uso dos Serviços</h2>
          <p className="mb-4">2.1 Para utilizar os nossos Serviços, você deve criar uma conta. Você concorda em fornecer informações precisas, atualizadas e completas durante o processo de registro.</p>
          <p className="mb-4">2.2 Você é responsável por manter a segurança da sua conta, incluindo a senha, e por todas as atividades realizadas em sua conta.</p>
          <p>2.3  Seus dados financeiros e pessoais serão tratados de acordo com nossa Política de Privacidade. Nós nos comprometemos a proteger suas informações conforme descrito na política.</p>
        </div> 
        <div className="mt-4">
          <h2 className="font-semibold mb-4">3. Privacidade</h2>
          <p className="mb-4">3.1 Para utilizar os nossos Serviços, você deve criar uma conta. Você concorda em fornecer informações precisas, atualizadas e completas durante o processo de registro.</p>
          <p className="mb-4">3.2 Você é responsável por manter a segurança da sua conta, incluindo a senha, e por todas as atividades realizadas em sua conta.</p>
          <p>3.3  Seus dados financeiros e pessoais serão tratados de acordo com nossa Política de Privacidade. Nós nos comprometemos a proteger suas informações conforme descrito na política.</p>
        </div>
        <div className="mt-6 text-center">
          <Link href="/cadastro" className="text-2xl text-center border-b border-green-700  font-semibold text-green-700">Voltar</Link>  
        </div>          
      </div>
    </>
  )
}