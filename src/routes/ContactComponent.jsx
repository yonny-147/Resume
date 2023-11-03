import '../styles/contact.css'
export const ContactComponent = () => {
  return (
    <div className="networksSocial">
      <a href="https://www.facebook.com/yonnyxx/?locale=es_LA"> 
          <img className='socialImg' src="../public/facebook.png"/> 
      </a>
      <a href="https://api.whatsapp.com/send/?phone=3112959285&amp;text&amp;type=phone_number&amp;app_absent=0">
          <img className='socialImg' src="../public/whatsapp.png"/> 
      </a>
      <a href="https://www.instagram.com/yonny_alex/?img_index=1"> 
          <img className='socialImg' src="../public/instagram.png"/> 
      </a>
      <a href="https://www.linkedin.com/in/yonnyalex22/">
          <img className='socialImg' src="../public/linkedin.png"/> 
      </a>
      <a href="https://github.com/yonny-147"> 
          <img className='socialImg' src="../public/github.png"/> 
      </a>
      <a href="mailto:yonny-147@hotmail.com, yalexanderospina@soyucn.edu.co"> 
          <img className='socialImg' src="../public/correo.png"/> 
      </a>
    </div>
  )
}
