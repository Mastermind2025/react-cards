import { Event } from 'components/Event/Event'
import css from './EventBoard.module.css';
import PropTypes from 'prop-types';

export const EventBoard = ({ events }) => {
    console.log(events);
    return (
        <div className={css.eventBoard}>
        {events.map(({name, location, speaker, type, time}) => (
            // <div key={event.name}>{event.name}</div>
            <Event
                key={name}
                name={name}
                location={location}
                speaker={speaker}
                type={type}
                start={time.start}
                end={time.end}
            />
        ))} 
        </div>
    );
};

EventBoard.propType = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            }),
        }),
    ),

};