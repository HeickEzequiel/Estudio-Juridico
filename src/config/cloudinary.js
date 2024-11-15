import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../utils/keys";
import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";


  const cld = new Cloudinary({
    cloud: {
        cloudName: CLOUD_NAME,
        api_key: CLOUD_API_KEY, 
        api_secret: CLOUD_API_SECRET_KEY
    },
});

const mart = cld.image("Estudio Juridico/martillo")
const fon = cld.image("Estudio Juridico/fondo")

export const martillo = mart.resize(fill().width(1920).height(600))
export const fondo = fon.resize(fill().width(1370).height(329))

const xx = cld.image("redes/x")
const insta = cld.image("redes/instagram")
const faceb = cld.image("redes/facebook")
const tikt = cld.image("redes/tiktok")
const wsp = cld.image("redes/whatsapp")
const gm = cld.image("redes/gmail")
const spotmap = cld.image("redes/maps")

export const x = xx.resize(fill().width(200).height(200))
export const instagram = insta.resize(fill().width(200).height(200))
export const facebook = faceb.resize(fill().width(200).height(200))
export const tiktok = tikt.resize(fill().width(200).height(200))
export const whatsapp = wsp.resize(fill().width(200).height(200))
export const gmail = gm.resize(fill().width(100).height(100))
export const map = spotmap.resize(fill().width(100).height(100))

const derfa = cld.image("Estudio Juridico/familia")
const derla = cld.image("Estudio Juridico/laboral")
const derci = cld.image("Estudio Juridico/civil")

export const familia = derfa.resize(fill().width(150).height(150))
export const laboral = derla.resize(fill().width(190).height(190))
export const civil = derci.resize(fill().width(150).height(150))

const lin = cld.image("Estudio Juridico/linea")
export const linea = lin.resize(fill().width(800).height(50))

const reu = cld.image("Estudio Juridico/mesaDeReunion")
const ofi = cld.image("Estudio Juridico/oficina")
const rece = cld.image("Estudio Juridico/recepcion")

export const reunion = reu.resize(fill().width(600).height(450))
export const oficina = ofi.resize(fill().width(600).height(450))
export const recepcion = rece.resize(fill().width(600).height(450))

const lorena = cld.image("Estudio Juridico/lorena")
export const lore = lorena.resize(fill().width(320).height(320))
const catherine = cld.image("Estudio Juridico/caty")
export const caty = catherine.resize(fill().width(320).height(320))