import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid';

export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
            {options.map(e => {
                return (<button key={uuid()} onClick={onLeaveFeedback}>{e}</button>)
                })}
        </>
    )
}