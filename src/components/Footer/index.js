import styles from './Footer.module.scss';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';

const iconeProps = { 
    color: 'white',
    size: 24
}

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconeProps}/>
                <FaInstagram {...iconeProps}/>
                <FaLinkedin {...iconeProps}/>
                <FaGithub {...iconeProps}/>
            </div>
            <span>
                Desenvolvidor por Kaio Vinicius de Oliveira Garcia
            </span>
        </footer>
    )
}