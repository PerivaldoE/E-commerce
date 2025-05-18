import styles from './Header.module.css'
import { FaFacebookF, FaInstagram, FaUser, FaShoppingCart } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Header() {
    
    return(
        <header className={styles.header}>

        {/* Barra Superior */}
            <div className={styles.barraSuperior}>
                <div className={styles.leftLinks}>
                    <a href="#">Blog Naturayo</a>
                    <a href="#">Meus Favoritos</a>
            </div>
                <div className={styles.icons}>
                    <span><FiPhone size={14} /> (00)0-00000000</span>
                    <a href="#"><FaFacebookF size={14} /></a>
                    <a href="#"><FaInstagram size={14} /></a>
                </div>
            </div>

            {/* Barra Central */}
                <div className={styles.barraCentral}>
                    <img src="/logo.png" alt="Logo Naturayo" className={styles.logo} />
                    <input type="text" placeholder="O que deseja procurar?" className={styles.searchInput} />
                    <div className={styles.accountCart}> <span><FaUser size={16} /> MINHA CONTA</span> <span><FaShoppingCart size={16} /> 0</span></div>  
                </div>
            {/* Main nav */}
                <nav className={styles.mainNav}>
                    <a href="#">HOME</a>
                    <a href="#">SOBRE </a>
                    <a href="#">PRODUTOS </a>
                    <a href="#">EXPORTAÇÃO</a>
                    <a href="#">VEILING</a>
                    <a href="#">INSPIRAÇÕES</a>
                    <a href="#">CONTATO</a>
                </nav>
        </header>

    );
}

export default Header