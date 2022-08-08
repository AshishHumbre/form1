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

  isValid=()=>{
    if(this.state.pickup===''){
        return false
    }
    return true;
  }
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
          from date
          <input type="date" name="date" /> to date{" "}
          <input type="date" name="date" />
          <br />
          <br />
          <br />
          For rides <input type="number" name="no" /> Riders
          <br />
          <br />
          <br />
          Distance
          <input type="number" />
          <br />
          <br />
          <br />
          Time  <input type="time" name="time" />

          <br />
          <br />
          <br />
          Sign in : <u>$0</u>
          <br />
          <br />
    
          Sign Out: <u>$0</u>
          <br />
          <br />
          <br />
          Weekly Cost
          <input type="number" name="cost" />
          <br />
          <br />
          <br />


          FOR EVERY <br /> <input type="checkbox" id=" " name="mon" value=" " />
          <label for=" "> MONDAY</label>
          <br />
          <input type="checkbox" id=" " name="tue" value=" " />
          <label for=" "> TUESDAY</label>
          <br />
          <input type="checkbox" id=" " name="Thu" value=" " />
          <label for=" "> THURSDAY</label>
          <br />
          <input type="checkbox" id=" " name="Fri" value=" " />
          <label for=" "> FRIDAY</label>
          <br />
          <br />
          <br /> 
          PICK UP AT <input type="time" name="time" />
          &nbsp;DROP OFF AT <input type="time" name="time" />
          <br />
          <br />
          <br />
          RETURN &nbsp; PICK &nbsp; UP &nbsp;AT&nbsp;{" "}
          <input type="time" name="time" />
          &nbsp;DROP&nbsp; OFF&nbsp; AT&nbsp; <input type="time" name="time" />
      
          <br />
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
          <br />
          <br />
          <span>
            &lt; <a href="./"> Back</a>
          </span>
          <button name="add-another-ride">Add Another Ride</button>
          <button type="cancel" name="add-another-ride">
            Cancel
          </button>
          <button disabled={!this.isValid()} type="submit" name="add-another-ride">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default RideSummery;
