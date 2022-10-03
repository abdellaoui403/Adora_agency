import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Clients = () => (
  <section id="clients" className={`${styles.paddingY} block sm:justify-center justify-start items-center flex-col relative`}  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
    <h3 className=" font-poppins  text-[16px] block sm:justify-center justify-start uppercase text-gradient tracking-[10px] sm">Feedback</h3>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">

      <h1 className={`${styles.heading2}`}>What people are <br className="sm:block hidden"/> Saying about us</h1>
    <div className="w-full md:mt-0 mt-6">
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card)=> (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
  </section>
);
export default Clients