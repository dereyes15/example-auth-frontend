import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import AuthService from '../services'

class RegisterPage extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			registerSuccess: false,
			errors: "",
			form: {
				user: {
					firstName: "",
					lastName: "",
					email: "",
					password: "",
				}
			}
		}
	}

	render() {
		let { firstName, lastName, email, password } = this.state.form.user
		return (
			<main>
				<h2>Welcome! Register here.</h2> <h6> ...and sign your life away... </h6>
				
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						name="firstName"
						placeholder = "Enter your first name"
						value={firstName}
						onChange={this.onChange}
					/>

					<input
						type="text"
						name="lastName"
						placeholder = "Enter your last name"
						value={lastName}
						onChange={this.onChange}
					/>
					<input
						type="email"
						name="email"
						placeholder = "Enter your email"
						value={email}
						onChange={this.onChange}
					/>
					{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
					<input
						type="password"
						name="password"
						placeholder = "Create a password"
						value={password}
						onChange={this.onChange}
					/>
					{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
					<button onSubmit={this.onSubmit}>Register</button>
				</form>
				{this.state.registerSuccess && <Redirect to="#" />}
			</main>
		)
	}

	onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()

		this.auth.register(this.state.form)
		.then(json => {
			console.log("Got to second then:", json)
			if(json.errors) {
				this.setState({
					errors: json.errors
				})
			}
			this.setState({
				registerSuccess: true
			})
		})
	}
}

export default RegisterPage
