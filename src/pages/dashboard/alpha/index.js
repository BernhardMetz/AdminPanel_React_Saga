import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'

class DashboardAlpha extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha" />
        <div className="card">
          <div className="card-body">Dashboard Alpha</div>
        </div>
      </Authorize>
    )
  }
}

export default DashboardAlpha
