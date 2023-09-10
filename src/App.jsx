import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image/m1.png'
import { Forms, Input, Label, Pagination, Table } from './Components';
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  let [dataSet,setDateSet]=useState([]);
  let [search,setSearch]=useState("");

    let saveItem=(data)=>{
      setDateSet([data,...dataSet])
    }
    let DeleteItem=(item)=>{
      let filtered= dataSet.filter(e=> e.id!=item)
      setDateSet(filtered)
    }
    let updateItem=(id,DataUpdate)=>{
      let update=dataSet.map(e=>e.id===id ? DataUpdate : e)
      setDateSet(update);
    }
    let fetchData=()=>{
      axios.get("https://expenses-context-default-rtdb.firebaseio.com/fire.json")
      .then(res=>{
      console.log(res.data);
      let Data=[];
      for(let key in res.data){
        let value = res.data[key];
        value.id=key;
        Data.push(value);
      }
      setDateSet(Data)
      }).catch(err=>{
        console.log(err);
      })
    }
    useEffect(()=>{
      fetchData();
    },[])
    // let searchHandler=()=>{
      // if (search) {
      //   let searched= dataSet.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()))
      //     return searched
      //     console.log(searched);
      // }else{
      //   return dataSet
      // }
    // }
    //   return search ? dataSet.filter(e=>e.title.toLowerCase().includes(search.toLowerCase())):  dataSet
      let searchHandler=  search ? dataSet.filter(e=>e.title.toLowerCase().includes(search.toLowerCase())):  dataSet

  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-sm-6">
        <img src={logo}className="img-fluid" alt=""/>
      </div>
      <div className="col-sm-6 mt-5">
        <div className="row">
          <h4 className="">welcome to sobhi Expense Manager </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <Forms saveItem={saveItem}/>
      </div>
      </div>
      
      <div className="row mt-2 mb-5">
      <div className="custom-card">
        <div className="col-md-3 mb-4 text-center">
          <Label style={{fontWeight: "bold"}}>search by title</Label>
           <Input type={"text"} onChange={e=>setSearch(e.target.value)} value={search} className="form-control addSearch"  placeholder="Search..."/>
        </div>
      <Table dataSet={searchHandler} DeleteItem={DeleteItem} updateItem={updateItem}/>
      <Pagination/>
      </div>
      </div>
    </div>
  )
}

export default App
