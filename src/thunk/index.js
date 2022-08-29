/*
fetchUser = (usersUrl) => (dispatch) => {
  dispatch({ type: "DISPLAY_LOADING_SCREEN" })
  return fetch(usersUrl)
    .then(response => response.json())
    .then((json) => {
      if (json.success) {
        dispatch({ type: "LOAD_USER_DATA", json.userData })
      } else {
        dispatch({ type: "LOAD_USER_FAILED" })
      }
    })
}
*/
