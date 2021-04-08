import {useState} from 'react';

const users = [
    {name: 'sarah',age: 30},
    {name: 'hales', age: 34},
    {name: 'dhoni', age: 39}
]


const Usersearch: React.FC = () =>{
    const [name,setName] = useState('');
    const [user,setUser] = useState<{name: string, age: number} | undefined>()
    const onClick = () => {
        setName('');
        const foundUser = users.find((user)=>{
            return user.name === name;
        })
        console.log(foundUser);
        setUser(foundUser)
        
    }
    return(
        <div>
            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={onClick}>Search</button>
            <div>
                {user?.name}
                {/* <hr /> */}
                {user?.age}
            </div>
        </div>
    )
}
export default Usersearch