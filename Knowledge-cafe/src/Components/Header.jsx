import profile from '../images/profile.png';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-10 font-bold'>
                <h1 className="text-4xl">Knowledge Cafe</h1>
                <img src={profile} alt="" />

            </div>
            <hr
                className='mb-8'
                style={{
                    border: "none",
                    borderTop: "1px solid rgba(17, 17, 17, 0.15)"
                }}
            />

        </div>
    );
};

export default Header;    