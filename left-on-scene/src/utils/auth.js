// used to decode a token and get user information
import decode from "jwt-decode";

class AuthService {
  // retrieve user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user is logged in
  loggedIn() {
    // checks for saved token and if its still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // checks if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // retrieves user from local storage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
