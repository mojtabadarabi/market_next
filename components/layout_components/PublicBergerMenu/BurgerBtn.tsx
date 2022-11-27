import {GiHamburgerMenu} from 'react-icons/gi'
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../../redux/actions/globalActions";
import styles from './menu.module.css'

interface  Props{
    classes:any
}

export default function BurgerBtn(props:Props){
    const {isMenuOpen} =useSelector(state => state.global)
    const dispatch = useDispatch();
    console.log(isMenuOpen)
    console.log('open')
    return (
        <button className={`${styles.menu} ${props.classes}`} onClick={()=>dispatch(toggleMenu(!isMenuOpen))}>
            <GiHamburgerMenu/>
        </button>
    )
}