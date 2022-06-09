import React from 'react';
import { useDispatch } from 'react-redux';
import Content from './store/Components/Content';
import Header from './store/Components/Header';
import { autoLogin } from './store/login';
import './App.css';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
