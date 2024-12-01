import Axios from 'axios'

const url = 'http://localhost:9000/'

export default function useApi () {
  const postQuery = async (route, data) => {
    return await Axios.post(url + route, data)
  }
  const checkMe = async (token) => {
    const result = await Axios.post(url + 'users/me', token)
    if (result.data.success) {
      return result.data.data.login
    } else {
      return false
    }
  }
  return {
    postQuery,
    checkMe
  }
}
