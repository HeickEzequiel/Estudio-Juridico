import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='lg:flex lg:items-center bg-gradient-to-r from-white to-rose-400 lg:p-6 lg:w-full lg:h-56 
    xs:relative xs:grid xs:bg-pasto '>
        <span className='lg:absolute lg:top-10 lg:left-8 lg:ml-4 lg:mt-4 lg:text-bold lg:text-4xl
        xs:relative xs:top-2 xs:left-20 xs:text-bold xs:text-2xl'>Estudio Juridico</span>
        <span className='lg:absolute lg:left-10 lg:ml-20 lg:top-24 lg:mt-2 lg:font-cursiva lg:text-bold lg:text-6xl 
        xs:relative xs:top-4 xs:left-10 xs:ml-2 xs:font-cursiva xs:text-bold xs:text-4xl'>Blanco <span className='font-cursiva '>&</span> Asoc.</span>
        <div className='lg:absolute lg:left-60% lg:mt-2 lg:text-xl lg:mb-0
        xs:relative xs:flex xs:mt-2 xs:mb-2 xs:ml-2'>
            <button className='boton'><Link to='/'>Inicio</Link></button>
            <button className='boton'><Link to='/us'>Sobre nosotros</Link></button>
            <button className='boton'><Link to='/team'>Nuestro Equipo</Link></button>
            <button className='boton'><Link to='/contact'>Contacto</Link></button>
        </div><br />
    </div>
  )
}

export default Nav