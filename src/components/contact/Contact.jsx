import { AdvancedImage } from "@cloudinary/react"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"
import { gmail, linea, map, whatsapp } from "../../config/cloudinary"

function Contact() {
  
  return (
    <div className="overflow-hidden">
        <Nav/>
        <div className="bg-gradient-to-r from-white to-rose-400">
        <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>
        <div className="absolute -ml-2 mt-8 left-50% top-30%"><AdvancedImage cldImg={map}/></div>
        <p className="absolute left-55% ml-5 top-35% mt-10 text-2xl">Jujuy 2976, San Justo, La Matanza, Prov Buenos Aires</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.5151898763477!2d-58.56499252780905!3d-34.67918272348251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62f8d5c282d%3A0xcb7dd27fd3a26e89!2sJujuy%202976%2C%20B1754AGZ%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1731625011408!5m2!1ses-419!2sar" 
          width="600" 
          height="450" 
          className="ml-20 mx-20 border-2 border-black" 
          loading="lazy">
        </iframe>
          
            <a href="https://wa.me/541134637208"target="_blank"><AdvancedImage cldImg={whatsapp} className="absolute size-20 left-50% mt-8 top-45% hover:scale-150 duration-1000"/></a>
            <p className="absolute text-2xl left-55% top-50% mt-4 ml-4">1144558866</p>
            <a href="mailto:ezequielheick@gmail.com" target="_blank" rel="noopener noreferrer"><AdvancedImage cldImg={gmail} className="absolute -ml-3 left-50% top-55% mt-16 hover:scale-150 duration-1000"/></a>
            <p className="absolute text-2xl left-55% top-65% mt-1 ml-4">lorenablanco@gmail.com</p>

          <div className=" relative left-96 "><AdvancedImage cldImg={linea}/></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact