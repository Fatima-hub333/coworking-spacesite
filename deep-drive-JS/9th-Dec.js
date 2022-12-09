//Modules - allow us to share code between files
import getDateNow from './utils/date.js';


const year = 2019;
class App {
  constructor() {
    this.render()
  }

  render() {
    document.getElementById('root').innerHTML = `
      <div>Date:${getDateNow()} Year: ${currentYear}</div>
    `
  }
}

new App();