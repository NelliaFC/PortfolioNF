import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className='topbar'>
           <div className='wrapper'>
           <div className='left'>
           <a href='#intro'className='logo'>neonilla.</a>
            <div className='itemContainer'>
            <Person className='icon'/>
            <span> 858 405 7032</span>
            </div>
            <div className='itemContainer'>
            <Mail className='icon' />
            <span> nellia.f.charlton@gmail.com</span>
            </div>

            </div>  
            <h1></h1>
           <div className='right'></div>  
           </div> 
        </div>
    )
}
