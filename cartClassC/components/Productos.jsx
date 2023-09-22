import { Component } from 'react'
import Producto from './Producto'
const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

}
class productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props
    return (
      <div style={styles.productos}>
        {productos.map(producto =>
            <Producto 
                key = {producto.name}
                producto ={ producto }
                agregarAlCarro = { agregarAlCarro }
            />
            ) }
      </div>
    )
  }
}

export default productos