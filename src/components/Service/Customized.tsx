import Image from "next/image";
import styles from "./Customized.module.scss";

const services = [
  {
    icon: "/topnotch.webp",
    title: "Top-Notch Quality",
    description:
      "Our bridal services are delivered with premium-quality products, refined techniques, and exceptional attention to every detail.",
  },
  {
    icon: "/makeover.webp",
    title: "Personalised Makeup",
    description:
      "Every bridal look is thoughtfully customised to match your features, outfit, skin tone, and wedding style with elegance.",
  },
  {
    icon: "/adept.webp",
    title: "Experienced Stylists",
    description:
      "Our skilled beauty professionals bring expertise, creativity, and care to ensure a flawless and confident bridal experience.",
  },
  {
    icon: "/route.webp",
    title: "Available Across Locations",
    description:
      "We provide trusted bridal beauty services across Tamil Nadu and Andhra with personalised care and professional support.",
  },
];

const Customized = () => {
  return (
    <section className={styles.container} aria-labelledby="services-title">
      <div className={styles.inner}>
        <span className={styles.tag}>Our Services</span>
        <h2 id="services-title" className={styles.subtitle}>
          Bridal Services Customized for You
        </h2>
        <p className={styles.intro}>
          Discover bridal beauty services designed around your style, comfort,
          and special occasion needs. From personalised makeup to expert
          styling, every detail is handled with premium care.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={80}
                  height={80}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customized;