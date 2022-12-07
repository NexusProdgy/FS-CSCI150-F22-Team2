const categoryList = [];
categoryList.push("League of Legends")
categoryList.push("VALORANT")
categoryList.push("Overwatch 2")
categoryList.push("Just Chatting")


console.log(categoryList[0]);
console.log(categoryList[1]);
console.log(categoryList[2]);
console.log(categoryList[3]);

var found = categoryList.includes("World of Warcraft");

var cat = "Just Chatting"
var cat3 = "Minecraft"
console.log(cat);
//var cat2 = cat.replace('/\s+g', '');
var cat2 = cat3.split(" ").join("")
console.log(cat2);

console.log(found);

if(cat == "Just Chatting"){
    console.log(true);
}else{
    console.log(false);
}


if(categoryList.includes("JustChatting")){
    console.log(categoryList.includes("JustChatting"));
}else{
    console.log(categoryList.includes("JustChatting"));
}

console.log("Hello", "World")