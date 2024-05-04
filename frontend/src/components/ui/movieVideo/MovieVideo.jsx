import styles from "./MovieVideo.module.css";

//import default iframes iframeUrls
import { iframeUrls } from "../../common/data/iframesUrls";

function MovieVideo({ index }) {
  return (
    <div>
      <iframe
        className={styles.trailerIframe}
        src={iframeUrls[index].src}
        // width="100%"
        // height="100%"
      ></iframe>
    </div>
  );
}

export default MovieVideo;
