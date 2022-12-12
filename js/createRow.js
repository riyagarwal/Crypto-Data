const createRow = (data) => {
  let row = document.createElement("tr");
  document.getElementById("table").appendChild(row);
  let imageCell = document.createElement("td");
  row.appendChild(imageCell);
  let image = document.createElement("img");
  image.src = data[0];
  imageCell.appendChild(image);

  for (let i = 1; i < data.length; i++) {
    let dataItem = document.createElement("td");
    if (i === 2) {
      dataItem.style.textTransform = "Uppercase";
    } else if (i === 3 || i === 4) {
      dataItem.innerText = `$${data[i]}`;
    } else if (i === 5) {
      dataItem.innerText = `Mkt Cap : $${data[i]}`;
    } else {
      dataItem.innerText = data[i];
    }
    row.appendChild(dataItem);
    console.log(dataItem);
  }
};
