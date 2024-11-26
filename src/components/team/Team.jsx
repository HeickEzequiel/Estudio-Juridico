import { AdvancedImage } from "@cloudinary/react"
import Nav from "../nav/Nav"
import { Observer } from "tailwindcss-intersect"
import { caty, linea, lore } from "../../config/cloudinary"
import Footer from "../footer/Footer"

function Team() {
  Observer.start()
  return (
    <div className="text-black">
        <Nav/>
        <div className="bg-gradient-to-r from-white to-rose-400">
        <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>
          <div className="lg:border-double lg:border-4 lg:border-black lg:h-96 lg:my-20 lg:mr-44 lg:ml-10">
            <p className='lg:relative lg:font-cursiva lg:text-bold lg:text-6xl lg:top-4 lg:left-25%'>Lorena Blanco</p>
            <AdvancedImage cldImg={lore}  className="lg:relative lg:rounded-full  border-2 border-black lg:-top-9 lg:left-3 "/>
            <p className="lg:relative lg:font-cursiva lg:text-bold lg:text-2xl lg:ml-4 lg:-mt-6 lg:-top-72 lg:left-25%"> Abogada y Mediadora ⚖️</p>
            <p className="lg:relative lg:left-25% lg:-top-72 lg:mt-4 lg:ml-4 lg:w-70%">"Fui la primer universitaria de mi familia, costó no solo económicamente sino también moralmente, fue un enorme sacrificio viviendo en carne propia no saber cómo defenderme, ni proceder ante situaciones injustas en el camino.
              Realicé especialidades en Violencia Familiar, Laboral, Oratoria, Penal y Mediadora.
              A fin de poder conectar con la gente, para que entienda lo maravilloso que es lograr obtener lo que por derecho corresponde me especialice en comunicaciones, PNL, siendo actualmente coach ontológico.
              Profesionalmente me encanta crear un ambiente laboral creativo, responsable y trabajar en equipo.
              Con mis clientes trato de crear un espacio contenedor y claro, cuyo fin es que se entienda las diferentes opciones de acción que hay respecto al problema que me planteen, ya que cada caso es particular y único. Porque no es solo la ley, es la persona que está atravesando una situación particular que considera injusta y para eso soy su nexo como auxiliar de justicia, entre tribunales y la persona que necesita ayuda. Dignificando, empoderando y acompañando en su proceso jurídico legal."</p>
          </div>
          <div className="lg:border-double lg:border-4 lg:border-black lg:h-96 lg:my-20 lg:mr-44 lg:ml-10">
            <p className="lg:relative lg:font-cursiva lg:text-bold lg:text-6xl lg:top-4 lg:left-25%">Catherine Segovia</p>
            <AdvancedImage cldImg={caty} className="lg:relative lg:rounded-full border-2 border-black lg:left-3 lg:-top-9"/>
            <p className="lg:relative lg:font-cursiva lg:text-bold lg:text-2xl lg:ml-4 lg:-mt-6 lg:-top-72 lg:left-25%">Estudiante de Abogacia / Secretaria Juridica</p>
            <p className="lg:relative lg:left-25% lg:-top-72 lg:mt-4 lg:ml-4 lg:w-70%">"Soy Catherine, estudiante avanzada de abogacía, con un sólido conocimiento en derecho de familia, civil, laboral y penal. Durante mi formación, he desarrollado habilidades en interpretación jurídica, redacción legal y análisis de casos, y he tenido la oportunidad de aplicar estos conocimientos en situaciones prácticas mediante prácticas profesionales en estudios jurídicos y juzgados. Me apasiona el aprendizaje continuo y tengo un fuerte compromiso con comprender a fondo los procedimientos y normativas vigentes en cada área. Estoy preparada para asumir nuevos desafíos en el ámbito legal, aportando responsabilidad y dedicación."</p>
          </div>
          <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Team