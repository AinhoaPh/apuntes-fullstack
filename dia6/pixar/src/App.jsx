import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import MovieSection from './components/movies-main/MovieSection'
import Footer from './components/footer/Footer'
import './App.css'



function App() {
  const moviePrincipal = [
    { src: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/319ff132-f2a9-4159-89ef-1264b68b4e81/wl_home2.jpg?format=2500w", alt: 'Win or Lose' },
    { src: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/471447c0-56ae-46f2-ba47-eb8f93af3c00/wol_logo.png?format=2500w", alt: 'Win or lose' },
    { src: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1e6a13c7-e61e-4393-9d94-d6d76805037e/d%2B.png?format=750w", alt: 'Logo Disney' }

  ]

  const movie = [
    { src: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9ae6d321-34af-4ef8-8b50-525eac838060/mtp_bg.jpg?format=2500w", alt: 'Meet the pickles' },
    { src: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/db41424e-0746-44b5-9630-bcb23c532326/ggcs_LaurieBlob_1.per16n.101.png?format=1500w", alt: 'Meet the pickles' },
    { src: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/edac5088-045b-4b01-a155-7dc80f975541/MTP_Logo_TT_LtBg_v2.1.png?format=1500w", alt: 'Meet the pickles' }

  ];
  const gallery = [

    { src: "#", alt: 'Careers' },
    { src: "#", alt: 'careers' },
    { src: "#", alt: 'careers' }
  ];

  const imageList = [
    { src: "#", alt: 'Dream' },
    { src: "#", alt: 'Hoppers' },
    { src: "#", alt: 'Toy Story 5' }

  ];
  return (
    <>
      <Header />
 
      <Hero/>
      <section>
      <MovieSection imagenes={moviePrincipal} />
      </section>
      <section>
        <MovieSection imagenes={gallery} />
      </section>
      <section>
      <MovieSection imagenes={movie} />
      </section>
      <section>
        <MovieSection imagenes={imageList}/> 
      </section>
       
      


      <Footer />
    </>
  )
}

export default App
