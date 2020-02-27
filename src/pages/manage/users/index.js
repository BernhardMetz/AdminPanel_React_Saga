import React from 'react'
// import { Table, Icon, Input, Button } from 'antd'
import { Table, Button } from 'antd'
import { Helmet } from 'react-helmet'
import table from './data.json'

class UsersList extends React.Component {
  state = {
    data: table.data,
  }

  connListRender = connList => {
    // console.log('-- Parameters', connList)
    const connListColumns = [
      {
        title: 'Service Type',
        dataIndex: 'service',
        key: 'serviceType',
      },
      {
        title: 'UP Speed(KBps)',
        dataIndex: 'up_speed',
        key: 'upSpeed',
      },
      {
        title: 'Down Speed(KBps)',
        dataIndex: 'down_speed',
        key: 'downSpeed',
      },
    ]
    return <Table columns={connListColumns} dataSource={connList} pagination={false} />
  }

  render() {
    const { data } = this.state
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => (
          <a className="utils__link--underlined" href="javascript: void(0);">
            {`#${text}`}
          </a>
        ),
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
        render: text => (
          <a className="utils__link--underlined" href="javascript: void(0);">
            {text}
          </a>
        ),
      },
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'last_name',
        sorter: (a, b) => a.first_name.length - b.first_name.length,
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
        sorter: (a, b) => a.last_name.length - b.last_name.length,
      },
      {
        title: 'Status',
        dataIndex: 'enable_status',
        key: 'enable_status',
        render: enabled => (
          <span className={`font-size-12 badge badge-${enabled ? 'success' : 'danger'}`}>
            {enabled ? 'Enabled' : 'Disabled'}
          </span>
        ),
      },
      {
        title: 'Connection State',
        dataIndex: 'connected',
        key: 'connected',
        render: connected => (
          <span className={`font-size-12 badge badge-${connected ? 'success' : 'danger'}`}>
            {connected ? 'Connected' : 'Disconnected'}
          </span>
        ),
      },
      {
        title: 'Today Bandwidth',
        dataIndex: 'day_used_bytes',
        key: 'day_used_bytes',
      },
      {
        title: 'Action',
        key: 'action',
        dataIndex: 'enable_status',
        render: enabled => (
          <span>
            <Button icon="edit" size="small">
              Edit
            </Button>
            <Button
              icon={`${enabled ? 'pause-circle' : 'check-circle'}`}
              className="mr-1"
              size="small"
            >
              {enabled ? 'Disable' : 'Enable'}
            </Button>
          </span>
        ),
      },
    ]
    // console.log('++Data', data)
    return (
      <div>
        <Helmet title="Users List" />
        <div className="card">
          <div className="card-header">
            <div style={{ marginBottom: 16 }}>
              <Button type="primary" onClick={this.start}>
                Add
              </Button>
            </div>
          </div>
          <div className="card-body">
            <Table
              className="utils__scrollTable"
              scroll={{ x: '100%' }}
              columns={columns}
              expandedRowRender={() => this.connListRender(data[0].active_sessions)}
              dataSource={data}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default UsersList
