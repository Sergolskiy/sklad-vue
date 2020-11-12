import Language from '../../components/Langueage/Language.vue'
import Fb from '../../../../../../public/img/login-group/fb.svg?inline'
import DefaultInput from '../../../../UI/inputs/DefaultInput/DefaultInput.vue'
import DefaultCheckbox from '../../../../UI/checkboxes/DefaultCheckbox/DefaultCheckbox.vue'
import LargeSwitch from '../../../../UI/radiobuttons/LargeSwitch/LargeSwitch.vue'
import MainButton from '../../../../UI/buttons/MainButton/MainButton'
import vSelect from 'vue-select'

export default {
  name: "SignUpForm",

  components:{
    Language,
    Fb,
    DefaultInput,
    DefaultCheckbox,
    LargeSwitch,
    MainButton,
    vSelect
  },

  data(){
    return{
      name: '',
      surName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      stateDistrict: '',
      country: '',
      postNumber: '',
      loginShop : '',
      createPassword: '',
      checkedAmazon: '',
      checkedMerchant: '',
      checkedFunctionality: '',
      registrationAgrre: '',

      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}