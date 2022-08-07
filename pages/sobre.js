import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import HeadInfo from '../components/Head'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card"


export default function Sobre() {
    return (
        <div className="container mx-4 bg-amber-200	 ">
            <HeadInfo/>
            <NavBar/>
            <Header/>
            <h1>Sobre</h1>
            <p>
                Página destinada a explorar a arte árabe através de poesia, música e arquitetura.
            </p>



            <Footer />
        </div>
    )
}
