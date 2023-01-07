import React from 'react'
import { IState as Props } from "../App";

export interface Iprops {
  people: Props["people"]
} 

const List : React.FC<Iprops> = ({ people }) => {
  return (
   <ul>
   {people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })}
   </ul>
  )
}

export default List