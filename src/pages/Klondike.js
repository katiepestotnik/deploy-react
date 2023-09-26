import Nav from '../components/Nav'
import klondike from '../assests/klondike.jpg'

const Klondike = () => {
    return (
        <>
            <Nav/>
            <div className='img-box'>
                <img src={klondike} alt='golden retriever' />
            </div>
        </>

    )
}
export default Klondike