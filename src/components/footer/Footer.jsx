import { AdvancedImage } from "@cloudinary/react"
import { x, facebook, instagram, tiktok } from "../../config/cloudinary"
function Footer() {
    return (
    
        <footer className='absolute w-full  bottom-0 bg-pasto '>
            <div>
              <h2 className=' text-left mr-4 my-1 mx-2'>Seguinos en nuestras redes</h2>
                <div className="flex absolute gap-1">
                <a href="" target="_blank"> <AdvancedImage cldImg={instagram} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
                <a href="" target="_blank">  <AdvancedImage cldImg={facebook} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="" >  <AdvancedImage cldImg={tiktok} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                <a href="">  <AdvancedImage cldImg={x} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
                </div>
            </div>
            <div className=' mr-4 my-1' >
              <h2 className="text-lg font-normal text-center">Escribinos a</h2>
              <p className="text-lg font-normal my-0.1 text-center">lorenablanco@gmail.com</p>
            </div>
        </footer>
      )
}

export default Footer