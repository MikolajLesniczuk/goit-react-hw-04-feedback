import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className={s.nofeedback}>{message}</div>;
};

Notification.prototype = {
  message: PropTypes.string,
};

export { Notification };
