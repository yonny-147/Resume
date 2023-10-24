export const VideoInit = () => {
  return (
    <div>      
        <video autoPlay muted loop className="miVideo">
        <source src="/public/noche.mp4" type="video/mp4" />
        Tu navegador no soporta HTML5
        </video>
    </div>
  )
}
