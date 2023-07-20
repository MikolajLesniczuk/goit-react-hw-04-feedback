import PropTypes from 'prop-types';

import s from './Statistic.module.css'

 const Statistic = ({good,neutral,bad,total, positivePercentage}) => {
    return (
        <ul className={s.list}>
            <li className={s.listItem}>Good: {good} </li>
            <li className={s.listItem}>Neutral: {neutral} </li>
            <li className={s.listItem}>Bad: {bad} </li>
            <li className={s.listItem}>Total: {total} </li>
            <li className={s.listItem}>Positive Percentage: {positivePercentage}% </li>
        </ul>


    )
}

Statistic.prototype = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,

}

export default Statistic;