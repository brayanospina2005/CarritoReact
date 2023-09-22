import  { Component } from 'react'
const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
    },

}
export class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
            Brayan Code
      </div>
    )
  }
}

export default Logo