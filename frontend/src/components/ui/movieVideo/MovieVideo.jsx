import styles from "./MovieVideo.module.css";
function MovieVideo() {
  return (
    <div>
      <iframe
        className={styles.trailerIframe}
        src="https://www.unilad.com/jw-iframe.html?videoId=TBopq3P5"
        // width="100%"
        // height="100%"
      ></iframe>
    </div>
  );
}

export default MovieVideo;
