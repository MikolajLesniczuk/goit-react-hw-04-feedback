import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={s.button_position}>
        {options.map(option => {
          return (
            <button
              type="button"
              className={s.buton}
              key={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export { FeedbackOptions };
