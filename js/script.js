// Room data
const rooms = [
    { name: 'Room 1', rate: 1800, capacity: '2-4 persons', duration: '24 hours' },
    { name: 'Room 2', rate: 1800, capacity: '3 persons', duration: '24 hours' },
    { name: 'Room 3', rate: 2500, capacity: '6 persons', duration: '24 hours' },
    { name: 'Family Room', rate: 3500, capacity: '8-10 persons', duration: '24 hours' }
  ];
  
  // Function to display available rooms
  function displayAvailableRooms() {
    const availableRoomsHTML = rooms.map(room => `
      <div class="room">
        <h2>${room.name}</h2>
        <p><strong>Rate:</strong> ₱${room.rate} per ${room.duration}</p>
        <p><strong>Capacity:</strong> ${room.capacity}</p>
      </div>
    `).join('');
  
    document.getElementById('available-rooms').innerHTML = availableRoomsHTML;
  }
  
  // Call the function to display available rooms
  displayAvailableRooms();
  