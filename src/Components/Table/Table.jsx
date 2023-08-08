import Trow from "./Trow"


const Table = ({dataSet,DeleteItem,updateItem}) => {
  return (
    <table className="table table-responsive">
    <thead>
      <tr>
        <th> Title</th>
        <th> Date</th>
        <th>value</th>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {dataSet.map(e=> <Trow key={e.id} data={e} DeleteItem={DeleteItem} updateItem={updateItem}/> )}
    </tbody>
    </table>
  )
}

export default Table
