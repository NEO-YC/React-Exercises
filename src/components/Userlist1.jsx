import { useState } from 'react'
import { useEffect } from 'react'



export default function Userlist1() {
    
    const [users, setUsers] = useState([])


    async function fetchUsers() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        setUsers(data)
    }

    
    useEffect(() => {
        fetchUsers()
    }, [])



    return (
        <div>
            <h1>Users:</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <hr />
                    <h2>{user.name}</h2>
                    <hr />
                    <p>{user.email}</p>
                    <hr />
                    <p>City🏡:{user.address.city}</p>
                </div>
            ))}
        </div>
    )
}

