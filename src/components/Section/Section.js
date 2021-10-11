import PropTypes from 'prop-types'
import style from './Section.module.css'

export function Section({ title, children }) {
    return (
        <section className={style.container}>
            <h2 className={style.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}