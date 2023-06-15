import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import './index.css'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
import { CallbackCounter } from './06-memos/CallbackCounter'

// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { MultipleCustumHooks } from './03-examples/MultipleCustumHooks'
// import { FocusGreen } from './04-useRef/FocusGreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <HooksApp />
    {/* <SimpleForm /> */}
    {/* <FormCustomHook /> */}
    {/* <MultipleCustumHooks /> */}
    {/* <FocusGreen /> */}
    {/* <Layout /> */}
    <CallbackCounter />  
  </>
  // </React.StrictMode>,
)
