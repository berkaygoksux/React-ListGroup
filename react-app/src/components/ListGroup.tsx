import { useState } from "react";


// {items : [], heading: string}

interface Props{
items: string[];
heading: string;
onSelectItem: (item: string) => void;

}

function ListGroup({items,heading,onSelectItem}: Props) {



    //let selectedItems = 0;
    //Hook
   const [selectedItems, setSelectedItems] =  useState(-1);
   

    //Event handler
    //const handleClick = (event : MouseEvent) => console.log(event)

    //const message =items.length === 0 ? <p>No Item Foud</p> : null;

    return (
        <div>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Item Foud</p>}

            <ul className="list-group">
                {
                    items.map((item, index) => (
                        <li 
                        className= {selectedItems === index ? 'list-group-item active' : 'list-group-item'} 
                        key={item} 
                        onClick={ () => {setSelectedItems(index);
                            onSelectItem(item);
                        }}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}

export default ListGroup;