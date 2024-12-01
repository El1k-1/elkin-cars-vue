import Axios from 'axios'

const url = 'http://localhost:9000/'

export default function useApi () {
  const postQuery = async (route, data) => {
    return await Axios.post(url + route, data)
  }
  const checkMe = async (token) => {
    // const result = await Axios.post(url + 'users/me', token)
    // if (result.success) {
    //   return result.data
    // } else {
    //   return false
    // }
    return true
  }
  return {
    postQuery,
    checkMe
  }
}
