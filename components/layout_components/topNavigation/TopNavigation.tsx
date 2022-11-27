import styles from './topNav.module.css'
import Logo from "../../../Modules/Helpers/logo/Logo";
import {ImSearch} from 'react-icons/im'
import {MdOutlineShoppingCart} from 'react-icons/md'
import PublicBergerMenu from "../PublicBergerMenu/PublicBergerMenu";
import React from "react";
import BurgerBtn from "../PublicBergerMenu/BurgerBtn";
import LangSelect from "../../langSelect/LangSelect";


export default  function TopNavigation(){
    return (
        <nav className={styles.navContainer}>
            <div className={styles.searchLogoContainer}>
                <BurgerBtn classes={styles.burger}/>
                <Logo classes={styles.logo}/>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type='text' placeholder='Search'/>
                    <button>
                    <ImSearch/>

                    </button>
                </div>
            </div>
            <div className={styles.actionBtnsContainer}>
                <LangSelect/>
                <button className={styles.shoppingIcon}>
                    <MdOutlineShoppingCart/>
                </button>
                <button className={styles.signUpBtn}>
                    ورود / ثبت نام
                </button>
            </div>
        </nav>
    )
}