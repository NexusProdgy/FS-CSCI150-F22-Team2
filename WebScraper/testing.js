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