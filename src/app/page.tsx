import FeaturedStories from "@/components/FeaturedStories";
import LatestStories from "@/components/LatestStories";
import MainContent from "@/components/maincontent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainContent/>
      <FeaturedStories/>
      <LatestStories/>
    </div>
  );
}
