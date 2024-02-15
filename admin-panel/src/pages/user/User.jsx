import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import './user.css'
import { Link } from 'react-router-dom'
const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
            <button className="userAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="displayUser">
            <div className="displayUserTop">
                <img 
                src="https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg" 
                alt="" className='displayUserImg' />
                <div className="displayUserTopTitle">
                    <span className="displayUserTopUsername">
                        Anna Becker
                    </span>
                    <span className="displayUserTopUserTitle">
                        Software Engineer
                    </span>
                </div>
            </div>
            <div className="displayUserBottom">
                <span className="displayUserTitle">Account Details</span>
                <div className="displayUserInfo">
                    <PermIdentity className='displayUserIcon' />
                    <span className="displayUserInfoTitle">annabeck99</span>
                </div>
                <div className="displayUserInfo">
                    <CalendarToday className='displayUserIcon' />
                    <span className="displayUserInfoTitle">17.12.2002</span>
                </div>
                <span className="displayUserTitle">Contact Details</span>
                <div className="displayUserInfo">
                    <PhoneAndroid className='displayUserIcon' />
                    <span className="displayUserInfoTitle">+1 849584 4984</span>
                </div>
                <div className="displayUserInfo">
                    <MailOutline className='displayUserIcon' />
                    <span className="displayUserInfoTitle">annabeck99@gmail.com</span>
                </div>
                <div className="displayUserInfo">
                    <LocationSearching className='displayUserIcon' />
                    <span className="displayUserInfoTitle">annabeck99</span>
                </div>
            </div>
        </div>
        <div className="updateUser">
        <span className="userUpdateTitle">Edit</span>
        <form className='userUpdateForm'>
            <div className="userUpdateLeft">
                <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder='annabeck99' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Anna Beck' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="text" placeholder='annabeck99@gamil.com' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+12 12 84 8484' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder='Chennai | India' className='userUpdateInput' />
                </div>
            </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img 
                    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" 
                    alt="" className='userUpdateImg' />
                    <label htmlFor="file"> <Publish className='userUpdateIcon' /> </label>
                    <input type="file" id='file' style={{display : "none"}} />
                </div>
                <button className='userUpdateButton'>Update</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default User
