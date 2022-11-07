import css from '../TransactionHistory/TransactionHistory.module.css';
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({id, type, amount, currency},index) => (
        <tr className={`${index % 2 !== 0 ? css.isBlue : '' }`} key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionHistory;