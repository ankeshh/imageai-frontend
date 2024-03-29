import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    
    onemailchange = (event) => {
        this.setState({email: event.target.value})
    }

    onpasswordchange = (event) => {
        this.setState({password: event.target.value})
    }

    onnamechange = (event) => {
        this.setState({name: event.target.value})
    }

    onsubmitregister = () => {
        fetch('https://secret-sierra-54278.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        }).then(response => response.json()).then(newuser => {
            if(newuser.id){
                this.props.loaduser(newuser);
                this.props.onrouteChange('home')
            }
            else
                alert("Enter your details");
        })
    }

    render() {
        return(
            <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" required onChange={this.onnamechange}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required onChange={this.onemailchange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required onChange={this.onpasswordchange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick = {this.onsubmitregister}/>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default Register;