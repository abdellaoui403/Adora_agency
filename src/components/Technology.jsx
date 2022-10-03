import styles, {layout} from "../style";
import {technology} from '../constants';


const Technology = () => (
  <div>
    <section id="technology" className="flex justify-center items-center">
            <div className="flex-row sm:justify-center justify-start items-center">
      <h3 className="font-poppins  text-[16px] flex sm:justify-center justify-start uppercase text-gradient tracking-[10px] sm">TECHNOLOGY</h3>
        <h2 className={`${styles.heading2} flex sm:justify-center justify-start` }> Explore Our <br className="sm:hidden block"/>Methodology Of Work </h2><br/>
        <p className={`${styles.paragraph} flex sm:justify-center justify-start items-center sm:text-center` }>Arcu tortor, purus in mattis at sed integer faucibus.  <br className="sm:block hidden"/>Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      </div>
      </section>
       <section className={`${styles.flexCenter} container mx-auto py-12 px-8`}>
       <div  className={`grid lg:grid-cols-3 gap-x-20 gap-y-10 `}>
       {technology.map((stat)=>(
         <div key={stat.id} className="relative flex-row text-center items-center justify-center py-12 rounded-[10px] mb-2 w-[256px] h-[256px]">
              <img src={stat.icon} alt="icon" className=" flex  items-center justify-center text-center w-[100%] h-[25%] " />
              <img src={stat.bg} alt="bg" className="absolute top-10 left-11"/>
              
       <h2 className="font-poppins font-semibold flex justify-center text-white my-3 items-center">{stat.title}</h2>  
       <p className="font-poppins font-light text-[14px] opacity-70 text-white">{stat.description}</p>
       </div>
       ))}
       
       
       </div>
   
      
     
   </section>
    </div>

      )

export default Technology