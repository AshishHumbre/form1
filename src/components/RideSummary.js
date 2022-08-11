import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, submit } from "redux-form";
import { load as loadRide } from "../features/ride";
import "./RideSummary.css";
const data = {};

let RideSummary = (props) => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
    <div className="form1">
      <div className="heading">
        <h2>Ride Summary</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Ride 1</h3>
        <div className="form-box">
          <div className="form-input-sec">
            <label>Pick up From</label>
            <div>
              <Field
                className="field-text field"
                name="pickupfrom"
                component="input"
                type="text"
              />
            </div>
          </div>

          <div className="form-input-sec">
            <label>Drop off to</label>
            <div>
              <Field
                className="field-text field"
                name="dropoffto"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form-input-sec">
            <label>From Date</label>
            <Field
              className="field-date field"
              name="fromDate"
              component="input"
              type="date"
            />

            <label>To Date</label>
            <Field
              className="field-date field"
              name="toDate"
              component="input"
              type="date"
            />
          </div>
          <div className="form-input-sec">
            <label>For Riders</label>
            <div>
              <Field
                className="field-number field"
                name="forRiders"
                component="input"
                type="number"
              />
            </div>
          </div>
          <div className="form-input-sec">
            <label>Distance</label>
            <div>
              <Field
                className="field-number field"
                name="distance"
                component="input"
                type="number"
              />
            </div>
          </div>
          <div className="form-input-sec">
            <label>Time</label>
            <div>
              <Field
                className="field-time"
                type="time"
                name="time"
                component="input"
              />
            </div>
          </div>
          <div className="form-input-sec">
            <label>Sign In :</label>
            <label>$ 0</label>
          </div>
          <div className="form-input-sec">
            <label>Sign Out :</label>
            <label>$ 0</label>
          </div>
          <div className="form-input-sec">
            <label>For Every</label>
            <div>
              <label>
                <Field
                  className="field-checkbox field"
                  name="monday"
                  component="input"
                  type="checkbox"
                  value="monday"
                />{" "}
                Monday
              </label>
              <br />
              <label>
                <Field
                  className="field-checkbox field"
                  name="tuesday"
                  component="input"
                  type="checkbox"
                  value="tuesday"
                />{" "}
                Tuesday
              </label>
              <br />
              <label>
                <Field
                  className="field-checkbox field"
                  name="thursday"
                  component="input"
                  type="checkbox"
                  value="thursday"
                />{" "}
                Thursday
              </label>
              <br />
              <label>
                <Field
                  className="field-checkbox field"
                  name="friday"
                  component="input"
                  type="checkbox"
                  value="friday"
                />{" "}
                Friday
              </label>
            </div>
          </div>
          <div className="form-input-sec">
            <label>Pick Up At</label>
            <Field
              className="field field-time"
              name="pickUpAt"
              component="input"
              type="time"
            />

            <label>Drop Off At</label>
            <Field
              className="field field-time"
              name="dropOffAt"
              component="input"
              type="time"
            />
          </div>
          <div className="form-input-sec">
            <label>Return Pick Up At</label>
            <Field
              className="field field-time"
              name="rpickUpAt"
              component="input"
              type="time"
            />

            <label>Drop Off At</label>
            <Field
              className="field field-time"
              name="rdropOffAt"
              component="input"
              type="time"
            />
          </div>

          <div className="form-input-sec">
            <label>Every Wednesday Pick Up At</label>
            <Field
              className="field field-time"
              name="wpickUpAt"
              component="input"
              type="time"
            />

            <label>Drop Off At</label>
            <Field
              className="field field-time"
              name="wdropOffAt"
              component="input"
              type="time"
            />
          </div>
          <div className="form-input-sec">
            <label>Return Pick Up At</label>
            <Field
              className="field field-time"
              name="rwpickUpAt"
              component="input"
              type="time"
            />

            <label>Drop Off At</label>
            <Field
              className="field field-time"
              name="rwdropOffAt"
              component="input"
              type="time"
            />
          </div>
          <div className="form-input-sec">
            <label>Break From</label>
            <Field
              className="field field-date"
              name="breakFromDate"
              component="input"
              type="date"
            />
            <Field
              className="field field-time"
              name="breakFromTime"
              component="input"
              type="time"
            />

            <label>To</label>
            <Field
              className="field field-date"
              name="breakToDate"
              component="input"
              type="date"
            />
            <Field
              className="field field-time"
              name="breakToTime"
              component="input"
              type="time"
            />
          </div>
        </div>
        <div className="button-div">
          <a className="go-back" id="go-back">
            <b>
              <span style={{ color: "#72bcd4" }}>&#60;</span> Back
            </b>
          </a>
          <button className="add-anoter-ride" id="add-anoter-ride" disabled={pristine}>
            Add Another ride
          </button>

          <button type="button" id="cancel" className="cancel" onClick={reset}>
            Cancel
          </button>
          <button id="submit" type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

RideSummary = reduxForm({
  form: "rideSummary",
})(RideSummary);

RideSummary = connect(
  (state) => ({
    initialValues: state.account.data,
  }),
  { load: loadRide }
)(RideSummary);

export default RideSummary;
