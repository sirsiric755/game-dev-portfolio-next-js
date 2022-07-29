import styles from '../styles/Showcaseproject.module.css'

export default function ShowcaseProject({title, desc, tag, imgUrl}){
    return (
        <div className={styles.project}>
            <div className={styles.slideshow}>
                <a><img className="boxShadowNormal" src={imgUrl}></img></a>
            </div>
                <a><p1 className={styles.tag}>{tag}</p1></a>

                <a><h6 className={styles.projectTitle}>{title}</h6></a>
                <p1 className={styles.desc}>{desc}</p1>
        </div>)
}