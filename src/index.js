async function fetchData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const dataResponse = await fetch(url);
  const dataResponse2 = await fetch(url2);
  const dataJSON = await dataResponse.json();
  const dataJSON2 = await dataResponse2.json();
  const municipalities = dataJSON.dataset.dimension.Alue.category.label;
  const population = dataJSON.dataset.value;
  const amount = dataJSON2.dataset.value;

  var tbody = document.getElementById("myTableBody");
  let i = 0;
  for (let element in municipalities) {
    let row = tbody.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    cell1.innerHTML = municipalities[element];
    cell2.innerHTML = population[i];
    cell3.innerHTML = amount[i];
    cell4.innerHTML = ((100 * amount[i]) / population[i]).toFixed(2);
    let employmentPercentage = parseFloat(cell4.innerHTML);
    if (employmentPercentage > 45) {
      row.style.backgroundColor = "#abffbd";
    } else if (employmentPercentage < 25) {
      row.style.backgroundColor = "#ff9e9e";
    }

    i++;
  }
}
fetchData();
