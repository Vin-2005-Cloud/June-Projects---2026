// const ctx = document.getElementById('myBentoChart').getContext('2d');

// new Chart(ctx, {
//     type: 'bar', // You can change this to 'bar', 'doughnut', or 'radar'
//     data: {
//         labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // X-Axis Labels
//         datasets: [{
//             label: 'Weekly Activity',
//             data: [12, 19, 3, 5, 9, 3, 10],// The actual numeric data points
//             backgroundColor: '#4b69a9',
//             borderColor: '#4f46e5', // A modern indigo line color
//             tension: 0.4, // Makes the line smooth and curvy instead of jagged
//             fill: false
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false // Allows the chart to scale and fill your bento box perfectly
//     }
// });

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const ctx = document.getElementById("myBentoChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Activity",
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: "#6382ae",
        borderColor: "#4f46e5",
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: "bottom",
        barPercentage: 0.6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748b",
          font: { family: "sans-serif", size: 12 },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.04)",
        },
        ticks: {
          color: "#64748b",
          font: { family: "sans-serif", size: 12 },
        },
      },
    },
  },
});

menuToggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("mobile-open");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (
    !sidebar.contains(e.target) &&
    sidebar.classList.contains("mobile-open")
  ) {
    sidebar.classList.remove("mobile-open");
  }
});
