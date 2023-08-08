import { useState } from "react"
import Input from "./Input"
import Label from "./Label"
import Swal from "sweetalert2";
import axios from "axios";

const Forms = ({saveItem}) => {
    let [title,setTitle]=useState("");
    let [date,setDate]=useState("");
    let [value,setValue]=useState("");
    let [description,setDescription]=useState("");
    let submitHandler=(e)=>{
      e.preventDefault()
      console.log(Data);
        if (checkData()) {
          axios.post("https://expenses-app-32e19-default-rtdb.firebaseio.com/CRUD.json",Data)
          .then(res=>{
            Data.id=res.data.name;
            console.log("success adding");
          }).catch(err=>{
            console.log(err);
          })
          saveItem(Data);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'successfully Add'
          })
        }
      EmptyData()
    }
    let EmptyData=()=>{
      setTitle("")
      setDate("")
      setValue("")
      setDescription("")
    }
    let checkData=()=>{
      if (title!="" && date!="" && value!="" && description!="") {
        if (countWords(description) <= 5) {
          return true;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Description should have a maximum of 5 words.!',
          })
          return false;
        }
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please Enter Data!',
        })
        return false;
      }
    }
    let countWords = (text) => {
      return text.trim().split(/\s+/).length;
    };
    let id =  Math.floor(Math.random() * 100) + 1;
    let Data={id,title,date,value,description}
    return (
      <form className="row" onSubmit={submitHandler}>
      <div className="mb-3 col-md-6">
        <Label>Title</Label>
        <Input type={"text"} onChange={e=>setTitle(e.target.value)} value={title} className="form-control addTitle"/>
      </div>
      <div className="mb-3 col-md-6">
        <Label>Date</Label>
        <Input type={'date'} onChange={e=>setDate(e.target.value)} value={date} className="form-control addDate"/>
      </div>
      <div className="mb-3 col-md-6">
        <Label>Value</Label>
        <Input type={'number'} min="0" max="30" onChange={e=>setValue(e.target.value)} value={value} className="form-control addValue"/>
      </div>
      <div className="mb-3 col-md-6">
        <Label>Description</Label>
        <Input type={'text'} onChange={e=>setDescription(e.target.value)} value={description} className="form-control addDescrption"/>
      </div>
      <div className="mb-3 col-md-12 text-right p-3">
        <button type="submit" className="btn btn-primary addBtn px-5" >Add</button>
      </div>
    </form>
    )
}

export default Forms
