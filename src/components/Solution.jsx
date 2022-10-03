import styles, {layout} from "../style";
import { apple,bill, google } from "../assets";
 
const Solution = () => (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
      <h3 className="font-poppins text-[16px] uppercase justify-center text-gradient tracking-[10px] sm">Solution</h3>

        <h2 className={styles.heading2}> Why Choose <br className="sm:block hidden"/>Us? </h2><br/>
        <p className={styles.paragraph}>We Provide Complete Solution For Your StartUp, Agency, Brand or Company. We Have More Than 24+ Satisfied Clients? We Are The Best Branding Solution.</p>
      </div>
   
   
    </section>
  
  )

export default Solution