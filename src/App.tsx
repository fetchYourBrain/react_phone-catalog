import './App.scss';
import './reset.scss';
import { Header } from './components/Header/Header';
import { NotFound } from './components/NotFound/NotFound';

export const App = () => {
  return (
    <>
    <Header />
    <NotFound />

    <p>fetchYourBrain</p>
    </>
  );
};
