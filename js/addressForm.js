let placeSearch, autocomplete;

let componentForm = {
    street_number: "short_name",
    route: "long_name",
    locality: "long_name",
    administrative_area_level_1: "short_name",
    country: "long_name",
    postal_code: "short_name",
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical ocation types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("address"),
        {
            componentRestrictions: {
                country: ["ng"],
            },
            types: ["address"],
        }
    );

    // When the user selects an address from the dropdown, populate the address field in the form.
    autocomplete.addListener("place_changed", fillInAddress);
}

initAutocomplete();

function fillInAddress() {
    // Get the place details from the autocomplete object.
    let place = autocomplete.getPlace();
    let address1 = "";

    for (const component of place.address_components) {
        const componentType = component.types[0];

        switch (componentType) {
            case "street_number":
                address1 = `${component.long_name} ${address1}`;
                break;

            case "route":
                address1 += component.short_name;
                break;

            case "locality":
                address1 += `, ${component.long_name}`;
                break;

            case "country":
                address1 += `, ${component.long_name}`;
                break;
        }
    }

    document.getElementById("address").setAttribute("value", `${address1}`);
}

function geoLocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            let circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy,
            });

            autocomplete.setBounds(circle.getBounds());
        });
    }
}
