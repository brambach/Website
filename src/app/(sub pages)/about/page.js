import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/app/components/about";



export default function Home() {
    return (
        <>
            <Image src={bg} alt="background-image" className="z-0 fixed top-0 left-0 w-full h-full object-cover object-center opacity-20" />

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="font-bold text-9xl text-accent">Bryce Rambach</h1>
                    <p className="font-light text-foreground text-ls">Meet blah blah behind this portfolio</p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}