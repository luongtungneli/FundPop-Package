import React from 'react'

interface PropsInterface {
    title: string
}

function Button(props: PropsInterface) {

    return <div>{props.title}</div>
}

export default Button