import Branner from "@/components/branner/Branner";
import Event from "@/components/Events/Event";
import Gallery from "@/components/Gallery/Gallery";
import NewsPage01 from "@/components/News/NewsPage01";
import NewsPage02 from "@/components/News/NewsPage02";
import Pagkage from "@/components/Package/Pagkage";
import ProdustList from "@/components/ProductList/ProdustList";
import Slider from "@/components/Slider/Slider";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <main className="mx-auto px-[4%]">
      <Slider />
      <ProdustList />
      <Pagkage />
      <Team />
      <NewsPage01 />
      <NewsPage02 />
      <Gallery />
      <Event />
      <Branner />
    </main>
  );
}
