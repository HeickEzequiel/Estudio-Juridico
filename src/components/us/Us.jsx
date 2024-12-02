import { AdvancedImage } from "@cloudinary/react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import { linea, oficina, recepcion, reunion } from "../../config/cloudinary"
import { Observer } from 'tailwindcss-intersect'
import { useEffect } from "react"

function Us() {
  
  useEffect(()=>{
    Observer.start()    
  })
  
  return (
    <div className="min-w-min min-h-max overflow-hidden text-black">
      <Nav/>
        <div className="bg-gradient-to-r from-white to-rose-400">
          <div className=" lg:relative lg:left-96 "><AdvancedImage cldImg={linea}/></div>
        
          <div className="lg:relative">
            <div className="border-2 border-black lg:relative lg:w-35% lg:left-60% lg:mt-10 intersect:animate-fade-left intersect:animate-duration-1000 "><AdvancedImage cldImg={recepcion} /></div>
            <p className="lg:relative lg:font-cursiva lg:text-3xl lg:w-50% lg:ml-20 lg:-top-80 intersect:animate-fade-down intersect:animate-duration-1000">En Blanco & Asoc., nos comprometemos a brindar soluciones legales personalizadas y de alta calidad. Con un equipo de profesionales especializados en distintas áreas del derecho, nuestra misión es asesorar y representar a nuestros clientes con integridad, transparencia y eficiencia. Nos dedicamos a entender a fondo las necesidades de cada caso para diseñar estrategias legales que protejan sus intereses y garanticen el mejor resultado posible.</p> <br />
          </div>

          <div className="lg:relative lg:-mt-28">
            <div className="border-2 border-black lg:relative lg:w-35% lg:left-20 intersect:animate-fade-right intersect:animate-duration-1000"><AdvancedImage cldImg={oficina}/></div>
            <p className="lg:relative lg:font-cursiva lg:text-3xl lg:w-50% lg:ml-45% lg:-top-80 intersect:animate-fade-down intersect:animate-duration-1000">A lo largo de años de experiencia, hemos trabajado en una amplia gama de casos en derecho de familia, civil, penal, laboral, entre otros, consolidando una reputación de confianza y eficacia. Nos enorgullece ofrecer un servicio cercano y accesible, acompañando a nuestros clientes en cada paso del proceso legal.</p> <br />
          </div> 

          <div className="lg:relative lg:-mt-28"> 
            <div className="border-2 border-black lg:relative lg:w-35% lg:left-60% intersect:animate-fade-left intersect:animate-duration-1000" ><AdvancedImage cldImg={reunion}/></div>
            <p className="lg:relative lg:font-cursiva lg:text-3xl lg:w-50% lg:ml-20 lg:-top-80 intersect:animate-fade-down intersect:animate-duration-1000">En Blanco & Asoc., creemos que el conocimiento y la experiencia, combinados con un enfoque humano, son la clave para resolver los desafíos legales con éxito. Confíe en nosotros para proteger sus derechos y guiarlo hacia soluciones que le brinden tranquilidad.</p> <br/>
          </div>
        
          <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>
        </div>
      <Footer/>
    </div>
  )
}

export default Us