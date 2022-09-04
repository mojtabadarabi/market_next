import { useDispatch, useSelector } from "react-redux";
import { setEnLang } from "../redux/actions/globalActions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Home(data) {
  // console.log(data)
  const {dir} = useSelector(state=>state.global)
  const { t,i18n } = useTranslation('mainPage');
  const dispatch = useDispatch();
  return (
    <div dir={dir}>
      <h3>{t('home')}</h3>

    </div>
  );
}

export async function getStaticProps(ctx) {
  console.log(ctx.locale)
  return {
    props: {
      // ...ctx.lang
      ...(await serverSideTranslations(ctx.locale, ['common','mainPage'])),
    },
  };
}