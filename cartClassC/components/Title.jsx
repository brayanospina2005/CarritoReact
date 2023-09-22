import { Component } from 'react'
const styles = {
    title: {
        marginBottom: '2rem',
    },

}
class Title extends Component {
  render() {
    return (
      <h1 style={ styles.title}>Products List</h1>
    )
  }
}

export default Title