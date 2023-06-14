import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
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