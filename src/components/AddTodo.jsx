import { useState } from "react";

function AddTodo({display}){
  let [itename,setname] = useState("");
  let [itemdate,setdate] = useState("");

  const namechange = (event) =>{
    setname(event.target.value);
  }
  const datechange = (event) =>{
    setdate(event.target.value);
  }

  const displays = () =>{
    display(itename,itemdate);
    setdate("");
    setname("");
  }

    return <center><div class="container margins paddincontai">
    <div class="row ">
      <div class="col-4">
        <input type="text" placeholder=" Enter Todo Here" value={itename} onChange={namechange}/>
      </div>
      <div class="col-4">
        <input type="date" value={itemdate} onChange={datechange}/>
      </div>
      <div class="col-1">
      <button type="button" class="btn btn-success mybtn" onClick={displays}>Add</button>
      </div>
    </div>
    </div>
    </center>
}
export default AddTodo;