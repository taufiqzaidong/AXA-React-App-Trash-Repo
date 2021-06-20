import React, { Component } from 'react'

export class ConfirmData extends Component {
    
    back = e => {
        this.props.prevStep();
      };

 

    render() {
        const {
            values: { name, dob, identification_no, email,phone,gender,is_citizen,plan_detail_id,is_heavymachineworker,address_1, postcode, state_id, address_2 }
          } = this.props;

        return (
            <div className={'image-wrapper2 '}>
               <br/><br/><br/><br/>
            <div className={'form-box'}>
            <div className={'top-box'}>
            <center><h1>Your personal Information</h1></center>
            </div>
          <center>
           <table>

          <tr>
            <th>Name:</th>
            <th>No. IC:</th>
            <th>Date of Birth:</th>
          </tr>
          <tr>
            <td>{`${name}`}</td>
            <td>{`${identification_no}`}</td>
            <td>{`${dob}`}</td>
          </tr>

          <tr>
            <th>Email Address</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>{`${email}`}</td>
            <td>{`${phone}`}</td>
          </tr>

          <tr>
            <th>Home Address:</th>
            <th>State:</th>
            <th>State:</th>
          </tr>
          <tr>
            <td>{`${address_1}`} {`${address_2}`} </td>
            <td>{`${state_id}`}</td>
            <td>{`${postcode}`}</td>
          </tr>

           </table>
           </center>

           <div className={'middle-box'}>
             <center><h1>Your Payment Information</h1></center>
           </div>
           <center>
           <table>
           <tr>
            <th>Payment Method:</th>
            <th>Bank:</th>
          </tr>
          <tr>
            <td>lol</td>
            <td>lol</td>
          </tr>
          </table>
          </center>

          <div className={'constribution-box'}>
             <center><h1>Your Constribution</h1></center>
             </div>
             <center>
           <table>
           <tr>
            <th>Constribution Payment (RM)</th>
            <th>Monthly</th>
            <th>Half-Yearly</th>
            <th>Annually</th>
          </tr>
          <tr>
            <td>eMedic Plan</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Reward</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Total Constribution</td>
            <td></td>
          </tr>
          <tr>
            <td>Frequency of Constribution</td>
            <td></td>
          </tr>
          <tr>
            <td>Payment Period</td>
            <td></td>
          </tr>
          </table>
          </center>


           <button  onClick={this.back} className = {'submit-btn'}>Change Plan</button>
           <button  onClick={this.back} className = {'submit-btn'}>Proceed</button>
           </div> 
           </div>
          
        )
    }
}

export default ConfirmData

