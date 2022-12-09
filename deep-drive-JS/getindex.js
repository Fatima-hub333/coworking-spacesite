import getUser from "./utils/getUser.js";

class App {
  constructor() {
    this.render();
  }

  render() {
    const user = getUser();
    document.getElementById('root').innerHTML = `
      <div>${user.name} works for ${user.company}</div>
    `
  }
}

new App();