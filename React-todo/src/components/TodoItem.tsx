import { useState } from "react";
import "../App.css"

interface Item{
    title: string,
    completion: boolean,
}

type props = {
    i: Item,
    setItems: any
}

const TodoItem = (props: props) => {
    const [editing, setEditing] = useState(false)
    const [item, setItem] = useState(props.i);

    const itemTitleSetter = (e:any) =>{
        setItem({
            ...item,
            title: e.target.value
        })
    }

    const handleCompletion = (e:any) => {
        e.preventDefault();
        setItem({
            ...item, 
            completion: !item.completion}
        )
    }

    const deleteItem = () => {
        props.setItems((prev: Item[]) => prev.filter((i:Item )=> i !== item))
    }
    return(
        <div className="item">
            {
                !editing ?
                <div className="item-div">
                    <h2>{item.title}</h2>
                    <div style={{display: "flex" , gap: "5px"}}>
                        <button onClick={handleCompletion} style={{"color": "black"}}>{item.completion ? "Complete" : "Incomplete"}</button>
                        <button onClick={() => setEditing(true)} style={{"background": "blue", "color": "white"}}>
                            Edit
                        </button>
                        <button onClick={deleteItem} style={{"background": "red", "color": "white"}}>
                            Delete
                        </button>
                    </div>
                    
                </div> :
                <div className="item-div">
                    <form>
                        <input type="text" value={item.title} onChange={itemTitleSetter}/>
                        <button onClick={()=>setEditing(false)} className="save">save</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default TodoItem;