import { AdvancedImage } from "@cloudinary/react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import { civil, familia, laboral, linea } from "../../config/cloudinary"
import { Ripple, initTWE, Dropdown} from "tw-elements";
import { useEffect } from "react";
import 'tw-elements'


function Home() {
  
  useEffect(()=>{
    initTWE({ Ripple, Dropdown }, {allowReinits: false});
  },[])
  
  return (

    <div className="min-w-min min-h-max overflow-hidden text-black">
      <Nav/>
        <div className="bg-gradient-to-r from-white to-rose-400 " >
          <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>

          {/* Derecho de familia */}

          <div className="relative mt-44 mb-10" data-twe-dropdown-position="dropend">
            <button 
              className="lg:relative lg:border-double lg:border-4 lg:border-violet-500 lg:shadow-2xl lg:h-52 lg:w-40% lg:left-20 lg:top-20  hover:bg-pink-300 xs:relative xs:border-double xs:border-2 xs:border-violet-500 xs:shadow-2xl xs:h-full xs:w-80 xs:left-5 xs:top-12"
              type="button"
              id="dropdownMenuButton1e"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <p className="lg:text-center lg:-top-16 lg:left-8 relative font-bold">Derecho de Familia y Sucesiones</p>
              <div className="lg:absolute lg:-left-14 lg:-top-0 lg:border-2 lg:border-violet-500 lg:rounded-full lg:bg-rose-300 lg:size-48"></div>
              <div className="lg:absolute lg:top-8 lg:-left-10 lg:mb-0 lg:size-auto xs:relative xs:size-16 xs:mb-1 xs:-top-5"><AdvancedImage cldImg={familia}/></div>
              <p className="lg:absolute  lg:top-16 lg:left-20 lg:mx-16 xs:relative xs:text-center xs:-top-6">Divorcios - Responsabilidad Parental - Cuidado Personal de los niños - Compensaciones Económicas - Alimentos - Violencia Familiar - Filiación - Liquidación de Sociedades Conyugales - Sucesiones - Testamentos</p>

            </button>
            <p className="absolute z-[1000] float-left hidden  list-none overflow-hidden rounded-lg border-none bg-transparent bg-clip-padding  shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark lg:left-45% lg:w-45% lg:-top-20 lg:ml-6 lg:p-4 lg:font-cursiva lg:font lg:text-2xl"
              aria-labelledby="dropdownMenuButton1e"
              data-twe-dropdown-menu-ref>En el área de Derecho de Familia y Sucesiones, brindamos asesoría y acompañamiento en los aspectos legales que afectan el núcleo familiar y la planificación del patrimonio. 
              Nos especializamos en resolver conflictos de forma justa y eficiente, siempre priorizando la protección de los derechos y el bienestar de cada miembro de la familia. 
              Comprendemos la importancia de estos asuntos y ofrecemos un enfoque personalizado y sensible que busca soluciones adecuadas a tus necesidades y circunstancias particulares.</p>
          </div>
          
          {/* Derecho Laboral */}

          <div className="relative my-10" data-twe-dropdown-position="dropend">
            <button 
              className="lg:relative lg:border-double lg:border-4 lg:border-violet-500 lg:shadow-2xl lg:h-52 lg:w-40% lg:left-20 lg:top-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pink-300 xs:relative xs:border-double xs:border-2 xs:border-violet-500 xs:shadow-2xl xs:h-full xs:w-80 xs:left-5 xs:top-12"
              type="button"
              id="dropdownMenuButton1e"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <p className="lg:text-center lg:-top-16 lg:left-8 relative font-bold">Derecho Laboral</p>
              <div className="lg:absolute lg:-left-14 lg:-top-0 lg:border-2 lg:border-violet-500 lg:rounded-full lg:bg-rose-300 lg:size-48"></div>
              <div className="lg:absolute lg:top-0 lg:-left-14 lg:mb-0 lg:size-auto xs:relative xs:size-16 xs:mb-1 xs:-top-5"><AdvancedImage cldImg={laboral}/></div>
              <p className="lg:absolute  lg:top-16 lg:left-20 lg:mx-16 xs:relative xs:text-center xs:-top-6">Despidos - Reclamos por Diferencias Salariales - Intercambio Telegráfico - Liquidaciones - Demandas Laborales - Acuerdos Espontáneos SECLO - Contratos de Trabajo - Accidentes de Trabajo - Abono a empresas - Seguimiento y Control.</p>
            </button>
            <p className="absolute z-[1000] float-left hidden  list-none overflow-hidden rounded-lg border-none bg-transparent bg-clip-padding  shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark lg:left-45% lg:w-45% lg:-top-20 lg:ml-6 lg:p-4 lg:font-cursiva lg:font lg:text-2xl"
              aria-labelledby="dropdownMenuButton1e"
              data-twe-dropdown-menu-ref
            > En nuestra área de Derecho Laboral, ofrecemos asesoramiento integral tanto a empleados como a empleadores, brindando soluciones efectivas en el ámbito laboral. 
            Nos dedicamos a proteger los derechos laborales y a promover condiciones de trabajo justas.
            Nos comprometemos a ofrecer un trato cercano y profesional, adaptándonos a cada situación para garantizar una solución eficiente y justa. 
            Conocemos la importancia de cada caso laboral y estamos aquí para brindar el apoyo y la experiencia legal que necesitas.</p>
          </div>


          {/* Derecho civil */}

          <div className="relative mt-10 mb-44" data-twe-dropdown-position="dropend">
            <button 
              className="lg:relative lg:border-double lg:border-4 lg:border-violet-500 lg:shadow-2xl lg:h-52 lg:w-40% lg:left-20 lg:top-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:bg-pink-300 xs:relative xs:border-double xs:border-2 xs:border-violet-500 xs:shadow-2xl xs:h-full xs:w-80 xs:left-5 xs:top-12"
              type="button"
              id="dropdownMenuButton1e"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <p className="lg:text-center lg:-top-16 lg:left-8 relative font-bold">Derecho Civil - Daños</p>
              <div className="lg:absolute lg:-left-14 lg:-top-0 lg:border-2 lg:border-violet-500 lg:rounded-full lg:bg-rose-300 lg:size-48"></div>
              <div className="lg:absolute lg:top-4 lg:-left-9 lg:mb-0 lg:size-auto xs:relative xs:size-16 xs:mb-1 xs:-top-5"><AdvancedImage cldImg={civil}/></div>
              <p className="lg:absolute  lg:top-16 lg:left-20 lg:mx-16 xs:relative xs:text-center xs:-top-6">Responsabilidad por Daños y Perjuicios - Accidentes de tránsito - Daños Resarcibles - Redacción y Revisión de Contratos. Seguimiento. Incumplimiento Contractual - Administración de Inmuebles. Asesoramiento y venta de inmuebles. Boletos de Compra Venta.</p>
            </button>
            
            <p className="absolute z-[1000] float-left hidden  list-none overflow-hidden rounded-lg border-none bg-transparent bg-clip-padding  shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark lg:left-45% lg:w-45% lg:-top-20 lg:ml-6 lg:p-4 lg:font-cursiva lg:font lg:text-2xl"
              aria-labelledby="dropdownMenuButton1e"
              data-twe-dropdown-menu-ref
            > En el área de Derecho Civil especializado en Daños y Perjuicios, ofrecemos asesoría legal para reclamar y proteger los derechos de quienes han sufrido pérdidas o perjuicios como resultado de acciones u omisiones de terceros. 
              Trabajamos en casos de accidentes, negligencia médica, responsabilidad civil, incumplimiento de contratos, y otros eventos en los que sea necesario obtener una compensación justa. 
              Nuestro enfoque es brindar una defensa comprometida y profesional, siempre orientada a lograr la máxima indemnización posible para nuestros clientes.
              Estamos aquí para ayudarte a entender tus derechos y a guiarte en cada paso del proceso legal.</p>
          </div>
          
          <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>
        </div>

        
      <Footer/>
    </div>
  )
}

export default Home

