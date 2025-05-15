const Hero = () => {
    return (  
        <>
        <div className="hero" style={{ backgroundImage: `url(./imgs/fondo-hero.jpg)`,width:"100vw", backgroundSize:"cover"
        , display:"flex", justifyContent:"center", alignItems:"center",  backgroundRepeat:"no-repeat",
        backgroundPosition:"center"  }}>
        
        <img src="./imgs/logo.png" alt="logo-hero" />
        {/* <img src="./imgs/fondo-hero.jpg" alt="fondo-hero" /> */}
        </div>
        </>
        
    );
}
 
export default Hero;