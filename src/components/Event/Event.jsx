import PropTypes from 'prop-types';
import css from './Event.module.css';
// Импорт функции формата времени
// import { formatEventStart } from 'utils/formatEventStart';
// import { formatEventDuration } from 'utils/formatEventDuration';

//одна строка, вместо дух выше
import { formatEventDuration, formatEventStart } from 'utils';

import { iconSize } from 'constans';


// Импорт иконок
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';


export const Event = ({ name, location, speaker, type, start, end })=> {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>

            <p className={css.info}>
                <i className="icon"></i>
                {/* иконка стиль и размер */}
                < FaMapMarkerAlt className={css.icon} size={iconSize.sm} />    
            {location}    
            </p>

            <p className={css.info}>
                <i className="icon"></i>
                < FaUserAlt className={css.icon} size={iconSize.sm} /> 
            {speaker}    
            </p>

            <p className={css.info}>
                <i className="icon"></i>
                < FaCalendarAlt className={css.icon} size={iconSize.sm} /> 
            {formattedStart}    
            </p>

            <p className={css.info}>
                <i className="icon"></i>
                < FaClock className={css.icon} size={iconSize.sm} /> 
            {duration}    
            </p>

            <span className={`${css.chip} ${css[type]}`}>{type}</span>    

        </div>
   );

}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
};