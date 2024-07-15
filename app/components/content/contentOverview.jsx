import Link from "next/link";
import styles from "./content.module.css"

export default function ContentOverview({ type, link, img }) {
    return (
        <div className={styles.container}>
            {/* <Link className={`${img} ${styles.contentLink}`} href={link}> */}
            <Link className={`${img} ${styles.contentLink}`} href={link}>
                {type}
            </Link>
        </div>
    )

}
