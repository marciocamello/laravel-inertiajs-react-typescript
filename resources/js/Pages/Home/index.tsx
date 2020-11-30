import React from 'react'
import Layout from '../../components/common/Layout'

interface Props {

}

const HomePage: React.FC<Props> = () => {

  return <Layout>
    <div className="row">
      <div className="col-12">
        <p>Welcome to home page</p>
      </div>
    </div>
  </Layout>
}

export default HomePage
