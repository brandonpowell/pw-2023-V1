//TypeError: Cannot read properties of undefined (reading 'statusCode')
// import React, { Component } from "react";
// import { apiUrl } from "./helpers"
// import axios from "axios";
// import validator from "validator";
// import PropTypes from 'prop-types';
// import Loading from "./shared/loading";


//   // eslint-disable-next-line
//   class FormComp extends Component {

//     constructor(props){//It's used for initiatizing the local state of the component by assigning an object to this. state.
//       super(props);
//       this.state = {
//         email: '', //the form does not have the input or email will be empty.
//         loading: false //the form will be not loading but when they click on the button will load.
//       }
//     }

//     handleOnChangeEmail = email => {
//       this.setState ({ //This how you set the component set in react. 
//         email: email
//       })
//     }

//     handleLoadingState = loading => {//Will handle the loading of the form.
//       this.setState({loading: loading });
//     }

//     handleSendEmail = email => {//When they push the button to send email.
//       this.handleLoadingState(true);
//       //The axios will post the email on the suscribe list.

//       axios.post(`${apiUrl}/subscribe`,{
//         email: email
//       }).then(res => {//Will receive an success message when email had been sent.
//         if(res.success) {
//           this.setState({
//             email: '', //Will be a empty string within the input field.
//             success: 'Thank you for subscribing! Welcome to the percepverse!'
//           });
//             this.handleLoadingState(false); 
//         //Turn off the loading state.
//         } else {
//           this.setState({// When the mailchimp past in an error saying unable to subscribe.
//             email: '', //Will be a empty string within the input field.
//             chimpError: 'mailchmp got an error please try again.',
//           }); 
//           this.handleLoadingState(false);
//           //Turn off the Loading State
//          } 
//       }).catch(issues => {//Will receive an error message if message has been not sent.
//         if(issues.error) {
//           this.handleLoadingState(false);//Turn off the Loading State
//             this.setState({
//               email: '', //Will be a empty string within the input field.
//               error: 'unable to subscribe! Please enter your email again?',
//             });
//           } 
//       });
//     }

//     render() {
//       // the message and the input values are all component state now
//       // this with the nSubmit is handle the Submission of the form to Submit the button  {/* // nSubmit={ this.handleSubmit }> */}
//       return (
//         <div> 
//           {this.state.loading
//             ? <Loading message="working on it..." /> 
//             :
//             <>
//           <form
//               className="formElem"
//               method="POST">

//               <input
//                 type="email"
//                 className="userEmail"
//                 placeholder="a new beginning start here."
//                 name="userEmail"
//                 value={this.state.email}
//                 // eslint-disable-next-line no-undef 
//                 onChange={({ target }) => this.handleOnChangeEmail(target.value)} />

//               <input
//                 // eslint-disable-next-line no-undef
//                 onClick={() => this.handleSendEmail(this.state.email)}
//                 // eslint-disable-next-line no-undef
//                 disabled={!validator.isEmail(this.state.email)}// Error Message when using this disabiled and vaildator. 
//                 //email will not take if not a real email address. 
//                   className="userSubmit"
//                   type="subscribe"
//                   value="subscribe" 
//                 />
//             </form>
            
//               <div className="success">
//                   <p>{this.state.success}</p>
//               </div>

//               <div className="error">
//                   <p>{this.state.error}</p>
//               </div>

//               <div className="ChimpError">
//                   <p>{this.state.chimpError}</p>
//               </div>
//             </>
//           }
//         </div>
//       );
//     }
//   }

import React, { Component } from "react";
import { apiUrl } from "./helpers"
import axios from "axios";
import validator from "validator";
import PropTypes from 'prop-types';
import Loading from "./shared/loading";

class FormComp extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: '', 
        loading: false,
        success: '',
        chimpError: '',
        error: ''
      }
    }

    handleOnChangeEmail = email => {
      this.setState ({ 
        email: email
      })
    }

    handleLoadingState = loading => {
      this.setState({loading: loading });
    }

    handleSendEmail = email => {
      this.handleLoadingState(true);
      axios.post(`${apiUrl}/subscribe`,{
        email: email
      }).then(res => {
        if(res.status === 200 && res.data.success) {
          this.setState({
            email: '', 
            success: 'Thank you for subscribing! Welcome to the percepverse!'
          });
            this.handleLoadingState(false); 
        } else {
          if(res.data && res.data.error) {
            this.setState({
              email: '', 
              chimpError: 'mailchmp got an error please try again.',
            }); 
          } else {
              this.setState({
              email: '', 
              error: 'An error occurred please try again later.',
            });
          }
          this.handleLoadingState(false);
         } 
      }).catch(issues => {
        if(issues.response && issues.response.data && issues.response.data.error) {
          this.handleLoadingState(false);
            this.setState({
              email: '', 
              error: 'unable to subscribe! Please enter your email again?',
            });
          } else {
            this.setState({
              email: '', 
              error: 'An error occurred please try again later.',
            });
          } 
      });
    }

    render() {
      return (
        <div> 
          {this.state.loading
            ? <Loading message="working on it..." /> 
            :
            <>
          <form
              className="formElem"
              method="POST">

              <input
                type="email"
                className="userEmail"
                placeholder="a new beginning start here."
                name="userEmail"
                value={this.state.email}
                onChange={({ target }) => this.handleOnChangeEmail(target.value)} />

              <input
                onClick={() => this.handleSendEmail(this.state.email)}
                disabled={!validator.isEmail(this.state.email)}
                  className="userSubmit"
                  type="subscribe"
                  value="subscribe" 
                />
            </form>
            
              <div className="success">
                  <p>{this.state.success}</p>
              </div>
              <div className="chimpError">
                  <p>{this.state.chimpError}</p>
              </div>

              <div className="error">
                  <p>{this.state.error}</p>
              </div>
            </>
          }
        </div>
      );
    }
}

  // eslint-disable-next-line react/no-typos
  FormComp.PropTypes = {
    email: PropTypes.string,
    handleOnChangeEmail: PropTypes.func,
    handleSendEmail: PropTypes.func
  }

export default FormComp