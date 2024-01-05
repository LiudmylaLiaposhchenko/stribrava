import './style.css';

export const OrderRow = ({ order }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.status}</td>
      <td>{order.roomId}</td>
      <td>{order.dateFrom}</td>
      <td>{order.dateTo}</td>
      <td>{order.numPeople}</td>
      <td>
        {order.meal === 'breakfast' ? 'snídani' : ''}
        {order.meal === 'halfBoard' ? 'polopenzi' : ''}
        {order.meal === 'fullBoard' ? 'plnou penzi' : ''}
        {order.meal === 'none' ? 'žádné' : ''}
      </td>
      <td>{order.pet === false ? '-' : '+'}</td>
      <td>{order.child === false ? '-' : '+'}</td>
      <td>{order.accessible === false ? '-' : '+'}</td>
      <td>{order.email}</td>
      <td>{order.phone}</td>
    </tr>
  );
};
