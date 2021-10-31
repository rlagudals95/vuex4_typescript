export const config = {
  LocalbaseUrlTest: 'http://localhost:8000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset = utf-8'
  },

  token: localStorage.getItem("Authorization")

}
