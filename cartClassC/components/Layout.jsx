import { Component } from 'react'
const styles = {
    Layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem',
    },
    container: {
        Maxwidth: '1200px',
    },
}
export class Layout extends Component {
  render() {
    return (
      <div style={styles.Layout}>
        <div style={styles.container}>
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout