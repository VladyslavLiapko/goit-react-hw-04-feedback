import React, { useState} from 'react';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification.jsx';




export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalCount = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = totalCount();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    
  };
  
  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;

    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;
      
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      
      case 'bad':
        setBad(state => state + 1);
        break;
      
      default:
        return;
    }
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
           options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalCount() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
    
}
