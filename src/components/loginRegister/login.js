import React, {Component} from 'react';
import {login} from './../funcionts';

export default class Login extends Component {

    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        const User = {
            email: this.state.email,
            password: this.state.password
        }
        login(User).then((response) => {
            if (response) {
                this.props.history.push(`/profile`)
            }
        }).catch((err) => {
            console.log(err, 'login');
        });
    }

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <form onSubmit={this.onSubmit}>
                        <h2>Plase sign in</h2>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                onChange={this.onChange}
                            />
                        </div>
                        <button className="btn btn-info" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
      )
    }
}