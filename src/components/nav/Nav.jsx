import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex items-center bg-imagen bg-cover bg-center p-6 w-full h-52'>
        <span className='absolute top-10 left-8 ml-4 mt-4 text-bold text-4xl'>Estudio Juridico</span>
        <span className='absolute left-10 ml-10 top-24 mt-2 font-cursiva text-bold text-6xl'>Dra. Lorena Blanco</span>
        <div className='absolute left-72 ml-72 mt-8 text-xl'>
            <button className='boton'><Link to='/'>Inicio</Link></button>
            <button className='boton'><Link to='/us'>Sobre nosotros</Link></button>
            <button className='boton'><Link to='/team'>Nuestro Equipo</Link></button>
            <button className='boton'><Link to='/news'>Noticias</Link></button>
            <button className='boton'><Link to='/contact'>Contacto</Link></button>
        </div>
    </div>
  )
}

export default Nav