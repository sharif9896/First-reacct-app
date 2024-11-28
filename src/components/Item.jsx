const Item = ({ A1, A2 , itemname1 }) => {
  return (
    <>
     <center><div className="container margins paddincontai">
        <div className="row myalign">
    <div className="col-4">
      <div>{A1}</div>
    </div>
    <div className="col-4">
      <div>{A2}</div>
    </div>
    <div className="col-1">
    <button type="button" className="btn btn-danger mybtn" onClick={itemname1}>Delete</button>
    </div>
  </div>
  </div>
  </center>
    </>
  );
};
export default Item;
