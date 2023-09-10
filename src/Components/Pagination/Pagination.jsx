import { useState } from "react";

const Pagination = () => {
  const pages=5;
  const numPages=[];
  for (let i = 1; i <= pages; i++) {
    numPages.push(i)
  }
  const [currentButton,setCurrentButton]=useState(1);
  cont [employeePerPage]=useState(2)
  return (
    <nav aria-label="Page navigation example" className="d-flex align-item-center justify-content-between pt-2">
    <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
    <ul className="pagination justify-content-end">
      <li className="`${currentButton === 1 ? 'page-item disabled':'page-item'}`"> <a className="page-link" onClick={()=>setCurrentButton(prev=>prev===1?prev:prev-1)} >Previous</a></li>
      {numPages.map((page,index)=>{
        return (
          <li key={index} className="`${currentButton === numPages.Length ? 'page-item active':'page-item'}`page-item " ><a className="page-link"  href="#" 
          onClick={()=>setCurrentButton(page)}
          >{page}</a></li>
        )
      })}
      <li className="`${currentButton === numPages.Length ? 'page-item disabled':'page-item'}`"> <a className="page-link" onClick={()=>setCurrentButton(next=>next===1?next:next+1)} >Next</a></li>
    </ul>
  </nav>
  )
}

export default Pagination
