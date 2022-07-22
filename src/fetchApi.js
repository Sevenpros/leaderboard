export default class Fetch {
  constructor(data = {}) {
    this.data = data;
  }

  async addData() {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:wbCdNq20zWq7s2vzZVOg/scores', {
      method: 'POST',
      body: JSON.stringify(this.data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  }
}