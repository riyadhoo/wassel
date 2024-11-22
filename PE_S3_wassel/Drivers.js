// Dummy data representing drivers (replace this with actual data from your server)
const driversData = [
    { image: '5cd34db82300005700b72bb6.jpg', name: 'Ahmed salim', status: 'Active',vehicule:'Scooter' ,totalHours: 50, totalOrders: 30, totalRevenue: '20000' },
    { image: 'bald-man-smiling-at-camera-standing-with-arms-crossed.jpg', name: 'Mohamed Aymen', status: 'Inactive',vehicule:'Car', totalHours: 35, totalOrders: 25, totalRevenue: '16000' },
  
  ];
  
  // Function to populate the table with driver information
  function populateDriversTable() {
    const tableBody = document.getElementById('drivers-table-body');
  
    driversData.forEach(driver => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${driver.image}"  style="width: 50px; height: 50px;border-radius: 15px;"></td>
        <td>${driver.name}</td>
        <td>${driver.status}</td>
        <td>${driver.vehicule}</td>
        <td>${driver.totalHours} H</td>
        <td>${driver.totalOrders} </td>
        <td>${driver.totalRevenue} DZD</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to populate the table when the page loads
  document.addEventListener('DOMContentLoaded', populateDriversTable);
  let showDashboard = document.getElementById("sign-in");

function showDashboard(){
    popup.classList.add("Driver dashboard.html");
}
function hideDashboard(){
    popup.classList.remove("Driver dashboard.html");
}