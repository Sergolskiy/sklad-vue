import WhiteInput from '../../../../UI/inputs/WhiteInput/WhiteInput'
import FullButton from '../../../../UI/buttons/FullButtons/FullButton'
import Fb from '../../../../../../public/img/login-group/fb.svg?inline'
import BottomLine from '../BottomLine/BottomLine.vue'
import ForgotComplete from './ForgotComplete/ForgotComplete.vue'

import {routerPaths} from '../../../../../router/routerPaths'


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
      routerPaths: routerPaths,
      forgotComplete: false
    }
  },

  methods: {
    forgotSubmit() {
      this.forgotComplete = !this.forgotComplete
    },
  }

}
