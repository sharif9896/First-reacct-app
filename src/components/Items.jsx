import Item from "./Item";

const Items =({munna , clickmetodelete})=>{


    return(
        <>
          {munna.map(item => <Item A1={item.name} A2={item.duedate} itemname1={() => clickmetodelete(item.name)}></Item>)}
        </>
        
    );
}
export default Items;