import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";
import ProjectList from "../../components/projects";
import RenderModel from "../../components/RenderModel";


export default function Home() {
    return (
        <>
            <Image src={bg} alt="background-image" className="z-0 fixed top-0 left-0 w-full h-full object-cover object-center opacity-20" />

            <ProjectList projects={projectsData} />


        </>
    );
}
