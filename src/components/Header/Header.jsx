import './Header.css'

function Header({ data }) {
    console.log();
    return (
        <header>
            <div className='container'>
            <button onClick={()=> data (true)}>
        <img src="https://www.svgrepo.com//show/18743/sun.svg" alt="" />

            </button>
  <button onClick={()=> data (false)}>
  <img src="https://images.vexels.com/media/users/3/234448/isolated/preview/d5a209d034d3856475ff95fcf6d62a28-night-sky-moon-and-stars.png" alt="" />

  </button>
        </div>
        </header>
    )
}
export default Header;