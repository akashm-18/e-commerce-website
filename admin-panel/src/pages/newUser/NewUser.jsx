import './newuser.css'

const NewUser = () => {
  return (
    <div className='newuser'>
      <h1 className="newuserTitle">New User</h1>
      <form className="newuserForm">
        <div className="newuserItem">
          <label>Username</label>
          <input type="text" placeholder='john' />
        </div>
        <div className="newuserItem">
          <label>Full Name</label>
          <input type="text" placeholder='John Smith' />
        </div>
        <div className="newuserItem">
          <label>Email</label>
          <input type="text" placeholder='john@gmail.com' />
        </div>
        <div className="newuserItem">
          <label>Password</label>
          <input type="password" placeholder='password' />
        </div>
        <div className="newuserItem">
          <label>Phone</label>
          <input type="number" placeholder='+1 959994 9599' />
        </div>
        <div className="newuserItem">
          <label>Address</label>
          <input type="text" placeholder='Tenkasi | India' />
        </div>
        <div className="newuserItem">
          <label>Gender</label>
          <div className="newuserGender">
            <input type="radio" name='gender' id='male' value='male' />
            <label for="male">Male</label>
            <input type="radio" name='gender' id='female' value='female' />
            <label for="female">Female</label>
            <input type="radio" name='gender' id='other' value='other' />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newuserItem">
          <label>Active</label>
          <select name="active" id="active" className='newuserSelect'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
        <button className='newuserButton'>Create</button>
    </div>
  )
}

export default NewUser
