function parkTypes() {
    const parkTypesArray = [
        "National Park",
        "National Monument",
        "Recreation Area",
        "Scenic Trail",
        "Battlefield",
        "Historic",
        "Memorial",
        "Preserve",
        "Island",
        "River",
        "Seashore",
        "Trail",
        "Parkway"
    ]
}

//document.addEventListener("DOMContentLoaded", () => {
//    const selectElement = document.getElementById("type-filter");
//
//    selectElement.addEventListener("change", filterType)
//
//    displayType(type);
//
//})
//
//function filterLocation() {
//    // type is the element for html
//    const type = document.getElementsById("type-filter");
//    // types will grab the array data from the function parkTypes
//    const types = parkTypes();
//
//    // type
//    for (let type of types) {
//        const option = new Option(type, type);
//        type.appendChild(option);
//    }
//}