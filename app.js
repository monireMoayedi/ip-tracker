const ip = new IP();
const ui = new UI();
function findIp() {
  let i = document.getElementById("searchIp").value;

  try {
    ip.findIp(i)
      .then((res) => {
        ui.show(res);
      })
      .catch((err) => console.log(err));
  } catch (e) {
    console.log(e);
  }
}

document.addEventListener("DOMContentLoaded", findIp);

document.getElementById("btn").addEventListener("click", findIp);
