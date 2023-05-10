import PropTypes from 'prop-types';
import css from 'css/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transaction_history}>
  <thead>
    <tr className={css.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tbody_row} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr> 
        ))}
        </tbody>
      </table>
    );
  };
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };