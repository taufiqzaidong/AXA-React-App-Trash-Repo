
import React, { Component } from 'react'

export class SensitiveData extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    render() {
      
        const { values, handleChange } = this.props;
        return (

        <div className={'image-wrapper2'}>
         
      <form>  
         <h4><span>Personal Details</span></h4>
          
         <label for="name">
          <label>Full Name: </label>
          <input placeholder="Enter your Full Name" maxlength="80" ></input>
         </label>
        
          <label for="identification_no">
            <label>NRIC</label>
            <input type="text" placeholder="000000-00-0000" maxlength="14" ></input>
          </label>

          <label for="dob">
          <label>Date of Birth</label>
          <input type="text" placeholder="Day / Month / Year" readonly="" ></input>
          </label>

          <label>Gender</label>
          <label class="radio-label " for="male">
          <input type="radio" id="male" name="gender" value="1"></input>
          </label>
          <label class="radio-label " for="female">Female
          <input type="radio" id="female" name="gender" value="2"></input>
          </label>

          <h4><span>How to Contact you?</span></h4>

          <label for="email">
          <label>Email address</label>
          <input type="text" placeholder="youremail@email.com" ></input>
          </label>

          <label for="address">
          <label>Address</label>
          <input type="text" placeholder="Address line 1" maxlength="24"></input>
          </label>

          <label for="state">
          <label>State</label>
          <select class="sel-input">
                                <option value="">Select a state</option>
                                <option value="1">Johor</option>
                                <option value="2">Kedah</option>
                                <option value="3">Kelantan</option>
                                <option value="4">Melaka</option>
                                <option value="5">Negeri Sembilan</option>
                                <option value="6">Pahang</option>
                                <option value="7">Perak</option>
                                <option value="8">Perlis</option>
                                <option value="9">Pulau Pinang</option>
                                <option value="10">Sabah</option>
                                <option value="11">Sarawak</option>
                                <option value="12">Selangor</option>
                                <option value="13">Terengganu</option>
                                <option value="14">WP Kuala Lumpur</option>
                                <option value="15">WP Labuan</option>
                                <option value="16">WP Putrajaya</option>
            </select>
          </label>


          <label for="postcode">
          <label>Postcode</label>
          <input type="text" placeholder="00000" maxlength="5"></input>
          </label>

          <label for="phone">
          <label>Phone number</label>
          <input type="text" placeholder="+60 123456789" maxlength="14" ></input>
          </label>

          <h4><span>Payment Method</span></h4>
          <label>Payment method</label>
          <select class="sel-input">
                                <option value="">Select payment method</option>
                                <option value="2">Online Banking</option>
                                <option value="3">Credit Card</option>
          </select>

          <label>Online banking</label>
          <select class="sel-input">
                                <option value="">Select bank</option>
                                <option value="1">AffinOnline</option>
                                <option value="2">Alliance Online</option>
                                <option value="3">AmOnline</option>
                                <option value="4">Bank Islam</option>
                                <option value="5">Bank Rakyat Internet Banking</option>
                                <option value="6">Bank Muamalat</option>
                                <option value="8">CIMB Click</option>
                                <option value="9">Hong Leong Online</option>
                                <option value="10">HSBC</option>
                                <option value="12">Maybank2U</option>
                                <option value="13">Maybank2E</option>
                                <option value="14">OCBC</option>
                                <option value="15">Public Bank</option>
                                <option value="16">RHB Online</option>
                                <option value="17">Standard Chartered Bank</option>
                                <option value="18">UOB</option>
           </select><br></br>

           <button  onClick={this.onSubmitForm} className="getstarted-btn" >Choose This Plan ⪢</button>
          </form>
        </div>
          
        );

}
}

export default SensitiveData;
