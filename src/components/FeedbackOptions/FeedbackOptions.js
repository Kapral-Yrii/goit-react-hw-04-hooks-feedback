import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid';

export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
            <ul>
                {options.map(e => {
                    return (<li><button key={uuid()} onClick={onLeaveFeedback}>{e}</button></li>)
                })}
            </ul>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}