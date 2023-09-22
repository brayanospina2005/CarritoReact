import { Component } from 'react'
const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
    },
    contador: {
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '14px',
        width: '20px',
        height: '20px',
        display: 'inline-block',
        borderRadius: '50%',
        textAlign: 'center',
        marginLeft: '10px',
    },


}
export class Carro extends Component {
  render() {
    return (
        <div>
            <span style={styles.contador}>{this.props.contador}</span>
            <button style={ styles.carro}>
                Carro
            </button>
        </div>
    )
  }
}

export default Carro