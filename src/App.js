import React from 'react';
import './App.css';
import { Expanded } from './components/Expanded/Expanded';

function App() {
  return (
    <div className="App">
      <Expanded
          title={'Visa infinite Сбербанк первый'}
          cardNumber={'8888'}
          dateTo={'07.08.2019'}
          amount={28.756}
          currency={'₽'}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
          viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
          Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
          In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
          Pellentesque non leo vitae velit molestie finibus eget ut est.`}
      />
            <Expanded
          title={'Visa infinite Сбербанк первый'}
          cardNumber={'8888'}
          dateTo={'14.08.2019'}
          amount={28.756}
          currency={'₽'}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
          viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
          Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
          In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
          Pellentesque non leo vitae velit molestie finibus eget ut est.`}
      />
    </div>
  );
}

export default App;
