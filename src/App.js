import s from'./App.module.css';
import { Section } from './components/Section/Section'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Statistics } from './components/Statistics/Statistics'
import { Notification } from './components/Notification/Notification'
import { useState, useCallback } from 'react'

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const options = ["Good", "Neutral", "Bad"]

    const onLeaveFeedback = useCallback((e) =>{
        let value = e.target.textContent
        switch (value) {
            case 'Good':
                setGood(prev => prev + 1)
                break
            case 'Neutral':
                setNeutral(prev => prev + 1)
                break
            case 'Bad':
                setBad(prev => prev + 1)
                break
            default:
                return
        }  
    }, [])

    const countTotalFeedback = () => {
    return good + neutral + bad
  }

    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    if (total === 0) {
      return 0
    }
    return Math.round((good * 100) / total) 
  }

  

    return (
      <div className={s.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (<Notification message="No feedback given"/>) : 
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()} />)}
        </Section>
      </div>
    )
}

export default App;