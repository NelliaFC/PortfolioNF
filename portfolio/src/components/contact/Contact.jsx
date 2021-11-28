import './contact.scss'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
        <div className='left'>
            <img src='assets/shake.svg' alt='shake' />
        </div>
        <div className='right'></div>
        <h2>Contact.</h2>
           <form>
               <input type="text"  placeholder='Email'/>
               <textarea placeholder="Message"></textarea>
               <button type='submit'>Send</button>
           </form>  
        </div>
    )
}
