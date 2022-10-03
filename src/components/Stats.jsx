import styles from '../style';
import {stats} from '../constants';


const Stats = () => (
<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  {stats.map((stat,index) => (
    <div key={stat.id} className={`flex-1 justify-center items-center flex-row m-3 ${index === stats.length - 1 ? 'border-r-0' : 'border-r-2 border-dimWhite h-6  flex items-center'}`}>
      
      <div className='sm:row flex justify-center items-center '><h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
      <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs-leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
      </div>
    </div>
  ))}
</section>
);

export default Stats