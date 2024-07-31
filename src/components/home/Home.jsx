import { AdvancedImage } from "@cloudinary/react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import { civil, familia, laboral } from "../../config/cloudinary"


function Home() {
  return (
    <div>
        <Nav/>
          <div className="animate-fade-right">
            <div className="lg:relative lg:border-double lg:border-4 lg:border-black lg:shadow-2xl lg:h-full lg:w-75% lg:left-48 lg:mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pasto
            xs:relative xs:border-double xs:border-2 xs:border-black xs:shadow-2xl xs:h-full xs:w-80 xs:left-5 xs:mt-12">
              
              <p className="lg:text-center lg:mt-4
              xs:relative xs:text-right xs:top-5 xs:mr-2 xs:mt-2 xs:font-bold">Derecho de Familia y Sucesiones</p>
              <div className="lg:relative lg:bottom-4 lg:left-24 lg:size-auto
              xs:relative xs:size-16 xs:mb-1 xs:-top-5"><AdvancedImage cldImg={familia}/></div>
              <p className="lg:absolute lg:text-center lg:top-16 lg:left-8 lg:mx-60
              xs:relative xs:text-center xs:-top-6">Divorcios - Responsabilidad Parental - Cuidado Personal de los niños - Compensaciones Económicas - Alimentos - Violencia Familiar - Filiación - Liquidación de Sociedades Conyugales - Sucesiones - Testamentos</p>
            </div>
            <div className="lg:relative lg:border-double lg:border-4 lg:border-black lg:shadow-2xl lg:h-full lg:w-75% lg:left-48 lg:mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pasto
            xs:relative xs:border-double xs:border-2 xs:border-black xs:shadow-2xl xs:h-full xs:w-80 xs:left-5 xs:mt-12">
              
              <p className="lg:text-center lg:mt-4
              xs:relative xs:text-right xs:top-5 xs:mr-2 xs:mt-2 xs:font-bold">Derecho Laboral</p>
              <div className="lg:relative lg:bottom-4 lg:left-24 lg:size-auto
              xs:relative xs:size-16 xs:mb-1 xs:-top-5"><AdvancedImage cldImg={laboral}/></div>
              <p className="lg:absolute lg:text-center lg:top-16 lg:left-8 lg:mx-60
              xs:relative xs:text-center xs:-top-6">Despidos - Reclamos por Diferencias Salariales - Intercambio Telegráfico - Liquidaciones - Demandas Laborales - Acuerdos Espontáneos SECLO - Contratos de Trabajo - Accidentes de Trabajo - Abono a empresas - Seguimiento y Control.</p>
            </div>
            <div className="lg:relative lg:border-double lg:border-4 lg:border-black lg:shadow-2xl lg:h-full lg:w-75% lg:left-48 lg:mt-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pasto
            xs:relative xs:border-double xs:border-2 xs:border-black xs:shadow-2xl xs:h-full xs:w-80 xs:left-5 xs:mt-12">
              
              <p className="lg:text-center lg:mt-4
              xs:relative xs:text-right xs:top-5 xs:mr-2 xs:mt-2 xs:font-bold">Derecho Civil - Daños</p>
              <div className="lg:relative lg:bottom-4 lg:left-24 lg:size-auto
              xs:relative xs:size-16 xs:mb-1 xs:-top-5"><AdvancedImage cldImg={civil}/></div>
              <p className="lg:absolute lg:text-center lg:top-16 lg:left-8 lg:mx-60
              xs:relative xs:text-center xs:-top-6">Responsabilidad por Daños y Perjuicios - Accidentes de tránsito - Daños Resarcibles - Redacción y Revisión de Contratos. Seguimiento. Incumplimiento Contractual - Administración de Inmuebles. Asesoramiento y venta de inmuebles. Boletos de Compra Venta.</p>
            </div>
          </div>
        <Footer/>

    </div>
  )
}

export default Home