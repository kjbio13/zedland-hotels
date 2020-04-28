let user_data = {
    student_details: {
        "student_number": "",
        "first_name": "",
        "last_name": "",
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
                    "favourite": true
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
                    "favourite": true
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


function saveInStorage() {
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

saveInStorage();
// console.log(getDataFromStorage().student_details.student_number);

function accomodationListItem(id, image, location, parkingAvailable, petsAllowed, priceRange, type, disabledAccess, favourite) {

    let favouriteButtonColor = "";

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

    if (favourite) {
        favouriteButtonColor = "favouriteButtonColor"
    }

    return (
        '<div data-role="content" class="center border_bottom accomodationItem">' +
        '<div class="image_container">' +
        '<img src="' + image + '" alt="" />' +
        '</div>' +
        '<p>Click image to view photos</p>' +
        '<div class="ui-grid-a margin_top_text">' +

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
        '<button id="' + id + '" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-heart ' + favouriteButtonColor + '">Favourite</button>' +
        '</div>'
    )
}

$(document).on("pagecontainershow", function (e, ui) {

    let page = ui.toPage[0].id;

    if (page == "listings_page") {

        function listAccomodations() {
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
                            item.favourite
                        ));
                });


        }//listAccomodations function

        //initial run
        listAccomodations();

        $('#room_1').click(function () {
            user_data.student_details.accomodations.accomodation_items.forEach(item => {
                item.favourite = !item.favourite;
                saveInStorage();
                listAccomodations();
            });
            console.log(getDataFromStorage().student_details.accomodations.accomodation_items[0].favourite);

        });

    }//listings page end
})
