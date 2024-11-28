function Currenttime(){
    let mytime=new Date();
    let hours=mytime.getHours();
    let min=mytime.getMinutes();
    let sec=mytime.getSeconds();
    let day=mytime.getDate();
    let mon=mytime.getMonth()+1;
    let year=mytime.getFullYear();
    let ampm=mytime.getHours() >= 12 && mytime.getHours() < 24?"PM":"AM";
    return <div className="showdate">
        <h3>This is the Current time : {day}/{mon}/{year} - {hours}:{min}:{sec} {ampm}</h3>
    </div>
}
export default Currenttime;