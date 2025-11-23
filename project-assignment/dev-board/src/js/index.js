const date = new Date();

// Short day names
const daysOfWeekShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Format today’s date
const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
})
  .format(date)
  .replace(",", "");

// Update the DOM
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");

dayEl.innerText = `${daysOfWeekShort[date.getDay()]},`;
dateEl.innerText = formattedDate;

//Data array
const tasksList = [
  {
    id: "001",
    companyName: "ShopEase",
    taskTitle: "Fix Mobile Button Issue",
    taskDes: "Debug using Chrome DevTools, checks for overlapping",
    deadlineDate: "21 November 2025",
  },
  {
    id: "002",
    companyName: "TechMart",
    taskTitle: "Update Product Images",
    taskDes: "Replace old images with new high-res versions",
    deadlineDate: "25 November 2025",
  },
  {
    id: "003",
    companyName: "Foodies",
    taskTitle: "Improve Checkout Flow",
    taskDes: "Check for errors in payment gateway integration",
    deadlineDate: "23 November 2025",
  },
  {
    id: "004",
    companyName: "TravelNow",
    taskTitle: "Fix Map Display Bug",
    taskDes: "Google Maps not loading on Safari browser",
    deadlineDate: "28 November 2025",
  },
  {
    id: "005",
    companyName: "EduLearn",
    taskTitle: "Add New Courses",
    taskDes: "Upload course content and update syllabus",
    deadlineDate: "30 November 2025",
  },
  {
    id: "006",
    companyName: "FitLife",
    taskTitle: "Optimize App Performance",
    taskDes: "Reduce app load time and memory usage",
    deadlineDate: "26 November 2025",
  },
  {
    id: "007",
    companyName: "ShopEase",
    taskTitle: "Fix Search Bar Issue",
    taskDes: "Autocomplete not working properly",
    deadlineDate: "24 November 2025",
  },
  {
    id: "008",
    companyName: "MediaHub",
    taskTitle: "Update Video Player",
    taskDes: "Add captions and fix buffering issue",
    deadlineDate: "27 November 2025",
  },
  {
    id: "009",
    companyName: "GreenHome",
    taskTitle: "Redesign Landing Page",
    taskDes: "Make it mobile responsive and visually appealing",
    deadlineDate: "29 November 2025",
  },
  {
    id: "010",
    companyName: "AutoDrive",
    taskTitle: "Integrate GPS Tracker",
    taskDes: "Test location accuracy and live tracking",
    deadlineDate: "22 November 2025",
  },
];

//task controller function

function taskController(dataSet) {
  const dueTask = document.getElementById("task-counter");
  const submittedTask = document.getElementById("counter");
  let numberOfDueTask = dataSet.length;
  let numberOfSubmitTask = 0;

  //display function
  function updateUI() {
    dueTask.innerText = numberOfDueTask;
    submittedTask.innerText = numberOfSubmitTask;
  }
  updateUI();

  return {
    updateCounter: function () {
      if (numberOfDueTask > 0) {
        numberOfDueTask -= 1;
        numberOfSubmitTask += 1;
        updateUI();
      }

      // return { numberOfDueTask, numberOfSubmitTask };
    },
  };
}

let taskControllerObj = taskController(tasksList);

// console.log(taskControllerObj.updateCounter);

//update the DOM
const cardsItems = document.getElementById("card-container");

const infoArray = [];
tasksList.forEach((task) => {
  let { id, companyName, taskTitle, taskDes, deadlineDate } = task;
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <div class="company-name">${companyName}</div>
      <div class="task-title">${taskTitle}</div>
      <div class="task-des-box">
        <div class="task-des">${taskDes}</div>
      </div>
      <div class="task-footer">
        <div class="deadline-info">
          <p class="deadline">Deadline</p>
          <p class="deadline-date">${deadlineDate}</p>
        </div>
        <button class="btn">Complete</button>
      </div>
  `;
  cardsItems.appendChild(card);

  const btnElement = card.querySelector(".btn");
  btnElement.addEventListener("click", () => {
    taskControllerObj.updateCounter();
    btnElement.disabled = true;
    btnElement.innerText = "Task Submitted";
    card.style.opacity = 0.6;
    const date = new Date();
    const time =
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0") +
      ":" +
      date.getSeconds().toString().padStart(2, "0");
    infoArray.push({ id: id, taskTitle: taskTitle, time: time });
    historyHandler();
  });
});
const ulElement = document.querySelector(".history-list");
function historyHandler() {
  ulElement.innerHTML = "";
  infoArray.forEach((info) => {
    const liElement = document.createElement("li");
    liElement.innerText = `You have completed the task "${info.taskTitle}" at ${info.time}`;
    ulElement.appendChild(liElement);
  });
}

//clear history
const btnElem = document.getElementById("historyBtn");
btnElem.addEventListener("click", () => {
  infoArray.length = 0;
  ulElement.innerHTML = "";
});
