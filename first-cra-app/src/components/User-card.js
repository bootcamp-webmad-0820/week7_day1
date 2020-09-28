import React from 'react'


const UserCard = props => {

    console.log(props)

    const formatName = user => `${user.firstName} ${user.lastName}`

    const user = {
        firstName: props.name,
        lastName: props.lastname
    }

    const fullName = <p>¡Hola, {formatName(user)}!</p>

    return (
        <article>
            <h3>Usuario:</h3>
            <img src={props.image || 'https://image.flaticon.com/icons/png/512/36/36601.png'} alt={props.name} />
            {fullName}
        </article>
    )
}

export default UserCard