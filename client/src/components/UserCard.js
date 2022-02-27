import UserChart from "./UserChart";

const UserCard = ({user, updateUser, deleteUser}) => {


    const handleDeleteUser = () => {
        deleteUser(user._id);
    }

    return (
        <div className='user-card'>
            <h2>{user.userName}</h2>
            <p>{user.travel}</p>
            <p>{user.food}</p>
            <p>{user.home}</p>
            <button onClick={handleDeleteUser}> 🗑 </button>
            <UserChart user={user} />
        </div>
    )
};

export default UserCard;