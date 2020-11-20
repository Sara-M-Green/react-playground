import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip'
//import Messages from './Messages';
//import TheDate from './state/TheDate'
//import Counter from './state/Counter'
//import Tabs from './state/Tabs'
import Accordion from './state/state-drills/Accordion';

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

// const tabsProp = [
//   {
//     name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
//   },
//   {
//     name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//   },
//   {
//     name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
//   }
// ]

const accordionSections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


function App() {
  return (
    <main className='App'>
      {/* <div>Hello!</div>
      <Messages name="Messages" unread={0} />
      // <Messages name="Notification" unread={10} /> */}
      {/* <TheDate />
      <Counter step={3} /> */}
      {/* <Tabs tabs={tabsProp}/> */}
      <Accordion sections={accordionSections} />
    </main>

  );
}

export default App;