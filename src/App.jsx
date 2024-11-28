import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Item from "./components/Item";
import Items from "./components/Items";
// import Currenttime from "./components/currenttime";
// import Item1 from "./components/Item1";
// import Item2 from "./components/Item2";

function App() {
  // let itemlist=
let [itemlist,setvalue] = useState([]);

  const disptodo = (itemname,itemdate) =>{
    console.log(`${itemname} due on :${itemdate}`);
    let newitem = [...itemlist,{name:itemname,duedate:itemdate}];
    setvalue(newitem);
  }

  const itemdelete = (itemnamea) =>{
    // alert(itemnamea)
    let newvalue = itemlist.filter(itemnames => itemnames.name !== itemnamea);
    setvalue(newvalue);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo display={disptodo}></AddTodo>
      <Items munna={itemlist} clickmetodelete={itemdelete}></Items>
        {/* <Currenttime></Currenttime> */}
    </center>
    
  );
}

export default App;
