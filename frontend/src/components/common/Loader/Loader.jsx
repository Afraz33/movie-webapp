import LoaderStyles from "./Loader.module.css";

function Loader() {
  return (
    <div className={LoaderStyles.loaderContainer}>
      <div className={LoaderStyles.shape}></div>
    </div>
  );
}

export default Loader;
