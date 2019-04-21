import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weater from './components/weather';

const API_KEY = "38437bbf7af1021d0e45229180c767c6";

class App extends React.Component {

getWeather = async () => {
  const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lviv,ua&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();
  console.log(data);
}

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;

