import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MessageIcon from '@mui/icons-material/Message';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link className='link' to='/'>
            <li className='sidebarListItem active'>
              <HomeIcon className='sidebarIcon' />
              Home
            </li>
            </Link>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
            <li className='sidebarListItem active'>
              <PersonIcon className='sidebarIcon' />
              Users
            </li>
            </Link>
            <Link to='/products' className='link'>
            <li className='sidebarListItem'>
              <Inventory2Icon className='sidebarIcon' />
              Products
            </li>
            </Link>
            <li className='sidebarListItem'>
              <PaidIcon className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <AssessmentIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <MailIcon className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <QuestionAnswerIcon className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <MessageIcon className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <WorkOutlineIcon className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
