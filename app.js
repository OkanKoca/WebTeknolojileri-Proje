new Vue({
  el: '#form',
  data: {
    name: '',
    surname: '',
    email: '',
    message: '',
    gender: '',
    city: '',
    isChecked: false,
    errors: {
      name: '',
      surname: '',
      email: '',
      message: '',
      gender: '',
      isChecked: ''
    }
  },
  methods: {
    validateForm() {
      this.errors = {
        name: '',
        surname: '',
        email: '',
        message: '',
        gender: '',
        isChecked: ''
      };
      
      let valid = true;

      var parts = this.email.split('@');
      if (!this.name) {
        this.errors.name = 'İsim zorunludur.';
        valid = false;
      }
      if (!this.surname) {
        this.errors.surname = 'Soyisim zorunludur.';
        valid = false;
      }
      if (!this.email) {
        this.errors.email = 'Email zorunludur.';
        valid = false;
      } else if (!this.validEmail(this.email)) {
        this.errors.email = 'Geçerli bir email adresi giriniz.';
        valid = false;
      } else if (parts[1] != 'gmail.com') {
        this.errors.email = 'Email subdomaini gmail.com olmalıdır.';
        valid = false;
      }
      if (!this.message) {
        this.errors.message = 'Mesaj zorunludur.';
        valid = false;
      }
      if (!this.gender) {
        this.errors.gender = 'Cinsiyet seçimi zorunludur.';
        valid = false;
      }
      if (!this.isChecked) {
        this.errors.isChecked = 'Onay kutusunu işaretlemeniz gerekmektedir.';
        valid = false;
      }

      if (valid) {
        alert('Form başarıyla gönderildi!');
        this.resetForm();
      }
    },
    validEmail(email) {
      
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
    resetForm() {
      this.name = '';
      this.surname = '';
      this.email = '';
      this.message = '';
      this.gender = '';
      this.city = '';
      this.isChecked = false;
    }
  }
});
