import React, {Component} from "react";

class TopMenuBtn extends Component {
    constructor(props) {
        super(props);
        this.curRef = props.curRef;
    }

    

    render() {
        return (
            <div onClick={() => window.scrollTo(0, this.curRef.current.offsetTop)} style={{fontSize:20}}className="aboutUs-btn">About Us
           <div onClick={() => window.scrollTo(0, this.curRef.current.offsetTop)} style={{fontSize:20}}className="contact-btn">Contact
           <div onClick={() => window.scrollTo(1, this.curRef.current.offsetTop)} style={{fontSize:20}}className="faqs-btn">FAQs</div>
           </div>
           <button className="btn-faqs" onClick={this.props.handleClick}>FAQS</button>
           </div>
            
            
            
        )
    }
}

export default TopMenuBtn;