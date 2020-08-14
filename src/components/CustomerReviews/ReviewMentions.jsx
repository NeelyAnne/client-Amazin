import React, { Component } from 'react';
import "./CustomerReviews.css";
// import BadStar from "../RatingSummary/badStar";
// import LowStar from "../RatingSummary/lowStar";
// import MidStar from "../RatingSummary/midStar";
// import GoodStar from "../RatingSummary/goodStar";
// import HighStar from "../RatingSummary/highStar";


class ReviewMentions extends Component {
    constructor(props) {
        super(props)
    }
   
    state = {
        count: 0
    };

    handleClick = ()=> {
        this.setState(({count}) => ({
            count: count + 1
        }));
    };

    // starLogic = (rate) =>{
    //     if (rate <= 1){
	// 		return(<BadStar />)
	// 	} else if (rate <=2){
	// 		console.log(rate, "lowstar")
	// 		return(<LowStar />)
	// 	} else if (rate <=3){
	// 		console.log(rate, "midstar")
	// 		return(<MidStar />)
	// 	} else if (rate <= 4){
	// 		return(<GoodStar />)
	// 	} else if (rate <=5){
	// 		console.log(rate, "hightstar")
	// 		return(<HighStar />)
	//     }
    // }


    render() { 

        return ( 
            <div>
                <br/>
                <br />
                <br />
                <div>
                    <div className="profile-avatar">
                        <img className="profile-avatar-img" 
                        src="https://www.amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png">
                        </img>
                    <span className="profile-name">{this.props.name}</span></div>
                </div>
                <table>
                    <tr>
                        <td><h4>*star rating goes here*</h4></td>
                        {/* <td><span className="star-icon"> {this.starLogic(this.props.rate)}</span></td>  */}
                        <td><a href="link to customer review summary page" 
                            className="review-title">{this.props.title}</a></td>
                    </tr>
                </table>
        <div className="review-date">{this.props.date}</div>
                <span className="vp" >Verified Purchase</span>
                
                <div>
                    {this.props.body}
                </div>
                <br />

                <div>
                    <span>
                        <p id="count-btn"> {this.state.count} people found this helpful</p>
                    </span>
                </div>
                <table>
                    <tr>
                        <td><button id="helpful-button" onClick={this.handleClick}>Helpful</button></td>
                        <td><a href="/">Comment</a></td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default ReviewMentions;