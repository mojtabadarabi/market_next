import { useDispatch, useSelector } from "react-redux";
import { setEnLang } from "../redux/actions/globalActions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home(data) {
  console.log(data)
  const {dir} = useSelector(state=>state.global)
  const { t } = useTranslation('common');
  console.log(t('title'))
  const dispatch = useDispatch();
  return (
    <div dir={dir}>
      <h3>welcome</h3>
      <button onClick={()=>dispatch(setEnLang())}>
        lang
      </button>
    </div>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      // ...ctx.lang
      ...(await serverSideTranslations(ctx.locale, ['common'])),
    },
  };
}