import styles from "./MovieVideo.module.css";

//import default iframes iframeUrls
import { iframeUrls } from "../../common/data/iframesUrls";

function MovieVideo({ trailerUrl }) {
  function isValidUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  }
  const isValidTrailerUrl = isValidUrl(trailerUrl);
  return (
    <div>
      {isValidTrailerUrl ? (
        <iframe
          className={styles.trailerIframe}
          src={trailerUrl}
          // width="100%"
          // height="100%"
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          alt="no iframe "
        ></iframe>
      ) : (
        <div>
          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={styles.trailerIframeError}
          >
            Invalid trailer URL!
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieVideo;
