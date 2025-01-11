import './Friends.css'
export default function Friend({friend}){
    const {name, username, email} = friend;
    return (
        <div className='box'>
            <h2>Friend name: {name}</h2>
            <h2>username: {username}</h2>
            <h2>email: {email}</h2>
        </div>
    )
}