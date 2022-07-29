import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (<div id='contact' className={"pageHolder "  + styles.pageHolder}>
    
        <img className={"mobileOnly " + styles.mobileOnlyImg} src='/vr img.png'></img>

        <div className={styles.westSide}>
        <h5 className={styles.title}>Let&apos;s create your virtual reality experience... <br/><span>Send me a message!</span></h5>

        <form>
            <h6 className={styles.label}>Full Name</h6>
            <input className={styles.input} placeholder="Type full name here" type="text" name="name" required></input>

            <h6 className={styles.label}>Email</h6>
            <input className={styles.input} placeholder="Type email here" type="email" name="name" required></input>

            <h6 className={styles.label}>Message</h6>
            <textarea className={styles.input + ' ' + styles.message} placeholder="Type your message here" type="email" name="name" required></textarea>
        
            <button className={"boxShadowNormal " + styles.button}>Submit</button>
        </form>
        </div>

        <div className={styles.eastSide}>
            <img src='/vr img.png'></img>
        </div>
    </div>)
}