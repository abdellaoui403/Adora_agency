import styles, {layout} from "../style";
import {portfolio} from '../constants';

const Portfolio = () => (
  <div>
    <section id="portfolio" className="flex justify-center items-center">
            <div className="flex-row justify-center items-center">
      <h3 className="font-poppins  text-[16px] flex justify-center uppercase text-gradient tracking-[10px] sm">Portfolio</h3>
        <h2 className={`${styles.heading2} flex justify-center` }> Explore Our <br className="sm:hidden block"/>Recent Work </h2><br/>
        <p className={`${styles.paragraph} flex justify-center items-center text-center` }>Arcu tortor, purus in mattis at sed integer faucibus.  <br className="sm:block hidden"/>Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      </div>
      
      </section>
      <section className={`${styles.flexCenter} container mx-auto py-12 px-8`}>
      <div  className={`grid lg:grid-cols-3 gap-x-20 gap-y-10 `}>
      {portfolio.map((stat)=>(
        <div key={stat.id} className="flex  items-center justify-center  bg-discount-gradient rounded-[10px] mb-2 w-[256px] h-[256px]">
      <img src={stat.logo} alt="vochlogo" className=" flex justify-center items-center "/>
      </div>
      ))}
      
      
      </div>
  
     
    
  </section>
  </div>
  )

export default Portfolio