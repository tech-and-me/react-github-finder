import {useEffect,useState} from 'react'
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';


const UserResults = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
            fetchUsers()
    },[])

    const fetchUsers = async () => {

        //*****Method 1: Using global variables store in .env
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers:{
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })  

        //*****Method 2: without using global variable
        // const response = await fetch("https://api.github.com/users",{
        //     headers:{
        //         Authorization: "token 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"
        //     }
        // })     
        

        //*****Method 3: Without using global variable and without using token
        // const response = await fetch("https://api.github.com/users")   

        const data = await response.json();
        console.log(data);
        setUsers(data);
        setLoading(false);
    }


    if(!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user)=>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
          )
    }else{
        return <Spinner/>
    }
  
}

export default UserResults