import React, {Component} from 'react';
import  Section  from './container/Section';
import  Statistic  from "./Statistic/Statistic";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import s from './container/Section.module.css'

class App extends Component{

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1
    }) )
  }

 


  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
 
  } 

  countPositiveFeedbackPercentage() {
      const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
}

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    // console.log(options)

    return (  
      <div className={s.container}>
    <Section
      title='Please leave feedback'
    >
          <FeedbackOptions
            options={options}
          onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        
        <Section title='Statistic'>
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}


            >

            </Statistic>
          )
            
            :
            (
              <Notification
              message='There is no feedback'
              />
            )
          }

          </Section>

       
        </div>
)
  };
};
export default App;
