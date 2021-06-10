import React, { Component } from 'react';
import SensitiveData from '../../Page4components/SensitiveData';


class PlanComponent extends Component {

    continue = e => {
        this.props.nextStep();
      };
   
    constructor(props) {
        super(props)
        //this.state = { isClicked: false }
        //this.handleOnClick = this.handleOnClick.bind(this);
        
      }


  /*handleOnClick() {
    this.setState({ isClicked: true });
  }*/
    

    render() {
        /*
        let userForm;
        
  
        if (this.state.isClicked) {
          userForm = <SensitiveData/> 
          
        }*/
        
      

        let backgroundColor='#FFFFFF';
        
        switch(this.props.index) {
            case 0:
                backgroundColor = '#FFFFFF'
                break;
            case 1:
                backgroundColor = "#FFFFFF"
                break;
            case 2:
                backgroundColor = '#FFFFFF'
                break;
            default:
                backgroundColor= '#FFFFFF'
                break;
        }

        
        return (
            <div className={"individual-plan"} style={{'backgroundColor': backgroundColor}}>
                <div  className={'plan-header'} style={{'color': '#FFFFFF'}}>{`eMedic ${this.props.plan.name}`} </div>
            
                <div className={'plan-price'} style={{'backgroundColor': '#FBBBB4'}}>RM {this.props.basePriceMonthly}<span>/month</span></div>
                <div className={'plan-annual-limit'} style={{fontSize: 15}} >
                        with {`RM${this.props.plan["annual_limit"].toLocaleString()}`} annual limit
                    </div>
                    <div className={'plan-info'} style={{fontSize: 13}}>
                        <ul className='plan-description'>
                            <li>
                                <span>
                                    Cover for hospitalisation expenses{" "}
                                    <strong>in Malaysia only,</strong> up to
                                    RM{` ${this.props.plan["annual_limit"].toLocaleString()}`}, including surgery, ambulance, ICU and
                                    prescription drugs<br/><br/>
                                </span>
                            </li>
                            <li>
                                Cashless admission to <a href="https://www.axa.com.my/hospital-panel-life" target="_blank">AXA panel hospitals</a><br/><br/>
                            </li>
                            <li>
                                Cover for room and board up to RM250 a day (choose any room type that is available within this budget)
                            </li>
                        </ul>
                </div><br/>
                <div>
                    <button  onClick={this.continue}className="choose-plan-btn" >Choose This Plan   ⪢</button>
                    
                </div>
            </div>
            
        );
    }
}
  


export default PlanComponent;
