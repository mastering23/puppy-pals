
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />
)

//What do you observe?
/*
 *Strict Mode tags check for react issues componets,
 tipically we are subject to removed for better performe 
 in our projects 
 */
//Can you describe what is happening in this file?
/*Well  import function from react and react-dom/client
 * as index.css | App from App.jsx
  then we have the intialization of react from queryselector root
  that help to render react|the element root tipically is found in the 
  index.html  as div with id root.
 */

//Have you done this before?
// yes by follow worshop and practices lectures.