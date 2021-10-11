import PropTypes from 'prop-types'
import style from './Statistics.module.css'

export function Statistics({good, neutral, bad, total, positiveFeedback}) {
    return (
        <ul className={style.list}>
            <div className={style.ratings}>
                <li className={style.item}>Good: {good}</li>
                <li className={style.item}>Neutral: {neutral}</li>
                <li className={style.item}>Bad: {bad}</li>
            </div>
            <li className={style.item}>Total: {total}</li>
            <li className={style.item}>Positive feedback: {positiveFeedback}%</li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
}