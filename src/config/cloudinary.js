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

export const x = xx.resize(fill().width(200).height(200))
export const instagram = insta.resize(fill().width(200).height(200))
export const facebook = faceb.resize(fill().width(200).height(200))
export const tiktok = tikt.resize(fill().width(200).height(200))

const derfa = cld.image("Estudio Juridico/familia")
const derla = cld.image("Estudio Juridico/laboral")
const derci = cld.image("Estudio Juridico/civil")

export const familia = derfa.resize(fill().width(300).height(300))
export const laboral = derla.resize(fill().width(300).height(300))
export const civil = derci.resize(fill().width(300).height(300))