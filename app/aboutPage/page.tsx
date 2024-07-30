import { infoPersonal } from "./../../lib/constants/InfoPersonal";
import COLOR_PALETTE from "../../lib/constants/colorPalette";
import Breadcrumps from "../../components/ui/BreadCrumps";
import Image from "next/image";
import { EXPERIENCES } from "../../lib/data/experienceData";
import Footer from "./../../components/ui/Footer"
import Skills from "../../components/list/Skills";
import Experience from "../../components/list/Experience";

export default function AboutMe() {
    return (
        <>
            <div className="w-full px-10 lg:px-20 py-10" style={{ backgroundColor: COLOR_PALETTE.white }}>
                <Breadcrumps />
                <div className="mt-8 lg:mt-10 ">
                    <h1 style={{ color: COLOR_PALETTE.blue800 }} className=" font-bold text-center lg:text-left">{infoPersonal.name}</h1>
                    <h5 style={{ color: COLOR_PALETTE.blue700 }} className="text-center lg:text-left">{infoPersonal.position}</h5>
                </div>
                <div className="flex items-center flex-col lg:flex-row gap-10 mt-10 ">
                    <Image className="rounded-full" alt="Mustafa Zırhlı" src={"/myself.jpeg"} height={180} width={180} />
                    <p className="flex text-justify">{infoPersonal.summaryText}</p>
                </div>
                <div className="mt-10 gap-5 flex flex-col">
                    <Skills />
                    <Experience data={EXPERIENCES.experience} />
                </div>
            </div >
            <Footer />
        </>
    )
}