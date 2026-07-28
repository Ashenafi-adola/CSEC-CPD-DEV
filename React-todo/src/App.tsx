import { useState } from 'react'
import TodoItem from './components/TodoItem'
import './App.css'

interface Item{
  id: number,
  title: string,
  completion: boolean
}

function App() {
  const [item , setItem] = useState<Item>({id:0,title:"", completion:false});
  const [items, setItems] = useState<Item[]>([])
  const [id, setId] = useState(0)


  const titleSetter = (e:any) =>{
    setItem({
      id: id,
      title: e.target.value,
      completion: false
    })
  }

  const addItem = (e:any) =>{
    e.preventDefault();
    if (item.title !== ""){
      setItems(prev => [...prev, item]);
      setItem({id:id, title:"", completion:false})
      setId(prev => prev+1)
    }
  }

  return (
    <>
      <div className='container'>
        <h1>React Todo App</h1>
        <div className='main-form-card'>
          <form onSubmit={addItem} className='main-form'>
            <input type="text" value={item.title} onChange={titleSetter}/>
            <button type='submit' className='btn'>
              Add item
            </button>
          </form>
        </div>
        <div className='item-container'>
          {
            items.length === 0?(
              <div>
                <h4>no item found</h4>
              </div>
              ):(
                items.map(i => (
                  <TodoItem key={i.title} i={i} setItems={setItems}/>
                ))
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
