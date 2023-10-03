function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => data.data);
  }
  
  export default ambilDataUser; 

