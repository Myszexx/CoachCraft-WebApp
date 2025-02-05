import {ComponentPreviews, useInitial} from "./dev/index.js";
import {DevSupport} from "@react-buddy/ide-toolbox";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial} >
        <App />
        </DevSupport>
    </StrictMode>,
)
