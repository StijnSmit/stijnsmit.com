    // var x = document.getElementById('home');
    // if (x.style.display === 'none') {
    //     x.style.display = 'block';
    // } else {
    //     x.style.display = 'none';
    // }
$('#homeButton').click(function() {
    show('contentHome');
});
$('#aboutButton').click(function() {
    show("contentAbout");
});
$('#blogButton').click(function() {
    show("contentBlog");
});
$('#projectsButton').click(function() {
    displayText("projects");
});
$('#contactButton').click(function() {
    displayText("contact");
});


function show(contentType) {
/*    document.getElementById('contentHome').style.display = 'none';
    document.getElementById('contentAbout').style.display = 'none';
    document.getElementById('contentBlog').style.display = 'none'; */
    switch(contentType) {
        case 'contentHome':
	    console.log("ContentHome");
	    document.getElementById('contentAbout').style.display = 'none';
	    document.getElementById('contentBlog').style.display = 'none';
	    document.getElementById('contentHome').style.display = 'display';
	    console.log(document.getElementById('contentHome').style.display);
            break;
        case 'contentAbout':
	    console.log("ContentAbout");
	    document.getElementById('contentBlog').style.display = 'none';
	    document.getElementById('contentHome').style.display = 'none';
	    document.getElementById('contentAbout').style.display = 'display';
            break;
        case 'contentBlog':
	    console.log("ContentBlog");
	    document.getElementById('contentBlog').style.display = 'display';
            break;
        case 'contentProjects':
	    console.log("ContentProjects");
	    document.getElementById('contentProjects').style.display = 'display';
            break;
        case 'contentContact':
	    console.log("ContentContact");
	    document.getElementById('contentContact').style.display = 'display';
            break;
        default:break;
    }
    console.log(document.getElementById('contentHome').style.display);
}

function displayText(contentType) {
    var htmlString = ""
    switch(contentType) {
        case "home":
            break;
        case "about":
            htmlString = "ABOUTABOUTABOUTABOUTABOUTABOUT"
            break;
        case "blog":
            htmlString = "BLOGBLOGBLOGBLOGBLOGBLOGBLOGBLOG"
            break;
        case "projects":
            htmlString = "PROJECTSPROJECTSPROJECTSPROJECTSPROJECTS"
            break;
        case "contact":
            htmlString = "CONTACTCONTACTCONTACTCONTACTCONTACTCONTACT"
            break;
        default:break;
    }
    document.getElementById("content").innerHTML = htmlString;
}
