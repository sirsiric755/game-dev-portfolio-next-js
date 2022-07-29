import styles from '../styles/about.module.css'

export default function About(){
    return (<div id='about' className={'pageHolder ' + styles.pageHolder}>
        <div className={'middleDiv ' + styles.middleDiv} >
        <div className={'leftDiv ' + styles.leftDiv} >
            <img className = "boxShadowNormal borderRadiusNormal" src='/profile.png'></img>
        </div>
        <div className={'rightDiv ' + styles.rightDiv}>
            <h5>About me</h5>
            <p1>My name is Anto Pinjatic and I come from Montenegro. Currently I live in California where I&apos;m studying Computer Science. I have over 4 years of experience using Unity Engine. I believe in power of virtual reality and its future.</p1>
        </div>
    </div></div>)
}