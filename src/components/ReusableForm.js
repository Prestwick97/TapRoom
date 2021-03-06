import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text' name='name' placeholder='Potion Name' />
        <input
          type='text' name='effect' placeholder='Effect' />
        <input
        type='number' name='price' placeholder='Price' />
        <button type='submit'>Add new potion</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default ReusableForm;