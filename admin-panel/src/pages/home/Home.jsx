import Chart from '../../components/chart/Chart.jsx'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx'
import WidgetLg from '../../components/widgetLg/WidgetLg.jsx'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} dataKey="Active User" title="User Analytics" grid/>
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
