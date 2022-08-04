import axios from "axios";

export function getDonationsResponse() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "/campaign.json"
      )
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
          reject(err)
      });
  });
}
