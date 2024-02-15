import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className='widgetsm'>
      <span className='widgetsmTitle'>New Join Members</span>
      <ul className='widgetsmList'>
        <li className='widgetsmListItem'>
            <img className='widgetUserImg' src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg' />
            <div className='widgetsmUser'>
                <span className='widgetsmUsername'>Anna Keller</span>
                <span className='widgetsmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetsmButton'>
                <VisibilityIcon className='widgetsmIcon' />
                Display
            </button>
        </li>
        <li className='widgetsmListItem'>
            <img className='widgetUserImg' src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg' />
            <div className='widgetsmUser'>
                <span className='widgetsmUsername'>Anna Keller</span>
                <span className='widgetsmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetsmButton'>
                <VisibilityIcon className='widgetsmIcon' />
                Display
            </button>
        </li>
        <li className='widgetsmListItem'>
            <img className='widgetUserImg' src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg' />
            <div className='widgetsmUser'>
                <span className='widgetsmUsername'>Anna Keller</span>
                <span className='widgetsmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetsmButton'>
                <VisibilityIcon className='widgetsmIcon' />
                Display
            </button>
        </li>
        <li className='widgetsmListItem'>
            <img className='widgetUserImg' src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg' />
            <div className='widgetsmUser'>
                <span className='widgetsmUsername'>Anna Keller</span>
                <span className='widgetsmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetsmButton'>
                <VisibilityIcon className='widgetsmIcon' />
                Display
            </button>
        </li>
        <li className='widgetsmListItem'>
            <img className='widgetUserImg' src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg' />
            <div className='widgetsmUser'>
                <span className='widgetsmUsername'>Anna Keller</span>
                <span className='widgetsmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetsmButton'>
                <VisibilityIcon className='widgetsmIcon' />
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
