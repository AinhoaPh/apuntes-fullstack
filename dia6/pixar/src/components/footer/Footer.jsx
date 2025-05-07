const Footer = () => {
    return (
        <>
            <footer>
                <div >

                    <ul>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                <section>
                    <h2>FILMS</h2>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Shorts</a></li>
                        <li><a href="#">Series</a></li>
                        <li><a href="#">SparkShorts</a></li>
                        <li><a href="#">Documentaries</a></li>
                    </ul>
                </section>
                <section>
                    <h2>TECH</h2>
                    <ul>
                        <li><a href="#">Tech at Pixar</a></li>
                        <li><a href="#">RenderMan</a></li>
                        <li><a href="#">Open USD</a></li>
                        <li><a href="#">Software R&D</a></li>
                        <li><a href="#">Libraries</a></li>
                    </ul>
                </section>
                <section>
                    <h2>CAREERS</h2>
                    <ul>
                        <li><a href="#">Careers At Pixar</a></li>
                        <li><a href="#">Internship</a></li>
                        <li><a href="#">Life At Pixar</a></li>

                    </ul>
                </section>
                <section>
                    <h2>MORE</h2>
                    <ul>
                        <li><a href="#">Leaders</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Pixar In A Box</a></li>
                        <li><a href="#">Supplier Diversity</a></li>
                        <li><a href="#">FAQ's</a></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><a href="#">Do Not Sell or Share My Personal Information </a></li>
                        <li><a href="#">Privacy Policy |</a></li>
                        <li><a href="#">Your US State Privacy Rights |</a></li> 
                        <li><a href="#">Children's Online Privacy Policy |</a></li> 
                        <li><a href="#">Interest Based Ads |</a></li>
                    </ul>
                      <p>© 1986-2025 Disney-Pixar</p>  
                        
                </section>
            </footer>
        </>
    );
}

export default Footer;

const FooterList= () => {
    const redesList = [
        { id:1,src: "#", alt: 'Linkedin' },
        { id:2, src: "#", alt: 'Facebook' },
        { id:3, src: "#", alt: 'Twitter' },
        { id:4, src: "#", alt: 'Youtube' },
        { id:5, src: "#", alt: 'Instagram' }
    ]
    return(
        <span>
            {redesList.map(({id, src, alt}) =>{
                return(
                    <li key={id}>
                        <a key={id} href={src}  ><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                )
            } )}
        </span>
    )
}