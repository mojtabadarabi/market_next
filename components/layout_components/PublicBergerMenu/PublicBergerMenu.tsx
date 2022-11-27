import {slide as Menu} from 'react-burger-menu'
import styles from './menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../../redux/actions/globalActions";
import {useTranslation} from "next-i18next";

export default function PublicBergerMenu() {

    const dispatch = useDispatch();
    const {isMenuOpen, dir} = useSelector(state => state.global)
    const {t} = useTranslation('common')

    return (
        <Menu onClose={() => dispatch(toggleMenu(false))} customBurgerIcon={false} right={dir === 'rtl'}
              className={styles.menu} width={280} isOpen={isMenuOpen}>
            <div className={styles.container}>
                <h4>{t('app-name')}</h4>
            </div>
        </Menu>
    )
}