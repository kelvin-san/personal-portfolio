import styles from "./vidPage.module.css";

const videoURL = process.env.NEXT_PUBLIC_VIDEO_URL;

export default function VidPage() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.frameVideo}`}>
          <iframe
            width="840" height="472"
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>
      </div>
    </div>
  )
}