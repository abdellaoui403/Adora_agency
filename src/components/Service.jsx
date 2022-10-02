import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-dimWhite text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)
const Service = () => {
  return (
    <section id="services" className={layout.section}>
      <div className={layout.sectioninfo}>
        <h3 className="font-poppins text-[16px] uppercase text-gradient tracking-[10px] sm">Services</h3>
        <h2 className={styles.heading2}>
        Perfect Solution <br className="sm:block hidden"/>For Your Business
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We Provide Complete Solution For Your StartUp, Agency, Brand or Company. We Have More Than 24+ Satisfied Clients? We Are The Best Branding Solution.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id}{...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Service