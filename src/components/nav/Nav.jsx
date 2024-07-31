import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='lg:flex lg:items-center lg:bg-imagen lg:bg-cover lg:bg-center lg:p-6 lg:w-full lg:h-56
    xs:relative xs:grid xs:bg-pasto '>
        <span className='lg:absolute lg:top-10 lg:left-8 lg:ml-4 lg:mt-4 lg:text-bold lg:text-4xl
        xs:relative xs:top-2 xs:left-20 xs:text-bold xs:text-2xl'>Estudio Juridico</span>
        <span className='lg:absolute lg:left-10 lg:ml-10 lg:top-24 lg:mt-2 lg:font-cursiva lg:text-bold lg:text-6xl
        xs:relative xs:top-4 xs:left-10 xs:ml-2 xs:font-cursiva xs:text-bold xs:text-4xl'>Dra. Lorena Blanco</span>
        <div className='lg:absolute lg:left-72 lg:ml-72 lg:mt-8 lg:text-xl lg:mb-0
        xs:relative xs:flex xs:mt-4 xs:mb-2 xs:ml-2'>
            <button className='boton'><Link to='/'>Inicio</Link></button>
            <button className='boton'><Link to='/us'>Sobre nosotros</Link></button>
            <button className='boton'><Link to='/team'>Nuestro Equipo</Link></button>
            <button className='boton'><Link to='/news'>Noticias</Link></button>
            <button className='boton'><Link to='/contact'>Contacto</Link></button>
        </div><br />
    </div>
  )
}

export default Nav