import React from 'react'

const Title = props => props.text ? <h1>{props.text}</h1> : <h1>El título no tiene prop con texto</h1>

export default Title