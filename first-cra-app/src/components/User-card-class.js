import React, { Component } from 'react'

class UserCard extends Component {

    render() {

        const formatName = user => `${user.firstName} ${user.lastName}`

        const user = {
            firstName: this.props.name,
            lastName: this.props.lastname
        }

        const fullName = <p>¡Hola, {formatName(user)}!</p>

        return (
            <article>
                <h3>Usuario:</h3>
                <img src={this.props.image || 'https://image.flaticon.com/icons/png/512/36/36601.png'} alt={this.props.name} />
                { fullName}
            </article >
        )
    }
}

export default UserCard