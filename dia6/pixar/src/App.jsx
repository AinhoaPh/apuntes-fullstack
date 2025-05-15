import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import MovieSection from './components/movies-main/MovieSection'
import Footer from './components/footer/Footer'
import MovieCard from './components/movies-main/MovieCard'
import { movie, gallery, imageList, moviePrincipal } from './data/data'
import { React } from 'react'
import FooterPrivacy from './components/footer/FooterPrivacy'
import { linksPrivacy } from './data/footerData'
import "./css/App.css";





function App() {

  return (
    <>

      <Header />
      <main className="main">
        <Hero />
        <section >
          <MovieSection movies={moviePrincipal} />
        </section>
        <section>
          <MovieSection movies={gallery} />
        </section>
        <section>
          <MovieSection movies={movie} />
        </section>
        <section >
          <MovieSection movies={imageList} />
        </section>
      </main>



      <Footer />
      <section >
        <FooterPrivacy items={linksPrivacy} />
      </section>
    </>
  )
}

export default App
