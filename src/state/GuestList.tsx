import {useState} from 'react';
const GuestList: React.FC = () =>{
    const [name,setName] = useState<string>('');
    const [guests,setGuests] = useState<string[]>([]);
    const onClick = () =>{
        setName('');
        setGuests([...guests,name])
    }
    return(
        <div>
            <h1>Guest list</h1>
            <input value={name} onChange={(e)=> setName(e.target.value)}  />
            <button onClick={onClick}>Add Guest</button>
            <ul>
                {
                    guests.map((guest)=>{
                        return(
                            <li key={guest}>{guest}</li>
                        )
                    })
                }
            </ul>
            </div>
    )
}

export default GuestList