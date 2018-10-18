// import React, { PureComponent, createRef } from 'react';
// import UIkit from 'uikit';
// import FormModal from './FormModal';
// import EssayUpload from './EssayUpload';
// import InputWrapper from './InputWrapper';

// export default class Form extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       isAnonymous: false,
//       email: '',
//       country: '',
//       prompt: '',
//       status: '',
//       college: '',
//       year: -1
//     };
//     this.formRef = createRef();
//   }

//   submit() {}

//   handleUpload(file) {}

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.isUploadComplete) {
//       this.submit();
//       UIkit.modal(this.formRef.current).hide();
//     }
//   };

//   handleSelect = name => ({ _, value }) => {
//     this.setState({ [name]: value });
//   };

//   handleChange = e => {
//     const target = e.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//       [target.name]: value
//     });
//   };

//   handleAnonymous = e => {
//     this.setState(prevState => {
//       const isAnonymous = !prevState.isAnonymous;
//       let name = prevState.name;
//       if (isAnonymous) {
//         name = '';
//       }
//       return {
//         name,
//         isAnonymous
//       };
//     });
//   };

//   render() {
//     const {
//       name,
//       email,
//       country,
//       prompt,
//       status,
//       college,
//       year,
//       isAnonymous
//     } = this.state;

//     return {
//       /*<FormModal
//         modalClass="modal-form"
//         title="Share with the world!"
//         ref={this.formRef}
//       >
//         <form id="essay-form" onSubmit={this.handleSubmit}>
//           <InputWrapper label="Name">
//             <input
//               className="uk-input"
//               type="text"
//               required
//               autoFocus
//               placeholder="Name"
//               value={name}
//               onChange={this.handleChange}
//               name="name"
//               disabled={isAnonymous}
//             />
//           </InputWrapper>

//           <div className="uk-margin">
//             <label>
//               <input
//                 className="uk-checkbox uk-margin-small-right"
//                 type="checkbox"
//                 onChange={this.handleAnonymous}
//                 name="isAnonymous"
//                 checked={isAnonymous}
//               />
//               Anonymous
//             </label>
//           </div>

//           <InputWrapper label="Email">
//             <input
//               className="uk-input"
//               type="email"
//               required
//               placeholder="Email"
//               value={email}
//               onChange={this.handleChange}
//               name="email"
//             />
//           </InputWrapper>

//           <InputWrapper label="Country">
//             <Countries
//               handler={this.handleSelect('country')}
//               selected={country}
//             />
//           </InputWrapper>

//           <InputWrapper label="Upload Essay">
//             <EssayUpload handleUpload={this.handleUpload} />
//           </InputWrapper>

//           <InputWrapper label="Prompt">
//             <Prompts handler={this.handleSelect('prompt')} selected={prompt} />
//           </InputWrapper>

//           <InputWrapper label="Application Status">
//             <Statuses handler={this.handleSelect('status')} selected={status} />
//           </InputWrapper>

//           <InputWrapper label="College submitted">
//             <Colleges
//               handler={this.handleSelect('college')}
//               selected={college}
//             />
//           </InputWrapper>

//           <InputWrapper label="Year submitted">
//             <Years handler={this.handleSelect('year')} selected={year} />
//           </InputWrapper>
//         </form>
//       </FormModal>*/
//     };
//   }
// }
