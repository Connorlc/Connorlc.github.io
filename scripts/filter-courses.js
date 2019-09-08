function filterCourses() {
  var lang = getLanguage();
  var curric = getCurriculum();
  var courses = document.getElementsByClassName("course");
  
  resetCourses(courses);
  modifyDisplays(lang.toLowerCase(), curric.toLowerCase(), courses);
}

function getLanguage() {
  var langSelect = document.getElementById("lang");
  return langSelect.options[langSelect.selectedIndex].text;
}

function getCurriculum() {
  var currSelect = document.getElementById("type");
  return currSelect.options[currSelect.selectedIndex].text;
}

function resetCourses(courses) {
  for(var i = 0; i < courses.length; i++) {
    courses[i].style.display = "inline-block";
  }
}

function modifyDisplays(lang, curric, courses) {
  for(var i = 0; i < courses.length; i++) {
    if(lang == "all" && curric == "all") {
      return;
    } else if(lang == "all") {
      if(!courses[i].className.includes(curric)) {
        courses[i].style.display = "none";
      }
    } else if(curric == "all") {
      if(!courses[i].className.includes(lang)) {
        courses[i].style.display = "none";
      }
    } else if(!courses[i].className.includes(lang) 
              || !courses[i].className.includes(curric)) {
      courses[i].style.display = "none";
    }
  }
}