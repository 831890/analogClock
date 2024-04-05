import { ThemeProvider } from 'styled-components';
import ClockContainer from './components/ClockContainer';

const theme = {
  degHour: 0,
  degMin: 0,
  degSec: 0,
};

const App = () => (
  <ThemeProvider theme={theme}>
    <ClockContainer />
  </ThemeProvider>
);

export default App;
