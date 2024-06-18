import FeaturedStories from "@/components/FeaturedStories";
import MainContent from "@/components/maincontent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainContent/>
      <FeaturedStories/>
    </div>
  );
}
