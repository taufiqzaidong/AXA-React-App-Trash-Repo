import React, { Component } from 'react'

export class SensitiveData extends Component {

  state = {
    name :'',
    dob : '',
    identification_no : '',
    email : '',
    phone : '',
    gender : '',
    is_citizen : '',
    
};
      
    render() {
      
        return (
          <div>
          <p1>Your Medical Card Information</p1> 
            
        <div className={'content-box'}>
          
        <div >
      <form>  
         <h4  ><span>Personal Details</span></h4> 
        
         <table >
         <tr/> <label  >Full Name: </label> 
          <td/><input placeholder="Enter your Full Name" maxlength="80" ></input>
        
          <td/>  <label  >IC No:</label>
          <td/>  <input type="text" placeholder="XXXXXX-XX-XXXX" maxlength="14" ></input>
            </table>

            <br />
          
          <label  >Date of Birth:</label> <br/>
          <input type="text" placeholder="Day / Month / Year"  ></input>
          
         
          <br/>
          <br />
          <label  >Address: </label> <br/>
          <input type="text" placeholder="Address line 2" size="50"></input><br/>
  
          <input type="text" placeholder="Address line 2" size="50"></input>
          
            <br />
            <br />

          <label  >State:</label>
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
       


          <label  >Postcode:</label>
          <input 
              type="text" placeholder="00000" maxlength="5"></input>

              <br/>
              <br/>

         

          <h4 > <span>Payment Information</span></h4>
<table>
         <tr/> <label className="font-label"  >Payment method:</label>
          <br />
          <td/><select class="sel-input">
                                <option value="">Select payment method</option>
                                <option value="2">Online Banking</option>
                                <option value="3">Credit Card</option>
          </select>
          <br/>
         <td/> <label  >Online banking:</label> <br/>
         <td/> <select class="sel-input">
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
           </table>
        
       

          <h4  ><span>Payment Method</span></h4>

        <table >
         <tr/> <label  >Email address:</label><br/>
          
        <td/>  <input type="text" placeholder="youremail@email.com" ></input><br/>
        
         <td/> <label  >Confirm Email address:</label><br/>
          
         <td/> <input type="text" placeholder="youremail@email.com" ></input>
          <br />

          </table>
         
          <label  >Phone number:</label> <br/>
          <input 
              type="text" placeholder="+60 123456789" maxlength="14" ></input>
       
            <br />
            <br />

          </form>
      </div>
        </div>
        </div>
        
       
        );

}
}

export default SensitiveData;
