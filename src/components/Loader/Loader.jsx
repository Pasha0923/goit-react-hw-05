import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#FF5F15"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
export default Loader;
