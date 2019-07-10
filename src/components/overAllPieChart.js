import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class OverAllChartsPage extends React.Component {

 
    
  state = {
    dataPie: {
      labels: ["Daily", "Weekly", "Monthly"],
      datasets: [
        {
          data: [ this.props.daily , this.props.weekly , this.props.monthly ],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Total Monthly Spending: £ 0.00</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default OverAllChartsPage;
