// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// import { FaBeer } from 'react-icons/fa';  // Иконки иморт
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return (
    <div>
      {/* < FaBeer /> Иконки */}
      < PageTitle text="24th Core Worlds Coalition Conference" />
      
      < EventBoard events={ upcomingEvents } />
    </div>
  );
};
