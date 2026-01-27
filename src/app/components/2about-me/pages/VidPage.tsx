import styles from "./vidPage.module.css";

export default function VidPage() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.frameVideo}`}>
          <iframe
            width="840" height="472"
            src="https://www.youtube.com/embed/ScMzIvxBSi4?si=2TImH9n0F4AsR6u0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>
      </div>
    </div>
  )
}