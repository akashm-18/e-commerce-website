import './widgetLg.css'

const WidgetLg = () => {
  const Button = ({type}) => {
    return <button className={'widgetlgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetlg'>
      <h3 className='widgetlgTitle'>Latest Transactions</h3>
      <table className='widgetlgTable'>
        <tr className='widgetlgTr'>
          <th className='widgetlgTh'>Customer</th>
          <th className='widgetlgTh'>Date</th>
          <th className='widgetlgTh'>Amount</th>
          <th className='widgetlgTh'>Status</th>
        </tr>
        <tr className='widgetlgTr'>
          <td className='widgetlgUser'>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
            alt="" className='widgetlgImg' />
            <span className='widgetlgName'>Susan Carol</span>
          </td>
          <td className='widgetlgDate'>13 Feb 2024</td>
          <td className='widgetlgAmount'>$132.00</td>
          <td className='widgetlgStatus'> <Button type="Approved" /> </td>
        </tr>

        <tr className='widgetlgTr'>
          <td className='widgetlgUser'>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
            alt="" className='widgetlgImg' />
            <span className='widgetlgName'>Susan Carol</span>
          </td>
          <td className='widgetlgDate'>13 Feb 2024</td>
          <td className='widgetlgAmount'>$132.00</td>
          <td className='widgetlgStatus'> <Button type="Declined" /> </td>
        </tr>

        <tr className='widgetlgTr'>
          <td className='widgetlgUser'>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
            alt="" className='widgetlgImg' />
            <span className='widgetlgName'>Susan Carol</span>
          </td>
          <td className='widgetlgDate'>13 Feb 2024</td>
          <td className='widgetlgAmount'>$132.00</td>
          <td className='widgetlgStatus'> <Button type="Pending" /> </td>
        </tr>

        <tr className='widgetlgTr'>
          <td className='widgetlgUser'>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
            alt="" className='widgetlgImg' />
            <span className='widgetlgName'>Susan Carol</span>
          </td>
          <td className='widgetlgDate'>13 Feb 2024</td>
          <td className='widgetlgAmount'>$132.00</td>
          <td className='widgetlgStatus'> <Button type="Approved" /> </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
