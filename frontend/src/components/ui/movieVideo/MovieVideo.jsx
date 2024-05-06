import styles from "./MovieVideo.module.css";

//import default iframes iframeUrls
import { iframeUrls } from "../../common/data/iframesUrls";

function MovieVideo({ trailerUrl }) {
  console.log(trailerUrl);
  return (
    <div>
      <iframe
        className={styles.trailerIframe}
        src={trailerUrl}
        // width="100%"
        // height="100%"
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieVideo;
