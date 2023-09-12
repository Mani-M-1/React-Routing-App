import './index.css'
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md'

const data = [
    {
        id: 0,
        imageUrl: "https://images.unsplash.com/photo-1565526856117-24ef9d084a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 2,
        imageUrl: "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=372&q=80"
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
    },
    {
        id: 5,
        imageUrl: "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
]

const Home = () => {

    const handleOnclickLeftArrow = () => {
        const scrollingContainer = document.getElementById('scrollingContainer');
        scrollingContainer.scrollLeft = scrollingContainer.scrollLeft - 500;
    }

    const handleOnclickRighttArrow = () => {
        const scrollingContainer = document.getElementById('scrollingContainer');
        scrollingContainer.scrollLeft = scrollingContainer.scrollLeft + 500;
    }

    return  (
        <div className='home-section'>
            <h1 className='home-text'>Home</h1>
            <div className='scrolling-section'>
                <div className='controllers-card' onClick={handleOnclickLeftArrow}>
                    <MdOutlineArrowBackIos className='controller-icons'/>
                </div>
                <div id='scrollingContainer'>
                    {data.map(eachItem => 
                        <div className='image-card'>
                            <img className='scrollable-images' src={eachItem.imageUrl} alt="scrollable images" />
                        </div>
                    )}
                </div>
                <div className='controllers-card' onClick={handleOnclickRighttArrow}>
                    <MdOutlineArrowForwardIos className='controller-icons'/>
                </div>
            </div>
        </div>
    )
}
export default Home