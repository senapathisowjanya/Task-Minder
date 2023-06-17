import './Navbar.css'

export const Navbar = () =>{

return (
    <div className='nav'>
        <div>
            <h2>|||</h2>
            <h1>
                <p>+</p>
                <h3>Create</h3>
            </h1>
        </div>
        <div>
            <input type="text" placeholder='Search Here...'/>
        </div>
        <div>
            <p>
                <img src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt="profile" />
            </p>
        </div>
    </div>
)
}