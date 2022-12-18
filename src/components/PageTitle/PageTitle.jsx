import PropTypes from 'prop-types';
import css from './PageTitle.module.css'

export const PageTitle = ({ text }) => {
    // css это объект имя стилевого правила это ключ. Вызываем через точку
    return <h1 className={css.title}>{text}</h1>
};

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};