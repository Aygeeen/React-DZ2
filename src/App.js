import React, {useState} from 'react';
import Name from './Components/name';
import Surname from './Components/surname';
import Button from './Components/button';
import './Components/form.css'


export default function Form() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fullName, setFullName] = useState('')

    const ChangeName = (e) => {
        setName(e.target.value)
    }
    const ChangeSurName = (e) => {
        setSurname(e.target.value)
    }
    const buttonClick = () => {
        const newFullName = `${name} ${surname}`
        setFullName(newFullName)
    }
    return (
        <div className="All-Form">
            <Name value={name} onChange={ChangeName}/>
            <Surname value={surname} onChange={ChangeSurName}/>
            <Button onClick={buttonClick}/>
            <div>
                <span style={{color: "white"}}>{fullName}</span>
            </div>
        </div>
    )
}
