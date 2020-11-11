import Language from '../../components/Langueage/Language.vue'
import Fb from '../../../../../../public/img/login-group/fb.svg?inline'
import DefaultInput from '../../../../UI/inputs/DefaultInput/DefaultInput.vue'

import {routerPaths} from "../../../../../router/routerPaths";

export default {
  name: "SignUpForm",

  components:{
    Language,
    Fb,
    DefaultInput
  },

  data(){
    return{
      routerPaths: routerPaths
    }
  }
}