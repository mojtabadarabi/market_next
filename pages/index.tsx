import { useDispatch, useSelector } from "react-redux";
import { setEnLang } from "../redux/actions/globalActions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import { UseFetch } from "../hooks/UseFetch";
import useAxios from "../httpServices/Axios/useAxios";
import PublicBergerMenu from "../components/layout_components/PublicBergerMenu/PublicBergerMenu";


export default function Home(data) {
  console.log(data.products)
  const { dir } = useSelector(state => state.global)
  const { t, i18n } = useTranslation('mainPage');
  const dispatch = useDispatch();


  return (
    <div dir={dir}>
      <h3>{t('home')}</h3>


    </div>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      // ...ctx.lang
      // products: await UseFetch('http://localhost:8080/api/products'),
      ...(await serverSideTranslations(ctx.locale, ['common', 'mainPage'])),
    },
  };
}