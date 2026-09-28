import SharedLook from "./SharedLook";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://lovelylooks.in"
).replace(/\/$/, "");

const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "ddkcbd93v";

const isValidSlug = (slug) => /^[A-Za-z0-9\_-]+$/.test(slug || "");

const buildImageUrl = (slug, transform) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/gallery/${slug}`;

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!isValidSlug(slug)) return { title: "Lovely Looks" };

  const ogImage = buildImageUrl(slug, "c_limit,w_1200,q_auto,f_jpg");
  const pageUrl = `${SITE_URL}/look/${slug}`;

  return {
    title: "Lovely Looks | Makeup & Hairstyle",
    description: "Check out this look from Lovely Looks.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Lovely Looks | Makeup & Hairstyle",
      description: "Check out this look from Lovely Looks.",
      url: pageUrl,
      siteName: "Lovely Looks",
      images: [{ url: ogImage, width: 1200 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lovely Looks",
      images: [ogImage],
    },
  };
}

export default async function LookPage({ params }) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    return <p style={{ padding: 40, textAlign: "center" }}>Image not found.</p>;
  }

  return <SharedLook slug={slug} />;
}