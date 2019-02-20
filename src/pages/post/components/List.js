import React, { PureComponent } from 'react'
import { Table } from 'antd'
import { withI18n } from '@lingui/react'
import { Ellipsis } from 'ant-design-pro'
import styles from './List.less'

@withI18n()
class List extends PureComponent {
  render() {
    const { i18n, ...tableProps } = this.props
    const columns = [
      // {
      //   title: i18n.t`Image`,
      //   dataIndex: 'image',
      //   render: text => <Avatar shape="square" src={text} />,
      // },
      {
        title: i18n.t`Code`,
        dataIndex: 'code',
      },
      {
        title: i18n.t`Type`,
        dataIndex: 'type',
      },
      {
        title: i18n.t`Priority`,
        dataIndex: 'priority',
      },
      {
        title: i18n.t`Description`,
        dataIndex: 'description',
        render: text => (
          <Ellipsis tooltip length={30}>
            {text}
          </Ellipsis>
        ),
      },
      {
        title: i18n.t`Assigned User`,
        dataIndex: 'assign_user',
      },
      {
        title: i18n.t`Publish Date`,
        dataIndex: 'date',
      },
      {
        title: i18n.t`Status`,
        dataIndex: 'status',
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        bordered
        scroll={{ x: 1200 }}
        className={styles.table}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

export default List
