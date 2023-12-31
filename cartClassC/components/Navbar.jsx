import  { Component } from 'react'
import Logo from './Logo'
import Carro from './Carro'
const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
    },

}

export class Navbar extends Component {
  render() {
    return (
      <nav style={ styles.navbar}>
        <Logo></Logo>
        <Carro></Carro>
      </nav>
    )
  }
}

export default Navbar