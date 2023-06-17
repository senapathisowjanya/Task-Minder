import { Navbar } from '../Pages/Navbar'
import { Sidebar } from '../Pages/Sidebar'
import './Dashboard.css'


export const Dashboard = () =>{

return (
    <div>
        <Navbar/>
        <div className='dash'>
            <div style={{width:'20%',height:'100%'}}>
                <Sidebar/>
            </div>
            <div>

            </div>
        </div>
    </div>
)
}