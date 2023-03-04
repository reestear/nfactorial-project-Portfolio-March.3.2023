import React from 'react'
import List from '../List';
import './styles.css'

export default function Project({id, IMG, name, description, lists}) {
    // const {id, IMG, name, description, lists} = props;

  return (
    <div className='Project' style={{flexDirection: (id % 2 == 0) ? 'row' : 'row-reverse'}}>
        <div className='IMG'>
            <img src = {IMG} alt = "image"></img>
        </div>
        <div className='Project-Info'>
            <h3>{name}</h3>
            <p className='des'>{description}</p>
            <div className='lists'>
                {
                    lists.map((list) => (
                        <>
                            <List text = {list.text}></List>
                            <div style={{paddingBottom: '10px'}}></div>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
