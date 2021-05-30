import React, { Component } from 'react'
import SensitiveData from './Page4components/SensitiveData';

export class UserForm extends Component {

        state = {
            step:1,
            name :'',
            dob : '',
            identification_no : '',
            email : '',
            phone : '',
            gender : '',
            is_citizen : '',
            
        };

        nextStep = () => {
            const {step} = this.state;
            this.setState({
                step : step + 1
            });
        };

        prevStep = () => {
            const { step } = this.state;
            this.setState({
              step: step - 1
            });
          };

          handleChange = input => e => {
            this.setState({ [input]: e.target.value });
          };

          render() {
            const { step } = this.state;
            const { name, dob, identification_no, email, phone, gender, is_citizen } = this.state;
            const values = { name, dob, identification_no, email, phone, gender, is_citizen };
        
            switch (step) {
              case 1:
                return (
                  <SensitiveData
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                );
            
              case 2:
                return null;
              default:
                (console.log('This is a multi-step form built with React.'))
            }
          }
        
}

export default UserForm
