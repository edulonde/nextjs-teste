import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import HeadInfo from '../components/Head'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card"


export default function Home() {
    return (
        <div className="container mx-4 bg-amber-100	">
            <HeadInfo/>
            <NavBar/>
            <Header/>
            <div className="flex justify-content-center">
                <Card
                    card_title="Poemas Suspensos"
                    card_description="Os mais importantes e expressivos poemas da literatura árabe pré-islâmica"
                />
            </div>


            <Footer/>
        </div>
    )
}
