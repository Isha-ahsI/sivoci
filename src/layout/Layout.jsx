import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Modals from '../components/Modals'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
            {children}
        <Footer />
      <Modals />
    </div>
  )
}

export default Layout
