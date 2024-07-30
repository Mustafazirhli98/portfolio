import Link from "next/link";
import styles from "./content.module.css"

export default function ContentOverview({ type, link, boxColor, textColor }) {
    return (
        <div className={styles.container}>
            <Link className={`${styles.contentLink}`} style={{ backgroundColor: boxColor, color: textColor }} href={link}>
                {type}
            </Link>
        </div >
    )

}
