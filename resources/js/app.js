import { App } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React from 'react'
import { render } from 'react-dom'
require('./bootstrap')

const app = document.getElementById('app')

InertiaProgress.init()

render(
  <App
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    />,
  app
)
