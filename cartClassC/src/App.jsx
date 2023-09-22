import { Component } from 'react'
import Productos from '../components/Productos'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

export class App extends Component {
  state = {
    productos: [
      { name: 'Laptop', precio: 2500, img:'/laptop.png' },
      { name: 'Phone', precio: 1500, img:'/phone.png' },
      { name: 'Speaker', precio: 800, img:'/speaker.png' },
    ],
  }
  agregarAlCarro = (producto) => {
    
    console.log(producto)
  }

  render() {
    return (
      <div>
          <Navbar></Navbar>
        <Layout>
          <Title/>
          <Productos 
            productos={this.state.productos}	
            agregarAlCarro={this.agregarAlCarro}
          />
        </Layout>
      </div>
    )
  }
}

export default App