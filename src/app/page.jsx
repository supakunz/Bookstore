import Pagkage from "@/components/Package/Pagkage";
import ProdustList from "@/components/ProductList/ProdustList";
import Slider from "@/components/Slider/Slider";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <section className="mx-auto px-[4%]">
      <Slider />
      <ProdustList />
      <Pagkage />
      <Team />
    </section>
  );
}
