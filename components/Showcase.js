import styles from '../styles/showcase.module.css'
import ShowcaseProject from './ShowcaseProject'
import { useState, useRef, useEffect } from 'react'

export default function Showcase(){
    const [loadMore, setLoadMore] = useState(false);
    const[mobileView, setMobile] = useState(false);
    const btnRef = useRef(null);

    const handleResize = () =>{
        if(window.innerWidth <= 800){
            setMobile(true);
        }else{
            setMobile(false);
        }
    }

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
    });
    
    return (<div id='showcase' className={'pageHolder ' + styles.pageHolder}>
        <h5 className={'title ' + styles.title}>Projects Showcase</h5>        
        <p1 className={'titleDesc ' + styles.titleDesc}>Axe Throwing VR is an all-ages arcade VR exclusive with official Axe Throwing Rules and Gameplay.</p1>
    
        <div className={styles.holder}>
            <div className={styles.projectsHolder}>
                    <ShowcaseProject title="Axe Throwing VR" imgUrl="/showcase/Axe Throwing VR.jpeg" tag="Oculus Quest 2" desc="Axe Throwing VR is an all-ages arcade VR exclusive with official Axe Throwing Rules and Gameplay."></ShowcaseProject>
                    <ShowcaseProject title="Fairs Are Fun" imgUrl="/showcase/Fairs Are Fun - Carnival VR.png" tag="Oculus Quest 2" desc="Fun and exciting carnival game for all ages. Brings back nostalgic memories we left at old school theme parks."></ShowcaseProject>
                    <ShowcaseProject title="Fall Boys: Ultimate Race Tournament Multiplayer" imgUrl="/showcase/Fall Boys - Ultimate Tournament Knockdown.jpeg" tag="Google Play Store" desc="Fall Boys was trendy multiplayer game which allowed up to 30 players in same room. It has over 150 000 downloads on Google Play Store!"></ShowcaseProject>
            </div>

            {(loadMore || !mobileView) && <div className={styles.projectsHolder }>
                    <ShowcaseProject title="Math World VR" imgUrl="/showcase/Math World VR.png" tag="Oculus Quest 2" desc="Math World VR is an educational math game that is jam packed with fun mini-games with challenging math problems for the whole family to enjoy!"></ShowcaseProject>
                    <ShowcaseProject title="Memory Cards VR" imgUrl="/showcase/Memory Cards VR.png" tag="Oculus Quest 2" desc="Perfect educational game for kids and adults who want to improve their memory!"></ShowcaseProject>
            </div>
            }

            <button ref={btnRef} className={'mobileOnly boxShadowNormal ' + styles.loadMoreBtn} onClick={(clickEv)=>{ setLoadMore(loadMore => !loadMore)}}><p1>{loadMore ? "Show Less" : "Load More"}</p1></button>
        </div>
    </div>)
}