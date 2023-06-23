// Get the current date
var currentDate = new Date();

// Set the current date as the selected date
var selectedDate = new Date();

// Update the displayed month and year
function updateMonthYear() {
  var monthYear = document.querySelector('.current-date');
  monthYear.textContent = selectedDate.toLocaleString('default', { month: 'long' }) + ' ' + selectedDate.getFullYear();
}

// Generate the calendar
function generateCalendar() {
  var daysList = document.querySelector('.days');
  daysList.innerHTML = '';

  // Get the first day and last day of the month
  var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  var lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

  // Get the number of days in the month
  var numDays = lastDay.getDate();

  // Calculate the number of days to display from the previous month
  var prevMonthDays = firstDay.getDay();

  // Generate the calendar days
  var date = 1;
  for (var i = 0; i < 42; i++) {
    var dayItem = document.createElement('li');
    dayItem.textContent = date;
    dayItem.addEventListener('click', selectDate);

    if (i < prevMonthDays || date > numDays) {
      dayItem.classList.add('inactive');
    } else if (date === selectedDate.getDate() && selectedDate.getMonth() === selectedDate.getMonth() && selectedDate.getFullYear() === selectedDate.getFullYear()) {
      dayItem.classList.add('active');
    }

    daysList.appendChild(dayItem);

    if (date < numDays) {
      date++;
    } else {
      break;
    }
  }
}

// Select a date
// Select a date
function selectDate() {
    var selectedDay = parseInt(this.textContent);
    selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDay);
    updateSelectedDate();
    generateCalendar();
  
    // Close the Bootstrap modal
    var modal = document.getElementById('exampleModal');
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  }
  

// Update the selected date display
function updateSelectedDate() {
  var selectedDateDisplay = document.getElementById('selected-date-display');
  selectedDateDisplay.textContent = selectedDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
}
// Event listener for the previous month button
document.getElementById('prev').addEventListener('click', function() {
  selectedDate.setMonth(selectedDate.getMonth() - 1);
  updateMonthYear();
  generateCalendar();
});

// Event listener for the next month button
document.getElementById('next').addEventListener('click', function() {
  selectedDate.setMonth(selectedDate.getMonth() + 1);
  updateMonthYear();
  generateCalendar();
});

// Initial setup
updateMonthYear();
generateCalendar();
