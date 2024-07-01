import { AdvancedImage } from "@cloudinary/react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import { civil, familia, laboral } from "../../config/cloudinary"

function Home() {
  return (
    <div>
        <Nav/>
          <div className="relative border-2 border-black h-full w-full ">
            <div className="text-center">
              <p>Derecho de Familia y Sucesiones</p>
              <AdvancedImage cldImg={familia}/>
              <p className="mx-60">Divorcios - Responsabilidad Parental - Cuidado Personal de los niños - Compensaciones Económicas - Alimentos - Violencia Familiar - Filiación - Liquidación de Sociedades Conyugales - Sucesiones - Testamentos</p>
            </div>
            <div className="text-center">
              <p>Derecho Laboral</p>
              <AdvancedImage cldImg={laboral}/>
              <p className="mx-60">Despidos - Reclamos por Diferencias Salariales - Intercambio Telegráfico - Liquidaciones - Demandas Laborales - Acuerdos Espontáneos SECLO - Contratos de Trabajo - Accidentes de Trabajo - Abono a empresas - Seguimiento y Control.</p>
            </div>
            <div className="text-center">
              <p>Derecho Civil - Daños</p>
              <AdvancedImage cldImg={civil}/>
              <p className="mx-60">Responsabilidad por Daños y Perjuicios - Accidentes de tránsito - Daños Resarcibles - Redacción y Revisión de Contratos. Seguimiento. Incumplimiento Contractual - Administración de Inmuebles. Asesoramiento y venta de inmuebles. Boletos de Compra Venta.</p>
            </div>
          </div>
        <Footer/>

    </div>
  )
}

export default Home