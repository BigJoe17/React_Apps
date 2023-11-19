import "./CSS/TodoItems.css";
import tick from "./Assets/tick-succ.png";
import cross from "./Assets/cross-purple.png";
import uncheck from './Assets/uncheck-circle.png';

const TodoItems = ({no, display, text,setTodos}) => {

const deleteList = (no) =>{
let data = JSON.parse(localStorage.getItem("todos"));
data = data.filter((todo)=>todo.no!= no);
setTodos(data);
}

  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0; i<data.length; i++){
      if(data[i].no===no){
        if(data[i].display ===""){
          data[i].display = "line-through";
        }
        else{
          data[i].display ="";
        }
        break;
      }

    }
    setTodos(data);

   }

  return (
    <div className="todoItems">
      <div className={`todoItems-container ${display}`} onClick={()=>toggle(no)}>
       {display === "" ? <img src={uncheck} alt="" />:<img src={tick} alt="" />}
      
        <div className="todoitems-text">{text}</div>
      </div>
      <img  className="todoitems-cross-icon" onClick={()=>{deleteList(no)}} src={cross} alt="" />
    </div>
  );
};

export default TodoItems;
