import React, { Component } from 'react'
import SensitiveData from './Page4components/SensitiveData';


export class UserForm extends Component {

        state = {
            name :'',
            dob : '',
            identification_no : '',
            email : '',
            phone : '',
            gender : '',
            is_citizen : '',
            plan_detail_id : '',
            is_heavymachineworker : '',
            address_1 : '',
            postcode : '',
            state_id : '',

            
            
        };

          render() {
           
                return (
                  <SensitiveData
                  />
                );
            
            
          }
        
}

export default UserForm;
