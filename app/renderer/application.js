import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './components/MainApp'

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<MainApp />, document.querySelector('#application'))
  })
})()
