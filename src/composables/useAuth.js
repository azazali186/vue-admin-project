import { reactive, toRefs } from 'vue'
import { api } from '@/boot/axios'
import Utils from '@/helpers/Utils'

export default function useAuth() {
  const state = reactive({
    loading: false,
    saving: false,
    deleting: false,
    items: []
  })

  const columns = [
    {
      name: 'sl',
      label: '#',
      required: true,
      field: (row) => row,
      align: 'left',
      sortable: false
    },
    {
      name: 'name',
      label: 'NAME',
      required: true,
      field: (row) => row.name,
      align: 'center',
      sortable: true
    },
    {
      name: 'locale',
      label: 'Locale',
      required: true,
      field: (row) => row.locale,
      align: 'center',
      sortable: true
    },

    {
      name: 'code',
      label: 'Locale Web',
      required: true,
      field: (row) => row.code,
      align: 'center',
      sortable: true
    },
    {
      name: 'actions',
      label: 'ACTIONS',
      required: true,
      field: (row) => row,
      align: 'center'
    }
  ]

  const setAuthToken = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const removeAuthToken = () => {
    delete api.defaults.headers.common['Authorization']
  }

  const login = (credentials) => {
    return api.post('/auth/login', credentials).then((response) => {
      const token = response.data.token
      setAuthToken(token)
      // Also, you might want to save token in local storage or somewhere else
      localStorage.setItem('template-admin-token', token)
      return response.data
    })
  }

  const logout = () => {
    // Remove the token from local storage (or wherever you saved it)
    localStorage.removeItem('template-admin-token')
    // Remove the Authorization header from Axios
    removeAuthToken()
  }

  const add = async (data) => {
    try {
      state.saving = true
      await api.post('/languages', data)
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err)
    } finally {
      state.saving = false
    }
  }

  const update = async (id, data) => {
    try {
      state.saving = true
      await api.patch(`/languages/${id}`, data)
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err)
    } finally {
      state.saving = false
    }
  }

  const trash = async (id) => {
    try {
      state.deleting = true
      await api.delete(`/languages/${id}`)
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err)
    } finally {
      state.deleting = false
    }
  }

  const get = async (id) => {
    try {
      const response = await api.get(`/languages/${id}`)
      return response
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err)
    }
  }

  const paginate = async (props) => {
    state.loading = true
    let params =
      props.filter !== undefined
        ? Object.assign(props.pagination, { ...props.filter })
        : props.pagination
    let parameter = Object.entries(params)
      .map(([k, v]) => `${k}=${v}&`)
      .join('')
    try {
      const response = await api.get(`/languages/paginate?${parameter.slice(0, -1)}`)
      state.items = response.data.data
      state.loading = false
      return response
    } catch (err) {
      state.loading = false
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err)
    }
  }

  const all = async () => {
    try {
      const response = await api.get('/languages')
      return response
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err)
    }
  }

  return {
    ...toRefs(state),
    columns,
    add,
    update,
    trash,
    get,
    paginate,
    all,
    login,
    logout
  }
}
