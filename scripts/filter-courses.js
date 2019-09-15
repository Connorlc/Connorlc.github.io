function filterCourses() {
  var lang = getLanguage();
  var type = getType();
  var courses = document.getElementsByClassName("course");
  
  showSelected(lang, type);
  resetCourses(courses);
  modifyDisplays(lang.toLowerCase(), type.toLowerCase(), courses);
}

function getLanguage() {
  var langSelect = document.getElementById("lang");
  return langSelect.options[langSelect.selectedIndex].text;
}

function getType() {
  var currSelect = document.getElementById("type");
  return currSelect.options[currSelect.selectedIndex].text;
}

function showSelected(lang, type) {
  document.getElementById("selected-lang").innerHTML = "Lang = " + lang;
  document.getElementById("selected-type").innerHTML = "Type = " + type;
}

function resetCourses(courses) {
  for(var i = 0; i < courses.length; i++) {
    courses[i].style.display = "inline-block";
  }
}

function modifyDisplays(lang, type, courses) {
  for(var i = 0; i < courses.length; i++) {
    if(lang == "all" && type == "all") {
      return;
    } else if(lang == "all") {
      if(!courses[i].className.includes(type)) {
        courses[i].style.display = "none";
      }
    } else if(type == "all") {
      if(!courses[i].className.includes(lang)) {
        courses[i].style.display = "none";
      }
    } else if(!courses[i].className.includes(lang) 
              || !courses[i].className.includes(type)) {
      courses[i].style.display = "none";
    }
  }
}