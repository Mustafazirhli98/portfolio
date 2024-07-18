import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import COLOR_PALETTE from "../lib/constants/colorPalette";

export default function Footer({ visibility }) {
    return (
        <div className={`flex flex-col visible p-1 ${visibility}`} style={{ backgroundColor: COLOR_PALETTE.blue, color: COLOR_PALETTE.light }}>
            <h1 className="text-center border-b border-b-[#95a5a6] p-2">CONTACT</h1>
            <ul className="mt-2">
                <li className="flex text-xs mt-2">
                    <FaGithub className="w-5 h-5 mr-2" />
                    <Link className="" href={"https://github.com/Mustafazirhli98"}>https://github.com/Mustafazirhli98</Link>
                </li>
                <li className="flex mr-5 text-xs mt-2">
                    <FaLinkedin className="w-5 h-5 mr-2" />
                    <Link href={"https://www.linkedin.com/in/mustafazirhli/"}>linkedin.com/in/mustafazirhli/</Link>
                </li>
                <li className="flex text-xs mt-2">
                    <IoMail className="w-5 h-5 mr-2" />
                    <Link href="mailto:mustafazirhli98@gmail.com">mustafazirhli98@gmail.com</Link>
                </li>
            </ul>
        </div>
    )
}