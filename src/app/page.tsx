import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";




export default function Home() {
  console.log("hola mundo");
  return (
    <main >
        <Hero/>
        <Description/>
        <MainProducts/>
    </main>
  );
}
