var container = document.getElementById('container');
// var profileList = ["https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" , "https://wl-brightside.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg",]
// for (var i = 0; i <profileList.length; i++) {
//     var profileCard = document.createElement('div');
//     container.appendChild(profileCard);
//     profileCard.setAttribute("id" ,"profileCard")
    
//     var profileImage = document.createElement("div")
//     profileCard.appendChild(profileImage)
//     profileImage.setAttribute("id" , "profileImage")
    
//     var image = document.createElement("img")
//     profileImage.appendChild(image)
//      image.setAttribute("src" , profileList.length[i])
    
//     var profileDetails = document.createElement("div")
//     profileCard.appendChild(profileDetails)
//     profileDetails.setAttribute("id" , "profileDetails")
    
//     var heading = document.createElement("h1")
//     profileDetails.appendChild(heading)
//     heading.setAttribute("id" , "profileName")
//     heading.innerHTML = "John Doe"
    
//     var paragraph = document.createElement("p")
//     profileName.appendChild(paragraph)
//     paragraph.innerHTML="This is a paragraph"
//     paragraph.setAttribute("id" , "paragraph")
    
// }

var profileCard = document.createElement('div');
container.appendChild(profileCard);
profileCard.setAttribute("id" ,"profileCard")

var profileImage = document.createElement("div")
profileCard.appendChild(profileImage)
profileImage.setAttribute("id" , "profileImage")

var image = document.createElement("img")
profileImage.appendChild(image)
 image.setAttribute("src" , " https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg")

var profileDetails = document.createElement("div")
profileCard.appendChild(profileDetails)
profileDetails.setAttribute("id" , "profileDetails")

var heading = document.createElement("h1")
profileDetails.appendChild(heading)
heading.setAttribute("id" , "profileName")
heading.innerHTML = "John Doe"

var paragraph = document.createElement("p")
profileName.appendChild(paragraph)
paragraph.innerHTML="This is a paragraph"
paragraph.setAttribute("id" , "paragraph")