"use client"
//#region imports
import PROJECT_DATA from "lib/data/projectData"
import Breadcrumps from "@/components/ui/Breadcrumps"
import ProjectFilter from "@/components/projectsOverlay/ProjectFilter"
import ProjectList from "@/components/projectsOverlay/ProjectList"
import ScrollTop from "@/components/ui/ScrollTop"
import Footer from "@/components/ui/Footer"

import { useEffect, useLayoutEffect, useState } from "react"
import gsap from "gsap"
//#endregion

export default function Projects() {
    const [filterTo, setFilterTo] = useState("web")
    const mobileProjects = PROJECT_DATA.filter(item => item.categoryName === "React Native")
    const webProjects = PROJECT_DATA.filter(item => item.categoryName === "HTML/CSS/Javascript" || item.categoryName === "React")
    const [loaded, setLoaded] = useState("opacity-0")

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setLoaded("opacity-100")
        const tl = gsap.timeline()
        tl.fromTo("#project", { x: -20 }, { x: 0, duration: 1 })
    }, [filterTo])


    return (
        <>
            <div id="container" className={`w-full py-10 px-4 lg:px-20 ${loaded} transition-opacity duration-1000 ease-in-out`}>
                <Breadcrumps />
                <ScrollTop />
                <ProjectFilter setFilterTo={setFilterTo} pickedFilter={filterTo} />
                <div className="mt-5 lg:mt-10">
                    {
                        filterTo === "web" &&
                        webProjects.map(item => (
                            <div id="project" key={item.categoryName}>
                                <h1 className="text-center lg:text-left font-extrabold border-b py-5">{item.categoryName}</h1>
                                <ProjectList projects={item.projects} category={filterTo} />
                            </div>
                        ))
                        ||
                        filterTo === "mobile" &&
                        mobileProjects.map(item => (
                            <div id="project" key={item.categoryName}>
                                <h1 className="text-center lg:text-left font-extrabold border-b py-5">{item.categoryName}</h1>
                                <ProjectList projects={item.projects} category={filterTo} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}