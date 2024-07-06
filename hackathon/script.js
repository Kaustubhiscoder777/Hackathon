let attendanceSet = new Set();

function markAttendance() {
    let nameInput = document.getElementById('nameInput').value.trim();
    let classInput = document.getElementById('classInput').value.trim();
    let sectionInput = document.getElementById('sectionInput').value.trim();
    
    if (nameInput === '' || classInput === '' || sectionInput === '') {
        alert('Please enter all fields.');
        return;
    }
    
    // Convert name to lowercase to make it case insensitive
    nameInput = nameInput.toLowerCase();
    
    if (attendanceSet.has(nameInput)) {
        alert('This person has already been marked present.');
    } else {
        attendanceSet.add(nameInput);
        updateAttendanceList();
        updateStatus();
    }
    
    // Clear input fields after marking attendance
    document.getElementById('nameInput').value = '';
    document.getElementById('classInput').value = '';
    document.getElementById('sectionInput').value = '';
}

function updateAttendanceList() {
    let attendanceList = document.getElementById('attendanceItems');
    attendanceList.innerHTML = '';
    
    attendanceSet.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name;
        attendanceList.appendChild(li);
    });
}

function updateStatus() {
    let dateTimeDiv = document.getElementById('dateTime');
    let attendanceStatusDiv = document.getElementById('attendanceStatus');
    
    let now = new Date();
    let date = now.toDateString();
    let time = now.toLocaleTimeString();
    
    dateTimeDiv.textContent = `${date} ${time}`;
    attendanceStatusDiv.textContent = `Present: ${attendanceSet.size}, Absent: 0`; // You can modify this based on your logic
}
