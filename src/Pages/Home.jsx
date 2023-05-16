import  './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookShelf from './Assets/Bookshelf.svg'

function Home() {
    return(
        <>
        <div className='head'>
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
                        Lorem ipsum
                    </li>
                    <li className='list-item'>
                        Dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className='list-item'>
                        Dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className='list-item'>
                        Dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className='list-item'>
                        Dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className='list-item'>
                        Dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className='list-item'>
                        Dolor sit amet, consectetur adipiscing elit
                    </li>
                </ol>
        </div>
        <div className='footer'>
            <h1>
                So let us work for you
            </h1>
            <nav className='foot-nav'>
                <div className="card text-center">
                    <div className="card-header">
                        Basic
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        2 days left!!!
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-header">
                        Advanced
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        3 days left!!!
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Home