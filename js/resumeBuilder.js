var bio = {
    "name": "Sooraj Prabhu",
    "role": "Front End Web Developer",
    "welcomeMessage": "Si Hoc Legere Scis Nimium Eruditionis Habes! ",
    "contacts": {
        "mobile": "8197807470",
        "email": "soorumunna@gmail.com",
        "github": "prabhu_sooraj",
        "location": "Mangalore"
    },
    "skills": ["Smartness", "Hardworking", "Logical", "Good Leader"],
    "biopic": "images/new.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "VCET",
        "location": "Puttur",
        "degree": "BE",
        "dates": "2012-2016",
        "majors": ["E&C"],
        "url": "http://www.vcetputtur.ac.in"
    }, {
        "name": "VPUC",
        "location": "Puttur",
        "degree": "Pre University",
        "dates": "2010-2012",
        "majors": ["PCMB"],
        "url": "http://vcpuc.vivekanandaedu.org/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
        }
    }
    for (var course = 0; course < education.onlineCourses.length; course++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
    }
};
education.display();

var work = {
    "jobs": [{
        "employer": "KFC",
        "title": "cashier",
        "dates": "2006-present",
        "location": "Bantwal",
        "description": "So dive into this admittedly overwhelming list and pick the questions that most inspire you to tell an interesting story, describe a memorable event, observe the details in your world, imagine a possibility, or reflect on who you are and what you believe."
    }, {
        "employer": "McDonalds",
        "title": "cashier",
        "dates": "2003-2006",
        "location": "Kalladka",
        "description": "So dive into this admittedly overwhelming list and pick the questions that most inspire you to tell an interesting story, describe a memorable event, observe the details in your world, imagine a possibility, or reflect on who you are and what you believe."
    }]
};
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedWorkDates + formattedWorkDescription + formattedWorkLocation);
        }
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Sample Project1",
        "dates": "2014",
        "description": "For this quiz you'll work with the index.htmland js/resumeBuilder.js files from the résumé project's Github repository you downloaded earlier in this lesson. Edit js/resumeBuilder.js in your text editor, and view the results by opening index.html in the browser of your choice. Note that the HTML needed is stored in js/helper.js variables. ",
        "images": ["images/train.jpg", "images/train1.jpg"]
    }]
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project = 0; project < projects.projects.length; project++) {
        if (projects.projects.length > 0) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

            for (var j = 0; j < projects.projects[project].images.length; j++) {
                if (projects.projects[project].images.length > 0) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);