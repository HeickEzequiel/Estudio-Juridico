import { AdvancedImage } from "@cloudinary/react"
import { x, facebook, instagram, tiktok } from "../../config/cloudinary"
function Footer() {
    return (
    
        <footer className='absolute h-32 w-full overflow-hidden bg-gradient-to-r from-white to-rose-400 '>
            <div>
              <h2 className='text-left mr-4 my-1 mx-2'>Seguinos en nuestras redes</h2>
                <div className="flex absolute gap-1 ">
                  <a href="https://www.instagram.com/" target="_blank"><AdvancedImage cldImg={instagram} className='relative size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000' /></a>
                  <a href="https://www.facebook.com/" target="_blank"><AdvancedImage cldImg={facebook} className='relative size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000'/></a>
                  <a href="https://www.tiktok.com/" target="_blank"><AdvancedImage cldImg={tiktok} className='relative size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000'/></a>
                  <a href="https://www.x.com/" target="_blank"><AdvancedImage cldImg={x} className='relative size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000'/></a>
                </div>
            </div>
            <div className='mr-4 my-1 ' >
              <h2 className="lg:w-40 lg:left-35% lg:text-xl font-normal lg:text-center xs:relative xs:text-right xs:-top-4 xs:mr-5">Escribinos a:</h2>
              <p className="lg:w-72 lg:left-45% lg:text-3xl font-cursiva lg:my-0.1 lg:text-center xs:relative xs:text-right xs:-top-6 xs:-mr-3">lorenablanco@gmail.com</p>
            </div>
        </footer>
      )
}

export default Footer