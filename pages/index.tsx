import { useDispatch, useSelector } from "react-redux";
import { setEnLang } from "../redux/actions/globalActions";

export default function Home(data) {
  console.log(data)
  const {dir} = useSelector(state=>state.global)
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

export const getServerSideProps=(ctx)=>{
  // console.log(ctx)
  return {
    props:{
      ...ctx.lang
    }
  }
}