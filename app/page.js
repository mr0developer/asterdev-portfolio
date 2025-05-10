import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import ClientComponents from "./components/homepage/client-components";

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return []; // Return empty array if fetch fails
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Experience />
      <ClientComponents blogs={blogs} />
      <Education />
      <ContactSection />
    </main>
  );
}