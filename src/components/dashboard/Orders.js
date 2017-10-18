import React from 'react';
import Radium from 'radium';
import moment from 'moment';

import Avatar from '../Avatar';
import TableCard, { TableCardContainer } from '../TableCard';
import OrderStatus from './OrderStatus';

const md = '@media (min-width: 960px) and (max-width: 1280px)';
const col = (size) => {
  let defaultCol = {
    position: 'relative',
    float: 'left',
    boxSizing: 'border-box'
  }
  if ( typeof size === 'undefined')
    return {
      ...defaultCol
    }
  else
    return {
      ...defaultCol,
      width: size
    }
}

const style = {
  header: {
    avatar: {
      container: {
        margin: '4px',
        height: '48px',
        width: '48px',
        border: 'none',
        [md]: {
          height: '32px',
          width: '32px',
          margin: '10px 4px',
        }
      }
    },
    info: {
      ...col(),
      padding: '12px 4px',
      lineHeight: '14px',

      primary: {
        color: '#000',
        fontSize: '14px'
      },
      secondary: {
        color: '#999',
        fontSize: '10px'
      }
    }
  }
}

const Orders = (props) => {
  const { orders } = props;
  return (
    <div>
      <div>
        <TableCardContainer headers={['Cliente', 'Produto', 'Data', 'Status', 'Nº do pedido']}>
          {orders.map((order,i) => (
            <TableCard
              key={order._id}
              title={
                <span>
                  <Avatar style={style.header.avatar} src={order.buyer.avatar} />

                  <div style={style.header.info}>
                    <span style={style.header.info.primary}>{order.buyer.name}</span><br/>
                    <span style={style.header.info.secondary}>{order.buyer.info.location}</span>
                  </div>
                </span>
              }

              data={
                [
                  {
                    key: 'Produto',
                    value: <span>{order.ads[0].name} <br/> R$ {order.total_purchase}</span>
                  },
                  {
                    key: 'Data',
                    value: moment(order.order_date).format('DD/MM/YYYY')
                  },
                  {
                    key: 'Status',
                    value: <OrderStatus status={order.status} />
                  },
                  {
                    key: 'Nº do pedido',
                    value: order.unique_id
                  }
                ]
              }
            />
          ))}
        </TableCardContainer>
        </div>
    </div>
  );
}

export default Radium(Orders);
