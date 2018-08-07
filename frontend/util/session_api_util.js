export const signup = (user) => dispatch => (
  $.ajax({
    method: "POST",
    url: "api/users/",
    data: { user }
  })
);

export const login = (user) => dispatch => (
  $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  })
);

export const logout = (user) => dispatch => (
  $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  })
);