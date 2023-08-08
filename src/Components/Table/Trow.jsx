
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2";
import Edit from "./Edit";
import axios from "axios";
const Trow = ({data,DeleteItem,updateItem}) => {
  let onDelete=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://expenses-app-32e19-default-rtdb.firebaseio.com/CRUD/${data.id}.json`)
        .then(res=>{
          DeleteItem(data.id);
          console.log("succuss Delete");
        }).catch(err=>{
          console.log(err);
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <tr>
      <td> {data.title} </td>
      <td>{data.date}</td>
      <td>{data.value} </td>
      <td colSpan="2"> {data.description} </td>
      <td  className="text-right d-flex" style={{cursor: "pointer"}}><a href="#" className="delete" >
        <FontAwesomeIcon onClick={onDelete} icon={faTrashAlt}/>
        </a>
        <a href="#" className="delete mx-2" >
          <Edit updateItem={updateItem} data={data}/>
        </a>
        </td>
    </tr>
  )
}

export default Trow
