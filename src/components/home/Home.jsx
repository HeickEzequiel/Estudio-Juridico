import { AdvancedImage } from "@cloudinary/react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import { civil, familia, laboral } from "../../config/cloudinary"


function Home() {
  return (
    <div>
        <Nav/>
          <div className="animate-fade-right">
            <div className="relative border-double border-4 border-black shadow-2xl h-full w-75% left-48 mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pasto">
              <p className="text-center mt-4">Derecho de Familia y Sucesiones</p>
              <div className="relative bottom-4 left-24"><AdvancedImage cldImg={familia}/></div>
              <p className="absolute text-center top-16 left-8 mx-60">Divorcios - Responsabilidad Parental - Cuidado Personal de los niños - Compensaciones Económicas - Alimentos - Violencia Familiar - Filiación - Liquidación de Sociedades Conyugales - Sucesiones - Testamentos</p>
            </div>
            <div className="relative border-4 border-double border-black shadow-2xl h-full w-75% left-48 mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pasto">
              <p className="text-center mt-4">Derecho Laboral</p>
              <div className="relative bottom-4 left-24"><AdvancedImage cldImg={laboral}/></div>
              <p className="absolute text-center top-16 left-8 mx-60">Despidos - Reclamos por Diferencias Salariales - Intercambio Telegráfico - Liquidaciones - Demandas Laborales - Acuerdos Espontáneos SECLO - Contratos de Trabajo - Accidentes de Trabajo - Abono a empresas - Seguimiento y Control.</p>
            </div>
            <div className="relative border-4 border-double border-black shadow-2xl h-full w-75% left-48 mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pasto">
              <p className="text-center mt-4">Derecho Civil - Daños</p>
              <div className="relative bottom-4 left-24"><AdvancedImage cldImg={civil}/></div>
              <p className="absolute text-center top-16 left-8 mx-60">Responsabilidad por Daños y Perjuicios - Accidentes de tránsito - Daños Resarcibles - Redacción y Revisión de Contratos. Seguimiento. Incumplimiento Contractual - Administración de Inmuebles. Asesoramiento y venta de inmuebles. Boletos de Compra Venta.</p>
            </div>
          </div>
        <Footer/>

    </div>
  )
}

export default Home