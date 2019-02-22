import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_CONTACTS } from "../../actions/types";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

/* 
we created an action type of get contacts

inside the contacts component we brought in connect to connect react and redux

we mapped getContacts to props so we could call this action
then dispatch to the reducer

we also added mapState to props so we could get the contacts that are in the state

we pulled those props that contained the state on line 13
*/
