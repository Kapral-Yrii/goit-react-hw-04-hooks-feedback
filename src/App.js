import './App.css';
import { Component } from 'react'
import { Section } from './components/Section/Section'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Statistics } from './components/Statistics/Statistics'
import { Notification } from './components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  options = ["Good", "Neutral", "Bad"]
  onLeaveFeedback(e) {
    console.log(e.target.textContent.toLowerCase());
  }
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback()
    if (total === 0) {
      return 0
    }
    return Math.round((this.state.good * 100) / total) 
  }
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (<Notification message="No feedback given"/>) : 
          (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()} />)}
        </Section>
      </>
    )
  };
}

export default App;
