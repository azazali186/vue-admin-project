/* eslint-disable no-undef */

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const notify = (type, text) => {
  toast('BOUNCE', {
    type: type,
    icon: 'fas fa-exclamation-triangle',
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored',
    transition: toast.TRANSITIONS.BOUNCE,
    message: text
  })
}
