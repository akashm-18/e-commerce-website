import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,415</span>
            <span className='featuredMoneyRate'>-11.4 <ArrowDownwardIcon className='featuredIcon negative' /></span>
        </div>
        <span className='featuredSub'>Compared to Last Month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,005</span>
            <span className='featuredMoneyRate'>-1.4 <ArrowDownwardIcon className='featuredIcon negative' /></span>
        </div>
        <span className='featuredSub'>Compared to Last Month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$3,000</span>
            <span className='featuredMoneyRate'>+2  .6 <ArrowUpwardIcon className='featuredIcon' /></span>
        </div>
        <span className='featuredSub'>Compared to Last Month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
