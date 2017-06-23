/* SportChat Objects in Firebase
			
// JSON Format with the 1st object = user, 2nd object = thread, 3rd object = post
			
			{
    "users": {
        "user001": {
            "age": 35,
            "avatar": "profile.jpg",
            "email": "useremail@gmail.com",
            "gender": "Female",
            "name": "username",
            "password": "123",
            "threads": "Do you watch all your team's games?"
        }
    },
    "threads": {
        "thread001": {
            "forum": "track",
            "title": "Thread Title",
            "posts": 0,
            "username": "username"
        }
    },
    "posts": {
        "post001": {
            "avatar": "profile.jpg",
            "thread": "Thread Title",
            "message": "Actual message goes here",
            "username": "username"
        }
    }
}

			*/
			
function thread(forum, title, replies, userName, expand) 
{
	this.forum = forum;
	this.title = title;
	this.replies = replies;
	this.userName = userName;
	this.expand= expand;	
	}
	
var thread1 = new thread ("soccer","Do you watch all your team's games?",1,"xX_Lisa_Xx",function (){document.getElementById('thread1').innerHTML = '<div class="content-block-title">THREAD:</div><div class="card demo-card-header-pic"><div valign="bottom" class="card-header no-border"><h4>'+(this.title+'</h4></div><div class="card-content"><div class="card-content-inner"><p class="color-gray">Posted by: <a class="inner-thread-link" href="userfemale.html">'+this.userName+'</a><p>REPLIES ('+ this.replies +')</p></div></div><div class="card-footer"><button class="button button-fill color-white" onClick="reply1.expand()">VIEW</button><button class="button button-fill color-white">Reply</button></center><br></a></div></div><br>');});

var thread2 = new thread ("soccer","Best moments of the season",1,"TeamJordan",function (){document.getElementById('thread2').innerHTML = '<div class="content-block-title">THREAD:</div><div class="card demo-card-header-pic"><div valign="bottom" class="card-header no-border"><h4>'+(this.title+'</h4></div><div class="card-content"><div class="card-content-inner"><p class="color-gray">Posted by: <a class="inner-thread-link" href="usermale.html">'+this.userName+'</a><p>REPLIES ('+ this.replies +')</p></div></div><div class="card-footer"><button class="button button-fill color-white" onClick="reply2.expand()">VIEW</button><button class="button button-fill color-white">Reply</button></center><br></a></div></div><br>');});

function reply(thread, avatar, userName, message, expand) 
{
	this.thread = thread;
	this.avatar = avatar;
	this.userName = userName;
	this.message = message;
	this.expand = expand;	
	}

var reply1 = new reply("Do you watch all your team's games?","<img class='icon' src='images/avatar-154375_640.png'>", "TeamJordan", "I wish I could, but thank God I have on Demand!" ,function (){document.getElementById('reply1').innerHTML = '<div class="content-block-title">REPLIES:</div><div class="card facebook-card"><div class="card-header"><div class="facebook-avatar">'+ (this.avatar +'&nbsp;<a  class="inner-thread-link" href="usermale.html">'+ this.userName +'</a></div></div><div class="card-content"><div class="card-content-inner"><p>'+ this.message +'</p></div></div>');});

var reply2 = new reply("Best moments of this season","<img class='icon' src='images/woman-159169_640.png'>", "xX_Lisa_Xx", "Wow, the Final game was a nail-biter!" ,function (){document.getElementById('reply2').innerHTML = '<div class="content-block-title">REPLIES:</div><div class="card facebook-card"><div class="card-header color-white"><div class="facebook-avatar">'+ (this.avatar +'&nbsp;<a  class="inner-thread-link" href="userfemale.html">'+ this.userName +'</a></div></div><div class="card-content"><div class="card-content-inner"><p>'+ this.message +'</p></div></div>');});



