import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-layoutEffect/Layout';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
import { HookApp } from './HookApp';


ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);


//import './components/08-useReducer/intro-reducer';