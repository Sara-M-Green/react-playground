import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip'
//import Messages from './Messages';
import TheDate from './state/TheDate'
import Counter from './state/Counter'

//make 2 tooltips here and another inside the App directly
// const firstToolTip = (
//   <Tooltip color='hotpink' message='tooltip-message'>
//     ipsum
//   </Tooltip>
// )

// const secondToolTip = (
//   <tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </tooltip>
// )


function App() {
  return (
    <main className='App'>
      {/* <div>Hello!</div>
      <Messages name="Messages" unread={0} />
      <Messages name="Notification" unread={10} /> */}
      <TheDate />
      <Counter step={3} />
    </main>

  );
}

export default App;