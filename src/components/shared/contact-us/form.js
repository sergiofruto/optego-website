import React from "react";
import axios from "axios";
import classnames from 'classnames';
import Button from '../../../components/shared/button/button';

import Arrow from './../../../../static/icon-arrow-white.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      email: "",
      services: "",
      message: "",
      isSubmitted: false,
      isSending: false,
      formSuccess: false,
      formError: true,
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isSending: true})
    axios
      .post(
        "https://getform.io/f/bb502075-f90f-4578-9cf1-75795afb5eda",
        this.state,
        { headers: { Accept: "application/json" } }
      )
      .then((response) => {
        this.setState({ 
          name: "",
          email: "",
          services: "",
          message: "",
          isSending: false,
          isSubmitted: true,
          formSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isSubmitted: true, formError: true });
      });
  };
  render() {
    return (
      <form
        className={classnames('contact-us-form', 'animate__animated', (this.props.isVisible && 'animate__fadeInUp'))}
        onSubmit={this.handleSubmit}
      >
        <input 
          className="half"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          required
          onChange={this.handleChange}
        />
        <input 
          className="half"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
          onChange={this.handleChange}
        />
        <input
          className="full"
          type="text"
          name="services"
          id="services"
          placeholder="services"
          required
          onChange={this.handleChange}
        />
        <textarea 
          name="message"
          id="message"
          placeholder="Project Description"
          required
          onChange={this.handleChange}
        />
        <div className="button-row">
          <button className={classnames('main-btn')} type="submit">
            { this.state.isSending && (
                <div class="loader">Loading...</div>
              )
            }
            { !this.state.isSending && (
                <span>
                  send
                  <Arrow />
                </span>
              )
            }
          </button>
          {(this.state.formSuccess && this.state.isSubmitted) && <p className="form-message success">Thank you! Your message has been successfully sent. We will contact you very soon!</p>}
          {(this.state.formError && this.state.isSubmitted) && <p className="form-message error">Thank you! Sorry! Something went wrong, please try again later!</p>}
        </div>
      </form>
    );
  }
}
export default Form;
