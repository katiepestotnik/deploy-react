import Nav from '../components/Nav'
import missy from '../assests/missy.jpg'

const Missy = () => {
    return (
        <>
            <Nav />
            <div className='img-box'>
                <img src={missy} alt='bernese mountain dog'/>
            </div>

        </>
    ) 
}
export default Missy