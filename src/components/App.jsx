import React, { useState } from 'react';
import { Section } from './container/Section';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import s from './container/Section.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = state => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [state]: prevFeedback[state] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(feedback);

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistic>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
export { App };
