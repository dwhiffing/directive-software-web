import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout title="Not Found" site={this.props.data.site}>
        <h1>Not Found</h1>
      </Layout>
    )
  }
}

export default NotFoundPage
