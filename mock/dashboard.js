import { Mock, Constant } from './_utils'

const { ApiPrefix, Color } = Constant

const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 2008,
      'Clothes|200-500': 1,
      'Food|180-400': 1,
      'Electronics|300-550': 1,
    },
  ],
  numbers: [
    {
      icon: 'pay-circle-o',
      color: Color.green,
      title: 'Corrective Maintenance',
      number: 2781,
    },
    {
      icon: 'team',
      color: Color.blue,
      title: 'Preventive Maintenance',
      number: 3241,
    },
    {
      icon: 'shopping-cart',
      color: Color.purple,
      title: 'Assets',
      number: 253,
    },
    {
      icon: 'shopping-cart',
      color: Color.red,
      title: 'Penertiban',
      number: 4324,
    },
  ],
})

module.exports = {
  [`GET ${ApiPrefix}/dashboard`](req, res) {
    res.json(Dashboard)
  },
}
