import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid';
import style from './FeedbackOptions.module.css'

export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
            <ul className={style.list}>
                {options.map(e => {
                    return (<li className={style.item} key={uuid()}><button className={style.button} onClick={onLeaveFeedback}>{e}</button></li>)
                })}
            </ul>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}