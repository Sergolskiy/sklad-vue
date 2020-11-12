import WhiteInput from '../../../../UI/inputs/WhiteInput/WhiteInput'
import FullButton from '../../../../UI/buttons/FullButtons/FullButton'
import Fb from '../../../../../../public/img/login-group/fb.svg?inline'
import BottomLine from '../BottomLine/BottomLine.vue'
import ForgotComplete from './ForgotComplete/ForgotComplete.vue'
import {validation} from "../../../../../services/validation";




export default {
  name: "Forgot",

  components: {
    WhiteInput,
    Fb,
    FullButton,
    BottomLine,
    ForgotComplete,
  },

  data() {
    return{
      forgotComplete: false,
      email: '',

      validation: {
        email: false,
        password: false
      },
    }
  },

  methods: {
    forgotSubmit() {
      let validationItems = {
        email: this.email,
      }

      let validationOptions = {
        email: {
          type: [
            'empty',
            'email',
          ]
        },

      }
      let validate = validation(validationItems, validationOptions);
      this.validation = validate.validation;

      if(validate.isValidate){
        this.forgotComplete = !this.forgotComplete
      }

    },
  }

}
