import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  const [data,setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 200 , renderCell : (params) => {
        return (
            <div className='productListItem'>
                <img className='productListImg' src={params.row.img} alt="" />
                {params.row.name}
            </div>
        )
    } },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 160,
      },
      {
        field : "action",
        headerName : "Action" ,
        width : 150,
        renderCell : (params) => {
            return (
                <div className='productListEditButtons'>
                    <Link to={'/product/' + params.row.id}>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon className='productListDelete' onClick = {() => handleDelete(params.row.id)} />
                </div>
            )
        }
      }
  ];

  return (
    <div className='productList'>
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

export default ProductList
