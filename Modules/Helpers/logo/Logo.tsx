import logo from '../../../assets/images/logo.svg'
import styles from './logo.module.css'

interface  Props{
    classes?:any
}

export default  function Logo({classes}:Props){
    return (
        <div className={`${classes} ${styles.logoContainer}`}>
            <img src={logo.src} alt='logo'/>
        </div>
    )
}