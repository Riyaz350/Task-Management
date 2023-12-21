
const UserCard = ({user}) => {
    return (
        <div>
            <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-1/6' src={user.photo}  />
                <div>
                <h1 className="text-5xl font-bold">{user.name}</h1>
                <p className="py-6">{user.job}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserCard;