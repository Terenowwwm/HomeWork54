import './App.css'
import MiniBlock from "./components/mini-block/mini-block.tsx";
import {useState} from "react";
import Count from "./components/count/count.tsx";

function App() {
    const [count, setCount] = useState(0)
    const createBlock = () => {
            const ls = []
            for (let i = 0; i < 36; i++) {
                const data = {hasItems: false, clickedItems: false, color: 'red'};
                ls.push(data);
            }
            const random = Math.floor(Math.random() * 36);
            const copyls = ls[random];
            copyls.hasItems = true;
            return ls
        }
    const [items, setItems] = useState(createBlock())
    const edit = (index1: number, hasItems: boolean) => {
            items.map((element, index) => {
                if (index === index1 && !element.clickedItems) {
                    if (!element.hasItems) {
                        const copy = [...items]
                        const copyElement = copy[index];
                        copyElement.clickedItems = true;
                        copyElement.color = 'white';
                        copy[index] = copyElement;
                        setItems([...copy]);
                        const copyCount:number = count;
                        const newCount:number = copyCount + 1;
                        setCount(newCount);
                    } else {
                        const copy = [...items]
                        const copyElement = copy[index];
                        copyElement.clickedItems = true;
                        copyElement.color = 'orange';
                        copy[index] = copyElement;
                        copy.map((element) => {
                            element.clickedItems = true;
                        })
                        setItems(copy);
                    }
                }
            })
        };

    return (
    <div className="mainBlock">
        {items.map((item, index)=>{
            return <MiniBlock key={index}  color={item.color} click={()=>edit(index,item.hasItems)} />
        })}
        <Count count={count}></Count>
    </div>
  )
}

export default App
