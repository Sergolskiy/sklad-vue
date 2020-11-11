
import WhiteInput from '../../../../UI/inputs/WhiteInput/WhiteInput'
import FullButton from '../../../../UI/buttons/FullButtons/FullButton'
import Fb from '../../../../../../public/img/login-group/fb.svg?inline'
import BottomLine from '../BottomLine/BottomLine.vue'


import {validation} from '../../../../../services/validation'

export default {
  name: "Login",

  components: {
    WhiteInput,
    Fb,
    BottomLine,
    FullButton,
  },

  data() {
    return {
      email: '',
      password: '',

      validation: {
        email: false,
        password: false
      },
    }
  },

  methods: {
    auth(e) {
      e.preventDefault();
      let validationItems = {
        email: this.email,
        password: this.password,
      }

      let validationOptions = {
        email: {
          type: [
            'empty',
            'email',
          ]
        },
        password: {
          type: [
            'empty',
            'password',
          ]
        },
      }

      let validate = validation(validationItems, validationOptions);
      this.validation = validate.validation;
      console.log(validate);
      if(validate.isValidate){
        alert(2342)
      }
    },

    registration(e) {
      e.preventDefault();
      let validationItems = {
        registerName: this.registerName,
        phone: this.phone,
        registerEmail: this.registerEmail,
        registerPassword: this.registerPassword,
      }


      let validationOptions = {
        registerName: {
          type: [
            'empty',
          ]
        },
        registerEmail: {
          type: [
            'empty',
            'email',
          ]
        },
        phone: {
          type: [
            'empty',
            'phone',
          ]
        },
        registerPassword: {
          type: [
            'empty',
            'password',
          ]
        },
      };

      let validate = validation(validationItems, validationOptions);
      this.validationRegister = validate.validation;

      console.log(validate);

      if(validate.isValidate){
        console.log(this.$store.dispatch('auth'));
        console.log(this.$store.getters.getAuth);
        this.$emit('close');
      }

    },
  },


}
