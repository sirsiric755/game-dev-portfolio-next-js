import styles from '../styles/Home.module.css'

export default function Home() {
    return (<div id='home' className={styles.pageHolder}>

        <div className={styles.navBar}>
            <ul>
                <li><a onClick={()=>{document.getElementById('home').scrollIntoView()}}><h6>Home</h6></a></li>
                <li><a onClick={()=>{document.getElementById('showcase').scrollIntoView()}}><h6>Work</h6></a></li>
                <li><a onClick={()=>{document.getElementById('contact').scrollIntoView()}}><h6>Contact</h6></a></li>
            </ul>
        </div>

            <div className={styles.middleDiv}>
                <div className={styles.videoHolder}>
                    <div className={styles.videoHolderChild}>
                        <img src='/vr guy.gif'></img>
                        <img className={styles.arrow} src='/arrow.png'></img>
                        <h6 className={styles.meTesting}>Me testing new game</h6>
                    </div>
                </div>
                <div className={styles.descHolder}>
                    <h2>Hello World!</h2>
                    <h5>I&apos;m Anto, a VR game developer for Oculus Quest 2.</h5>

                    <div className={styles.tools}>
                        <a><img src="unity.png"></img></a>
                        <a><img src="meta-logo.png"></img></a>
                    </div>
                </div>
            </div>
    </div>);
}