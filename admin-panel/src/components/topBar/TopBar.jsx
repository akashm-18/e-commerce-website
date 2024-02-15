import React from 'react'
import './topBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topbarLeft'>
            <Link to='/' className='link'>
            <span className='logo'>Admin</span>
            </Link>
        </div>
        <div className='topbarRight'>
            <div className='topBarIconContainer'>
                <NotificationsIcon />
                <span className='topIconBadge'>2</span>
            </div>
            <div className='topBarIconContainer'>
                <LanguageIcon />
                <span className='topIconBadge'>2</span>
            </div>
            <div className='topBarIconContainer'>
                <SettingsIcon />
            </div>
            <img src="https://pbs.twimg.com/profile_images/1618942350323257344/0mPZ2K7z_400x400.jpg" alt="" className='topRightAvatar' />
        </div>
      </div>
    </div>
  )
}

export default TopBar
