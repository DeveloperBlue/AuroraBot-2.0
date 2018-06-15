var footer_quotes = [
	'“If you don\'t know where you want to go, then it doesn\'t matter which path you take.”',
	'“Who in the world am I? Ah, that\'s the great puzzle.”',
	'“Begin at the beginning," the King said, very gravely, "and go on till you come to the end: then stop.”',
	'“I\'m afraid I can\'t explain myself, sir. Because I am not myself, you see?”',
	'“My dear, here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that.”',
	'There are no mistakes, only lessons.',
	'"When you do things right, people won\'t be sure you\'ve done anything at all."'
]

$(document).ready(function(){
	
	console.log("Loading AuroraBot's Splash Page");

	function goToCommands(){
		console.log("Commands Page");
	}

	function goToDashboard(){
		console.log("Dashboard Page");
	}
    
    function scrollToAbout(){
        $("html, body").animate({
            scrollTop: $("#about-aurorabot").offset().top
        }, 1000);
    }

	function goToPatreon(){
		window.open("https://www.patreon.com/user?u=4153727", "_blank");
	}

	function inviteAuroraBot(){
		$("#invite-modal").modal("show");
	}

	function goToAuroraHub(){
		// Launch Server Invite
		window.open("https://discord.gg/YNbm2FY", "_blank");
	}

	$("#modal-invite-button").click(function(){
		// Invite AuroraBot 
		window.open("https://discordapp.com/oauth2/authorize?&client_id=265445003176837120&scope=bot&permissions=8", "_blank");
		$("#invite-modal").modal("hide");
	});
	
	$("#topbar-commands").click(goToCommands);
	
	$("#topbar-dashboard").click(goToDashboard);
	
	$("#topbar-invite-sub").click(inviteAuroraBot);
	
	$("#topbar-server").click(goToAuroraHub);
	
	$("#topbar-projects").click(function(){
		
	});
	
	$("#topbar-robotics").click(function(){
		
	});
	
	$("#topbar-donation").click(goToPatreon);
	
	$("#topbar-invite").click(inviteAuroraBot);
	
	$("#topbar-sign-in").click(function(){
		
	});
	
	$("#main-invite").click(inviteAuroraBot);
	
	$("#main-server").click(goToAuroraHub);
	
	$("#main-dashboard").click(goToDashboard);
	
	$("#sub-commands").click(goToCommands);
	
	$("#sub-donate").click(goToPatreon);
    
    $("#topbar-about").click(scrollToAbout);
    $("#sub-scroll-about-button").click(scrollToAbout);

	var curYear = new Date().getFullYear();
	$("#copyright-p").text("AuroraBot Copyright DeveloperBlue © 2018-" + curYear);

	$("#flow-text").text("Changing text on a cycle, with icons");
	
	$("#footer-p").text(footer_quotes[Math.floor(Math.random()*footer_quotes.length)])
	
});