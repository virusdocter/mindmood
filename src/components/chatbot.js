import React, { Component } from 'react';
import Bot from 'react-native-chatbot';

// Instructions that chatbot will follow:
const  steps  = [
  {
    id: '1',
    message :  ' Hi, I'm Serjão, what's your name? ' ,
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger :  ' ola ' ,
  },
  {
    id :  ' ola ' ,
    message :  ' Hello {previousValue} ' ,
    trigger: '3',
  },
  {
    id: '3',
    message :  ' What do you want to know about me? ' ,
    trigger: '4',
  },
  {
    id: '4',
    options: [
      {value :  1 , label :  ' How many ounces did you kill? ' , trigger :  ' 5 ' },
      {value :  2 , label :  'Is this story really true? ' , trigger :  ' 6 ' },
      {value :  3 , label :  ' What does the jaguar sound like? ' , trigger :  ' 7 ' },
      {value :  4 , label :  ' I want nothing not, bye ' , trigger :  ' 8 ' },
    ],
  },
  {
    id: '5',
    message :  ' I killed one that cost two or more! ' ,
    trigger: '3',
  },
  {
    id: '6',
    message :  ' It's true, I do not lie! ' ,
    trigger: '3',
  },
  {
    id: '7',
    message :  ' It does this: NiaurrrrrAurrrrr. ' ,
    trigger: '3',
  },
  {
    id: '8',
    message :  ' So long ' ,
    end: true,
  },
];


export default class ChatBot extends Component {
  render() {
    return (
      <Bot
        steps={steps}
        // Bot and user avatar //
        botAvatar = ' https://i.imgur.com/uVRn78V.png '
        userAvatar='https://i.imgur.com/6sm2DYv.png'

        // Colors of dialogues //
        botFontColor={ '#FFFDF8' }
        userFontColor = { ' # FFFDF8 ' }
        botBubbleColor={ '#E89984' }
        userBubbleColor={ '#FFC286' }

        // Background colors of the chat //
        style={{ backgroundColor: '#FFFDF8', marginTop: 2 }}
        contentStyle={{ backgroundColor: '#FFFDF8' }}

        // Footer Style //
        footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
        submitButtonStyle={{ backgroundColor: '#E89984', borderRadius: 4, width: 63, margin: 2 }}
      />
    );
  }
}