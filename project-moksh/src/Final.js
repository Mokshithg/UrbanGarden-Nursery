import React,{useState,useEffect} from 'react'
const URL = "https://jsonplaceholder.typicode.com/posts";

const Final = () => {
const [usersData, setUsersData] = useState([]);
const fetchUsersData = async(url) =>{
  const response = await fetch(url);
  const data = await response.json();
  setUsersData(data)
}
useEffect(() =>{
  fetchUsersData(URL)
}, [])
  return (
    <div>
        <h1>example</h1>
        <ul>
            {
               usersData.map((eachUser) =>{
                const {id,userId,title,body} = eachUser
                return(
                    <li key={id}>
                        <div>{userId}</div>
                        <div>{title}</div>
                        <div>{body}</div>
                    </li>
                )
               })
            }
        </ul>
    </div>
  )
}

export default Final