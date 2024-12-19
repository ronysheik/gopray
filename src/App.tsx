import './styles.css';
import DateTime from './views/DateTime';
import PrayersTable from './views/PrayersTable';
import IslamicCalendar from './views/IslamicCalendar';
import RelatedResources from './views/RelatedResources';
import GeoAddress from './views/GeoAddress';
import { FetchDataProvider } from './contexts/FetchDataContext';
import CalculationMethod from './views/CalculationMethods';

function App() {

  return (
    <div style = {{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        height: '100vh',
        margin: 0,
      }}>
      <img 
          src="mosque.svg" 
          alt="Islamic Prayer Logo" 
          style={{ width: '50px', height: '50px', marginRight: '10px' }} 
      />
     <header>
        <h1 style={{ margin: 0 }}>Islamic Prayers</h1>
        <DateTime />
      </header>
      <body>
        <li style={{listStyle: 'none'}}>
          <FetchDataProvider>
              <PrayersTable />
              <IslamicCalendar />
              <CalculationMethod />
          </FetchDataProvider>
          <GeoAddress></GeoAddress>
          <RelatedResources></RelatedResources>
        </li>
      </body>
    </div>
  );
}

export default App;
