import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header>

        <div>
            {/* logo */}
            <div>
                <a href="">Lexicon</a>
            </div>
            {/* menu buttons */}
            <div>
                <button>
                    <i className='fa-solid fa-close'/>
                </button>

                <button>
                    <i className='fa-solid fa-bars'/>
                </button>
            </div>
            {/* navbar */}
            <Nav />
        </div>
    </header>
  )
}

export default Header
