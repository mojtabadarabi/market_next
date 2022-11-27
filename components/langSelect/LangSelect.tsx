import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {US, IR} from 'country-flag-icons/react/3x2'
import {setLang} from "../../redux/actions/globalActions";
import i18next from "i18next";
import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

export default function LangSelect() {
    const { t, i18n } = useTranslation()
    const {lang} = useSelector(state => state.global)
    const dispatch = useDispatch()
    const router = useRouter()
    const [age, setAge] = React.useState('');

    const langs = [
        {lang: 'fa', dir: 'rtl'},
        {lang: 'en', dir: 'ltr'},
    ]
    console.log(lang)
    console.log('lang')
    const handleRoute = (locale) => router.push(router.asPath, router.asPath, { locale: locale })
    const handleChange = (event: any) => {
        const foundedLang = langs.find((lang: any) => lang.lang === event.target.value)
        i18n.changeLanguage(foundedLang.lang)
        handleRoute(foundedLang.lang)
        dispatch(setLang(foundedLang.lang, foundedLang.dir))
    };

    return (
        <Select
            value={lang}
            onChange={handleChange}
            sx={{height:'3em'}}
        >
            <MenuItem value={'fa'} >
                <IR style={{width:'2em',height:'2em'}}/>
            </MenuItem>
            <MenuItem value={'en'} ><US style={{width:'2em',height:'2em'}}/></MenuItem>
        </Select>
    )
}