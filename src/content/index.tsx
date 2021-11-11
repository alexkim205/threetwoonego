import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Content from './Content'

const root = document.createElement('div')
root.setAttribute('id', '__321_content_root')
root.style.cssText = `
	height: 20vh;
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 10000000000000;
	background-color: lightblue;
`

const body = document.querySelectorAll('body')
body[0]?.prepend(root)

ReactDOM.render(<Content />, root)
