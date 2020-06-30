import React, { Component } from "react";
import UserFields from "./UserFields";
import ValidationError from "../../utilities/ValidationError";

export default class OrganizationRegistration extends Component {
  render() {
    const { zipcodeError } = this.props.errorProps;
    return (
      <div>
        <UserFields
          addTempValidation={this.props.addTempValidation}
          addTempValue={this.props.addTempValue}
          errorProps={this.props.errorProps}
        />
        <div className="inputContainer">
          <input
            type="text"
            name="name"
            id="name"
            className="registrationInput"
            placeholder="Organization Name"
            aria-label="Organization Name"
            onChange={(ev) => this.props.addTempValue("name", ev.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="address"
            id="address"
            className="registrationInput"
            placeholder="Address"
            aria-label="Address"
            onChange={(ev) =>
              this.props.addTempValue("address", ev.target.value)
            }
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="city"
            id="city"
            className="registrationInput"
            placeholder="City"
            aria-label="City"
            onChange={(ev) => this.props.addTempValue("city", ev.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="state"
            id="state"
            className="registrationInput"
            placeholder="State"
            aria-label="State"
            onChange={(ev) => this.props.addTempValue("state", ev.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="registrationInput"
            placeholder="Zipcode"
            aria-label="Zipcode"
            onChange={(ev) =>
              this.props.addTempValidation("zipcode", ev.target.value)
            }
            required
          />
          {zipcodeError && <ValidationError message={zipcodeError} />}
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="phone"
            id="phone"
            className="registrationInput"
            placeholder="Phone Number (optional)"
            aria-label="Phone Number"
            onChange={(ev) => this.props.addTempValue("phone", ev.target.value)}
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="website"
            id="website"
            className="registrationInput"
            placeholder="Website (optional)"
            aria-label="Website"
            onChange={(ev) =>
              this.props.addTempValue("website", ev.target.value)
            }
          />
        </div>
      </div>
    );
  }
}
