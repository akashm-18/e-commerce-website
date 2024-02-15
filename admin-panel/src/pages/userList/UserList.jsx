import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
    const [data,setData] = useState(userRows)

    const deleteUser = (id) => {
        const newUsers = data.filter(singleUser => singleUser.id !== id)
        setData(newUsers)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200 , renderCell : (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
          },
          {
            field : "action",
            headerName : "Action" ,
            width : 150,
            renderCell : (params) => {
                return (
                    <div className='userListEditButtons'>
                        <Link to={'/users/' + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelete' onClick = {() => deleteUser(params.row.id)} />
                    </div>
                )
            }
          }
      ];
      
      
  return (
    <div className='userList'>
      <DataGrid rows={data} columns={columns} 
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 8 },
        },
      }}
      pageSizeOptions={[0, 10]}
      checkboxSelection />
    </div>
  )
}

export default UserList
