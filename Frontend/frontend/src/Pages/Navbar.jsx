import './Navbar.css'

export const Navbar = () =>{
  const user=localStorage.getItem("user")||null
  const userName=user.split(" ")
   let showonNav=`${userName[0][0]}${userName[1][0]}`
  
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
            <p>{showonNav}</p>
        </div>
    </div>
)
}