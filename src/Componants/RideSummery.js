import React from "react";
import "./RideSummery.css";

class RideSummery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickup: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      pickup: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Pick up from : ${this.state.pickup}`)
  };
  render() {
    return (
      <div class="form1">
        <div class="heading">
          <h3>Ride Summary</h3>
          <h3>Ride 1</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          Pick up From
          <input
            type="text"
            label="pickup"
            id="pickup"
            name="pickup"
            onChange={this.handleInputChange}
            value={this.state.pickup}
          />
          <br />
          <br />
          <br />
          Drop off to
          <input type="text" name="dropoff" />
          <br />
          <br />
          <br />
          <br />
          from date
          <input type="date" name="date" /> to date{" "}
          <input type="date" name="date" />
          <br />
          <br />
          from date
          <br /> <input type="date" name="date" /> to date{" "}
          <input type="date" name="date" />
          <br />
          <br />
          <br />
          <br />
          For rides <br />
          <input type="number" name="no" />
          For rides <br />
          <input type="number" name="no" />
          <br />
          <br />
          <br />
          <br />
          Distance
          <br /> <input type="number" />
          Distance
          <br /> <input type="number" />
          <br />
          <br />
          <br />
          <br />
          Time
          <br /> <input type="time" name="time" />
          Time
          <br /> <input type="time" name="time" />
          <br />
          <br />
          <br />
          <br />
          Sign in : <u>$0</u>
          Sign in : <u>$0</u>
          <br />
          <br />
          <br />
          <br />
          Sign Out: <u>$0</u>
          Sign Out: <u>$0</u>
          <br />
          <br />
          <br />
          <br />
          Weekly Cost
          <br />
          <input type="number" name="cost" />
          <br />
          <br />
          Weekly Cost
          <br />
          <input type="number" name="cost" />
          <br />
          <br />
          FOR EVERY <br /> <input type="checkbox" id=" " name="mon" value=" " />
          FOR EVERY <br /> <input type="checkbox" id=" " name="mon" value=" " />
          <label for=" "> MONDAY</label>
          <br />
          <input type="checkbox" id=" " name="tue" value=" " />
          <label for=" "> MONDAY</label>
          <br />
          <input type="checkbox" id=" " name="tue" value=" " />
          <label for=" "> TUESDAY</label>
          <br />
          <input type="checkbox" id=" " name="Thu" value=" " />
          <label for=" "> TUESDAY</label>
          <br />
          <input type="checkbox" id=" " name="Thu" value=" " />
          <label for=" "> THURSDAY</label>
          <br />
          <input type="checkbox" id=" " name="Fri" value=" " />
          <label for=" "> THURSDAY</label>
          <br />
          <input type="checkbox" id=" " name="Fri" value=" " />
          <label for=" "> FRIDAY</label>
          <br /> PICK UP AT <input type="time" name="time" />
          &nbsp;DROP OFF AT <input type="time" name="time" />
          <label for=" "> FRIDAY</label>
          <br /> PICK UP AT <input type="time" name="time" />
          &nbsp;DROP OFF AT <input type="time" name="time" />
          <br />
          <br />
          <br />
          <br />
          RETURN &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
          RETURN &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
          <br />
          <br />
          <br />
          <br />
          EVERY &nbsp; WEDNESDAY &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
          <br />
          <br />
          EVERY &nbsp; WEDNESDAY &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
          <br />
          <br />
          RETURN &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
          RETURN &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
          <br />
          <br />
          <br />
          <br />
          BREAK &nbsp;FROM
          <input type="date" />
          <input type="time" />
          TO
          <input type="date" />
          <input type="time" />
          BREAK &nbsp;FROM
          <input type="date" />
          <input type="time" />
          TO
          <input type="date" />
          <input type="time" />
          <br />
          <br />
          <span>
            &lt; <a href="./"> Back</a>
          </span>
          <button name="add-another-ride">Add Another Ride</button>
          <button type="cancel" name="add-another-ride">
            Cancel
          </button>
          <button type="submit" name="add-another-ride">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default RideSummery;
