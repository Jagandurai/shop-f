"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Switching.module.scss";
import { useBookingContext } from "@/src/components/Booking/BookingContext";

const tabContent = {
  hair: {
    haircuts: {
      title: "Haircuts & Styling",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/haircut_wht2tg.webp",
      description:
        "Refresh your look with stylish haircuts and elegant styling tailored to your face shape, personality, and occasion. Our expert stylists create polished, flattering results with a professional touch.",
    },
    hairColouring: {
      title: "Hair Colouring & Highlighting",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Haircolour_fppjdo.webp",
      description:
        "Add richness, depth, and vibrance to your hair with customised colouring and highlighting services. We help you achieve a beautiful shade that complements your style and enhances your overall look.",
    },
    HairSpa: {
      title: "Hair Spa",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Hair-Spa_vvmujg.webp",
      description:
        "Rejuvenate dull, dry, or damaged hair with a nourishing hair spa experience designed to deeply condition, strengthen, and restore softness, shine, and vitality.",
    },
    HairStraightening: {
      title: "Hair Straightening",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/Hair-Straightening_yesxl9.webp",
      description:
        "Enjoy smoother, sleeker, and more manageable hair with our professional straightening services. Perfect for reducing frizz and creating a refined, polished finish.",
    },
    KeratinTreatment: {
      title: "Keratin Treatment",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Keratin_Treatment_rnjms9.webp",
      description:
        "Transform frizzy and unmanageable hair with our keratin treatment that leaves your hair smoother, shinier, and easier to style while maintaining a healthy, luminous appearance.",
    },
  },

  skin: {
    skinCare: {
      title: "D-Tan",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/D-Tan_p0gep3.webp",
      description:
        "Restore your skin’s natural brightness with our effective D-Tan treatment that helps reduce tan, refresh dull skin, and reveal a cleaner, more radiant complexion.",
    },
    FaceMasks: {
      title: "Face Masks",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/latest-Face-Masks_ozjct2.webp",
      description:
        "Treat your skin with carefully selected face masks tailored to your skin type and concerns, helping to hydrate, soothe, clarify, and revive your complexion.",
    },
    FaceCleanUp: {
      title: "Face Clean-Up",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Face-Clean-Up_jqzixv.webp",
      description:
        "Refresh your face with a gentle yet effective clean-up service that removes impurities, supports skin clarity, and gives your skin a cleaner, brighter appearance.",
    },
    Facials: {
      title: "Facials",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/facial_p4d6jg.webp",
      description:
        "Experience personalised facials designed to nourish, cleanse, and revitalise your skin, leaving it soft, glowing, and beautifully refreshed.",
    },
    HydraFacial: {
      title: "HydraFacial",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/hydrafacial_vlqrxp.webp",
      description:
        "Deep cleansing, gentle exfoliation, and intense hydration come together in our hydrafacial treatment to give your skin a smoother, fresher, and more radiant glow.",
    },
  },

  body: {
    bodyMassage: {
      title: "Manicure",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/manicure_o5q4cv.webp",
      description:
        "Treat your hands to a luxurious manicure that enhances nail beauty, improves grooming, and leaves your hands looking neat, polished, and elegant.",
    },
    Pedicure: {
      title: "Pedicure",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/pedicure_o2njos.webp",
      description:
        "Relax and refresh with our soothing pedicure service that pampers your feet while improving comfort, cleanliness, and overall appearance.",
    },
    Reflexology: {
      title: "Reflexology",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/Reflexology_iaqczh.webp",
      description:
        "Unwind with reflexology treatments designed to promote relaxation, relieve stress, and support your sense of balance and well-being.",
    },
    ThreadingWaxing: {
      title: "Threading & Waxing",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/threading_aatw3w.webp",
      description:
        "Achieve clean, defined brows and smooth skin with professional threading and waxing services delivered with care, precision, and hygiene.",
    },
    NailArt: {
      title: "Nail Art",
      imgSrc:
        "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Nail_Art_jmvkbh.webp",
      description:
        "Express your personal style with elegant and creative nail art designs crafted to add charm, beauty, and a fashionable finishing touch.",
    },
  },
};

type TabType = keyof typeof tabContent;

const TAB_DEFAULT_OPTION: Record<TabType, string> = {
  hair: "haircuts",
  skin: "skinCare",
  body: "bodyMassage",
};

const Switching = () => {
  const [activeTab, setActiveTab] = useState<TabType>("hair");
  const [activeOption, setActiveOption] = useState<string>("haircuts");
  const { openForm } = useBookingContext();

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setActiveOption(TAB_DEFAULT_OPTION[tab]);
  };

  const currentContent =
    tabContent[activeTab][
      activeOption as keyof (typeof tabContent)[typeof activeTab]
    ];

  return (
    <section className={styles.switchingContainer} aria-label="Beauty Services">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>Explore Our Services</span>
          <h2>Beauty Treatments Tailored to Your Needs</h2>
          <p>
            Discover expert hair, skin, and body care services designed to
            enhance your beauty with comfort, quality, and personalised
            attention.
          </p>
        </div>

        <nav className={styles.tabs} aria-label="Service categories">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab as TabType)}
              className={activeTab === tab ? styles.active : ""}
              aria-pressed={activeTab === tab}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        <div className={styles.contentContainer}>
          <nav className={styles.leftOptions} aria-label="Service options">
            {Object.keys(tabContent[activeTab]).map((option) => (
              <button
                key={option}
                onClick={() => setActiveOption(option)}
                className={activeOption === option ? styles.active : ""}
                aria-pressed={activeOption === option}
              >
                {
                  tabContent[activeTab][
                    option as keyof (typeof tabContent)[typeof activeTab]
                  ].title
                }
              </button>
            ))}
          </nav>

          <article className={styles.rightContent}>
            <div className={styles.tabImage}>
              <Image
                src={currentContent.imgSrc}
                alt={currentContent.title}
                width={460}
                height={360}
                className={styles.fixedImage}
                loading="lazy"
                unoptimized
              />
            </div>

            <div className={styles.tabDescription}>
              <h3>{currentContent.title}</h3>
              <p>{currentContent.description}</p>

              <button
                type="button"
                className={styles.enquiryBtn}
                onClick={openForm}
              >
                Book a Service Today
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Switching;