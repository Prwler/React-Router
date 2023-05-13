import  './Home.css'
import BookShelf from './Assets/Bookshelf.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return(
        <>
            <h1 className='header'>Your Personal Book Manager</h1>
            <p>Lorem Ipsum dolor sit amet conseceteur muniz adipiscing</p>
            <div className='button'>
                <button className='btn btn-outline-primary'>Get Started</button>
            </div>
            <img src={BookShelf} className="bookshelf-react" alt="logo" />
            <h2> We Will ....</h2>
            <ol className='list'>
                <li className='list-item'>
                    Store your books for you
                </li>
                <li className='list-item'>
                    Restore them if damaged
                </li>
                <li className='list-item'>
                    We'll also do the same for E-books
                </li>
                <li className='list-item'>
                    Lorem ipsum innit??
                </li>
                <li className='list-item'>
                    Oloun we outchea
                </li>
            </ol>
        </>
    )
}

export default Home