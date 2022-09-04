import { useDispatch, useSelector } from "react-redux";
import { setEnLang } from "../redux/actions/globalActions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Home(data) {
  // console.log(data)
  const {dir} = useSelector(state=>state.global)
  const { t,i18n } = useTranslation('about');
  const dispatch = useDispatch();
  return (
    <div dir={dir}>
      <h3>{t('title')}</h3>
    </div>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['about'])),
    },
  };
}