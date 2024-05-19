// Define Vue instance
const app = new Vue({
    el: '#app',
    data: {
      name: '',
      surname: '',
      email: '',
      nameFeedback: '',
      surnameFeedback: '',
      emailFeedback: ''
    },
    methods: {
      validateForm() {
        // Reset feedback messages
        this.nameFeedback = '';
        this.surnameFeedback = '';
        this.emailFeedback = '';
  
        // Validate form fields
        if (!this.name) {
          this.nameFeedback = "Please enter your name!";
          return false;
        }
        if (!this.surname) {
          this.surnameFeedback = "Please enter your surname!";
          return false;
        }
        if (!this.email) {
          this.emailFeedback = "Please enter your email!";
          return false;
        }
        // Other validations...
  
        // If form is valid, submit it
        console.log("Form submitted successfully!");
      }
    }
  });
  