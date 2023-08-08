import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Forms from '../Form/Forms';
import Label from '../Form/Label';
import Input from '../Form/Input';
import axios from 'axios';

const Edit = ({updateItem,data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [title,setTitle]=useState(data.title);
  let [date,setDate]=useState(data.date);
  let [value,setValue]=useState(data.value);
  let [description,setDescription]=useState(data.description);
  const id = data.id
  let DataUpdate={id,title,date,value,description}
  let handleSubmit = (e) => {
    e.preventDefault();
    updateItem(id, DataUpdate);
    console.log(DataUpdate, id);
    
    axios.put(`https://expenses-app-32e19-default-rtdb.firebaseio.com/CRUD/${id}.json`, DataUpdate)
      .then(res => {
        console.log("Success Edit");
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  useEffect(()=>{
    handleClose()
  },[data])
  return (
    <>
      <Button variant="" className="d-flex justify-content-between align-items-center" onClick={handleShow}>
      <FontAwesomeIcon icon={faEdit} style={{marginLeft:"-5px"}} />
      </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row" onSubmit={handleSubmit}>
          <div className="mb-3 col-md-12">
            <Label>Title</Label>
            <Input type={"text"} className="form-control addTitle" value={title} onChange={e=>setTitle(e.target.value)} />
          </div>
          <div className="mb-3 col-md-12">
            <Label>Date</Label>
            <Input type={'date'}  className="form-control addDate" value={date} onChange={e=>setDate(e.target.value)} />
          </div>
          <div className="mb-3 col-md-12">
            <Label>Value</Label>
            <Input type={'number'} className="form-control addValue" value={value} onChange={e=>setValue(e.target.value)} />
          </div>
          <div className="mb-3 col-md-12">
            <Label>Description</Label>
            <Input type={'text'}  className="form-control addDescrption" value={description} onChange={e=>setDescription(e.target.value)} />
          </div>
          <div className="mb-3 col-md-12 text-right p-3">
            <button type="submit" className="btn btn-primary addBtn px-5" >UPDATE</button>
          </div>
    </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Edit
