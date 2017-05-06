var data = [];
var strData = "1.jpg<br /><br /> \
Speed Racer<br /><br />\
Here he comes Here comes Speed Racer. He's a demon on wheels. Wouldn't you like to get away? Sometimes you want to go where everybody knows \
<br /><br /><br />\
2.jpg<br /><br /> \
Happy Days<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and eveybody everybody else's mortality. \
<br /><br /><br />\
3.jpg<br /><br /> \
Serenity Beach<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and. \
<br /><br /><br />\
4.jpg<br /><br /> \
Heaven of time<br /><br /> \
What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea. \
<br /><br /><br />\
5.jpg<br /><br /> \
Happy Days<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and eveybody everybody else's mortality. \
<br /><br /><br />\
6.jpg<br /><br /> \
Serenity Beach<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and. \
<br /><br /><br />\
7.jpg<br /><br /> \
Heaven of time<br /><br /> \
What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea. \
<br /><br /><br />\
8.jpg<br /><br /> \
Happy Days<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and eveybody everybody else's mortality. \
<br /><br /><br />\
9.jpg<br /><br /> \
Serenity Beach<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and. \
<br /><br /><br />\
10.jpg<br /><br /> \
Heaven of time<br /><br /> \
What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea. \
<br /><br /><br />\
11.jpg<br /><br /> \
Happy Days<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and eveybody everybody else's mortality. \
<br /><br /><br />\
12.jpg<br /><br /> \
Serenity Beach<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and. \
<br /><br /><br />\
13.jpg<br /><br /> \
Heaven of time<br /><br /> \
What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea. \
<br /><br /><br />\
14.jpg<br /><br /> \
Happy Days<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and eveybody everybody else's mortality. \
<br /><br /><br />\
15.jpg<br /><br /> \
Serenity Beach<br /><br /> \
I have never been to a place so serene in my entire life before. Swimming in clear waters opened my mind to nature and reminded me of my and. \
<br /><br /><br />\
16.jpg<br /><br /> \
Forever this<br /><br /> \
Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Baby if you've ever wondered - wondered whatever became of me.  \
\
";
// console.log(strData.split('<br /><br /><br />'));

strData.split('<br /><br /><br />').forEach(function (e) {
	var ary = e.split('<br /><br />');
	// console.log(ary);
	data.push({
		img:ary[0],
		title:ary[1],
		desc:ary[2]
	});
})
// console.log(data)



