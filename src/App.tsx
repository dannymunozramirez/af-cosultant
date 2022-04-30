import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/headerComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './content/landingComponent';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
      <BrowserRouter>
          {/* <Routes> */}
            <Route path="/" component={LandingPage}/>
          {/* </Routes> */}
        </BrowserRouter>
      </Content>
    </>
  );
}

export default App;
