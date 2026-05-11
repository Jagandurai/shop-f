import styles from "./Content.module.scss";
import { serviceContent } from "@/src/utils/serviceContent";

const Content1 = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {serviceContent.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.container} ${
              index % 2 !== 0 ? styles.reverse : ""
            }`}
          >
            <div className={styles.leftContent}>
              <div className={styles.videoFrame}>
                <video
                  className={styles.video}
                  src={item.videoUrl}
                  loop
                  autoPlay
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className={styles.rightContent}>
              <span className={styles.tag}>Premium Beauty Care</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content1;