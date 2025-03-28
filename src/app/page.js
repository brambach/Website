import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "./components/RenderModel";
import Navigation from "./components/navigation";
import dynamic from "next/dynamic";

const Surfer = dynamic(() => import("./components/models/Surfer"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="z-0 w-full h-full object-cover object-center opacity-40" />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Surfer />
        </RenderModel>
      </div>
    </main>
  );
}
