function toggleChampionshipDropdown() {
    const championshipDropdown = document.getElementById('championshipDropdown');
    championshipDropdown.classList.toggle('hidden');
  }
  
  function addPlayer() {
    // Get the player name from the input
    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value;
  
    // Create a new table for the player
    const playerTable = document.createElement('table');
    playerTable.innerHTML = `
      <caption>${playerName}</caption>
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Goals</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Assists</td>
          <td>0</td>
        </tr>
        <!-- Add more rows as needed -->
      </tbody>
    `;
  
    // Find an empty slot among player tables and append the new table
    for (let i = 1; i <= 3; i++) {
      const tableId = `playerTable${i}`;
      const tableContainer = document.getElementById(tableId);
      if (tableContainer.children.length === 0) {
        tableContainer.appendChild(playerTable);
        break;
      }
    }
  
    // Clear the input field
    playerNameInput.value = '';
  }
      