let user_data = {
    student_details: {
        "registration": [{

            "studentNumber": 0,
            "firstName": "",
            "lastName": "",
            "startDate": new Date(),
            "email": "",
            "password": "",
            "userLoggedIn": false
        }],
        "accomodations": {
            "accomodation_items": [
                {
                    "id": "room_1",
                    "image": ["images/room_one.jpg", "images/room_two.jpg", "images/room_three.jpg"],
                    "location": "Crystal Goode",
                    "type": "Room",
                    "priceRange": 700,
                    "petsAllowed": true,
                    "disabledAccess": true,
                    "parkingAvailable": false,
                    "description": "Lovely home with floral decal. Feel the spring.",
                    "favourite": false
                },
                {
                    "id": "room_2",
                    "image": ["images/room_two.jpg", "images/room_one.jpg", "images/room_three.jpg"],
                    "location": "St. Heidi",
                    "type": "House",
                    "priceRange": 800,
                    "petsAllowed": false,
                    "disabledAccess": false,
                    "parkingAvailable": true,
                    "description": "Einstein used to live here they said. George Einstein, my brother-in-law that is.",
                    "favourite": false
                },
                {
                    "id": "room_3",
                    "image": ["images/room_three.jpg", "images/room_two.jpg", "images/room_one.jpg"],
                    "location": "Jade Hall",
                    "type": "Flat",
                    "priceRange": 2000,
                    "petsAllowed": true,
                    "disabledAccess": true,
                    "parkingAvailable": true,
                    "description": "Feel at home in this modern place.",
                    "favourite": false
                },
                {
                    "id": "room_4",
                    "image": ["images/room_four.jpg", "images/room_two.jpg", "images/room_one.jpg"],
                    "location": "Jackie Cox Campus",
                    "type": "Studio",
                    "priceRange": 500,
                    "petsAllowed": true,
                    "disabledAccess": true,
                    "parkingAvailable": false,
                    "description": "Studio designd to look like the 70's.",
                    "favourite": false
                },
                {
                    "id": "room_5",
                    "image": ["images/room_five.jpg", "images/room_two.jpg", "images/room_one.jpg"],
                    "location": "Sakura Street",
                    "type": "Shared",
                    "priceRange": 1000,
                    "petsAllowed": false,
                    "disabledAccess": false,
                    "parkingAvailable": false,
                    "description": "Modern, simplistic, stylish.",
                    "favourite": false
                },
                {
                    "id": "room_6",
                    "image": ["images/room_six.jpg", "images/room_two.jpg", "images/room_one.jpg"],
                    "location": "Crystal Goode",
                    "type": "House",
                    "priceRange": 2000,
                    "petsAllowed": true,
                    "disabledAccess": true,
                    "parkingAvailable": true,
                    "description": "Beautiful room. What else is there to say.",
                    "favourite": false
                }
            ]
        }
    }
}


function refreshPage() {
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
}

function saveInStorage() {
    // localStorage.clear();
    if (typeof (Storage) != "underfined") {

        localStorage.setItem("user_data",
            JSON.stringify(user_data));

    } else {

    }
}


function getDataFromStorage() {
    let userDetails =
        JSON.parse(localStorage.getItem('user_data'));
    return userDetails;
}

function clearDataStorage() {
    localStorage.clear();
}
saveInStorage();
// console.log(getDataFromStorage().student_details.student_number);

function accomodationListItem(id, image, location, parkingAvailable, petsAllowed, priceRange, type, disabledAccess, favourite, description, firstImage, secondImage, thirdImage) {



    if (petsAllowed) {
        petsAllowed = ""
    } else {
        petsAllowed = "No"
    }

    if (parkingAvailable) {
        parkingAvailable = ""
    } else {
        parkingAvailable = "No"
    }

    if (disabledAccess) {
        disabledAccess = ""
    } else {
        disabledAccess = "No"
    }

    let favouriteButtonColor = "";
    let favouriteText = ""

    if (favourite) {
        favouriteButtonColor = "favouriteButtonColor"
        favouriteText = "Added to Favourites"
    } else if (!favourite) {
        favouriteText = "Favourite"
    }

    let popUpId = id + "_images";

    // insertImagePopUps(popUpId, firstImage, secondImage, thirdImage);

    return (
        '<div data-role="content" class="center border_bottom accomodationItem">' +
        '<div class="image_container">' +
        '<a href="#' + popUpId + '" data-rel="popup"><img src="' + image + '" alt="" /></a>' +
        // '<a href="#room_1_images" data-rel="popup"><img src="' + image + '" alt="" /></a>' +

        '</div>' +
        '<p>Click image to view photos</p>' +
        '<div class="ui-grid-a margin_top_text">' +
        '<h6>' + description + '</h6>' +
        '<div class="ui-block-a">' +
        '<ul class="room_details">' +
        '<li>Location: ' + location + '</li>' +
        '<li>Accomodation Type: ' + type + '</li>' +
        '<li>Price: £' + priceRange + ' per month</li>' +
        '</ul>' +
        '</div>' +

        '<div class="ui-block-b">' +
        '<ul class="room_details">' +
        '<li>' + petsAllowed + ' Pets Allowed</li>' +
        '<li>' + parkingAvailable + ' Parking Available</li>' +
        '<li>' + disabledAccess + ' Disabled Access Available</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<button id="' + id + '" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-heart favourite-button ' + favouriteButtonColor + '">' + favouriteText + '</button>' +
        '</div>'
    )
}

//Check if user is logged in. If false, Sign and Register will appear. Else, Log Out Will
function userLoggedIn() {
    getDataFromStorage().student_details.registration.forEach(item => {
        console.log(item.userLoggedIn);
        if (item.userLoggedIn === true) {
            $(".userLoggedOut").addClass("display-none");
            $(".userLoggedIn").removeClass("display-none");


        } else if (item.userLoggedIn === false) {
            $(".userLoggedIn").addClass("display-none");
            $(".userLoggedOut").removeClass("display-none");
        }
    });
}

function insertImagePopUps(id, firstImage, secondImage, thirdImage) {

    $(".popUpsDiv").append(
        '<div data-role="popup" id="' + id + '" class="ui-content" style="max-width:2000px">' +
        '<a href="#" data-rel="back"' +
        '    class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>' +
        '  <div class="row-images">' +
        '    <div class="column image-1">' +
        '      <img src="' + firstImage + '" alt="" srcset=""> ' +
        '    </div>' +
        '    <div class="column image-2">' +
        '      <img src="' + secondImage + '" alt="" srcset=""> ' +
        '    </div>' +
        '    <div class="column image-3">' +
        '      <img src="' + thirdImage + '" alt="" srcset=""> ' +
        '    </div>' +
        '  </div>' +
        '</div>'
    )


}

$(document).on("pagecontainershow", function (e, ui) {

    let page = ui.toPage[0].id;

    if (page == "listings_page") {

        userLoggedIn();

        listAccomodations();

        function listAccomodations() {
            $(".accomodation_listings").html("");
            getDataFromStorage().student_details.accomodations.accomodation_items.forEach(item => {
                $(".accomodation_listings").append(
                    accomodationListItem(
                        item.id,
                        item.image[0],
                        item.location,
                        item.parkingAvailable,
                        item.petsAllowed,
                        item.priceRange,
                        item.type,
                        item.disabledAccess,
                        item.favourite,
                        item.description,
                        item.image[0],
                        item.image[1],
                        item.image[2]
                    ));
            });


        }//listAccomodations function

        //initial run
        // listAccomodations();

        $('.favourite-button').click(function () {
            saveInStorage();
            user_data.student_details.accomodations.accomodation_items.forEach(item => {

                let buttonAttribute = $(this).attr("id");
                console.log(buttonAttribute);

                if (item.id === buttonAttribute) {

                    if (item.favourite === true) {
                        item.favourite = false;
                        $(this).removeClass("favouriteButtonColor").html("Favourite");
                        saveInStorage();
                    }
                    else if (item.favourite === false) {
                        item.favourite = true;
                        $(this).addClass("favouriteButtonColor").html("Added to Favourites");
                        saveInStorage();
                    } else {
                        return;
                    }

                }

            });

            console.log(user_data.student_details.accomodations.accomodation_items[0].favourite + "userdata");
            console.log(getDataFromStorage().student_details.accomodations.accomodation_items[0].favourite + "storage");

        });


        $(".popUpsDiv").insertAfter(".accomodation_listings")
        

        $(".image-1").on("swipeleft", function (event) {
            $(".row-images").animate({ marginLeft: "-75vw" }, 1000);
        })

        $(".image-2").on("swipeleft", function (event) {
            $(".row-images").animate({ marginLeft: "-150vw" }, 1000);
        })

        $(".image-3").on("swiperight", function (event) {
            $(".row-images").animate({ marginLeft: "-75vw" }, 1000);
        })

        $(".image-2").on("swiperight", function (event) {
            $(".row-images").animate({ marginLeft: "0vw" }, 1000);

        })

    }//listings page end

    if (page == "favourites_page") {

        userLoggedIn();

        $(".favourites_list").html("");


        getDataFromStorage().student_details.accomodations.accomodation_items.forEach(item => {

            if (item.favourite === true) {

                $(".favourites_list").append(

                    accomodationListItem(
                        item.id + "_favourite",
                        item.image[0],
                        item.location,
                        item.parkingAvailable,
                        item.petsAllowed,
                        item.priceRange,
                        item.type,
                        item.disabledAccess,
                        item.favourite,
                        item.description
                    ));

            }

        });//forEach

        $('.favourite-button').click(function () {
            saveInStorage();
            user_data.student_details.accomodations.accomodation_items.forEach(item => {

                let buttonAttribute = $(this).attr("id");

                console.log(buttonAttribute);

                if (item.id === buttonAttribute.substring(0, 6)) {

                    if (item.favourite === true) {
                        item.favourite = false;
                        $(this).removeClass("favouriteButtonColor").html("Favourite");
                        saveInStorage();
                    }
                    else if (item.favourite === false) {
                        item.favourite = true;
                        $(this).addClass("favouriteButtonColor").html("Added to Favourites");
                        saveInStorage();
                    } else {
                        return;
                    }

                }

            });

            console.log(user_data.student_details.accomodations.accomodation_items[0].favourite + "userdata");
            console.log(getDataFromStorage().student_details.accomodations.accomodation_items[0].favourite + "storage");

        });



    }//favourite page end


    if (page == "register_page") {

        $("#form_button").click(function () {
            console.log($("#register_form").serializeArray());

            let registerData = $("#register_form").serializeArray();


            user_data.student_details.registration.forEach(item => {
                console.log(item.studentNumber);
                item.studentNumber = registerData[0];
                item.firstName = registerData[1];
                item.lastName = registerData[2];
                item.startDate = registerData[3];
                item.email = registerData[4];
                item.password = registerData[5];
                item.userLoggedIn = true;

            });


            saveInStorage();
        })

    }




})
