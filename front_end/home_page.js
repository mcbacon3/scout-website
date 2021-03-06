var all_district_courts = [
    "Accomack General District Court", 
    "Albemarle General District Court", 
    "Alexandria General District Court", 
    "Alleghany General District Court", 
    "Amelia General District Court", 
    "Amherst General District Court", 
    "Appomattox General District Court", 
    "Arlington General District Court", 
    "Augusta General District Court", 
    "Bath General District Court", 
    "Bedford General District Court", 
    "Bland General District Court", 
    "Botetourt General District Court", 
    "Bristol General District Court", 
    "Brunswick General District Court", 
    "Buchanan General District Court", 
    "Buckingham General District Court",
    "Buena Vista General District Court", 
    "Campbell General District Court", 
    "Caroline General District Court", 
    "Carroll General District Court", 
    "Charles City General District Court", 
    "Charlotte General District Court", 
    "Charlottesville General District Court", 
    "Chesapeake General District Court", 
    "Chesterfield General District Court", 
    "Clarke General District Court", 
    "Colonial Heights General District Court", 
    "Craig General District Court", 
    "Culpeper General District Court", 
    "Cumberland General District Court", 
    "Danville General District Court", 
    "Dickenson General District Court", 
    "Dinwiddie General District Court", 
    "Emporia General District Court", 
    "Essex General District Court", 
    "Fairfax City General District Court", 
    "Fairfax County General District Court", 
    "Falls Church General District Court", 
    "Fauquier General District Court", 
    "Floyd General District Court", 
    "Fluvanna General District Court", 
    "Franklin City General District Court", 
    "Franklin County General District Court", 
    "Frederick General District Court", 
    "Fredericksburg General District Court", 
    "Galax General District Court", 
    "Giles General District Court", 
    "Gloucester General District Court", 
    "Goochland General District Court", 
    "Grayson General District Court", 
    "Greene General District Court", 
    "Greensville General District Court", 
    "Halifax General District Court", 
    "Hampton General District Court", 
    "Hanover General District Court", 
    "Harrisonburg/Rockingham General District Court", 
    "Henrico General District Court", 
    "Henry General District Court", 
    "Highland General District Court", 
    "Hopewell General District Court", 
    "Isle of Wight General District Court", 
    "King George General District Court", 
    "King William General District Court", 
    "King and Queen General District Court", 
    "Lancaster General District Court", 
    "Lee General District Court", 
    "Lexington/Rockbridge General District Court", 
    "Loudoun General District Court", 
    "Louisa General District Court", 
    "Lunenburg General District Court", 
    "Lynchburg General District Court", 
    "Madison General District Court", 
    "Martinsville General District Court", 
    "Mathews General District Court", 
    "Mecklenburg General District Court", 
    "Middlesex General District Court", 
    "Montgomery/Blacksburg General District Court", 
    "Montgomery/Christiansburg General District Court", 
    "Nelson General District Court", 
    "New Kent General District Court", 
    "Newport News-Civil General District Court", 
    "Newport News-Criminal General District Court", 
    "Newport News-Traffic General District Court", 
    "Norfolk General District Court", 
    "Norfolk General District-Criminal Division", 
    "Norfolk General District-Traffic Division", 
    "Norfolk General District-Civil Division", 
    "Northampton General District Court", 
    "Northumberland General District Court", 
    "Nottoway General District Court", 
    "Orange General District Court", 
    "Page General District Court", 
    "Patrick General District Court", 
    "Petersburg General District Court", 
    "Pittsylvania General District Court", 
    "Portsmouth General District Court", 
    "Powhatan General District Court", 
    "Prince Edward General District Court", 
    "Prince George General District Court", 
    "Prince William General District Court", 
    "Pulaski General District Court", 
    "Radford General District Court", 
    "Rappahannock General District Court", 
    "Richmond County General District Court", 
    "Richmond-Civil General District Court", 
    "Richmond-Marsh Criminal/Traffic General District Court at Manchester", 
    "Richmond-John Marshall Criminal/Traffic General District Court", 
    "Richmond Manchester General District Court", 
    "Roanoke City General District Court", 
    "Roanoke County General District Court", 
    "Russell General District Court", 
    "Salem General District Court", 
    "Scott General District Court", 
    "Shenandoah General District Court", 
    "Smyth General District Court", 
    "Southampton General District Court", 
    "Spotsylvania General District Court", 
    "Stafford General District Court", 
    "Staunton General District Court", 
    "Suffolk General District Court", 
    "Surry General District Court", 
    "Sussex General District Court", 
    "Tazewell General District Court", 
    "Virginia Beach General District Court", 
    "Warren General District Court", 
    "Washington General District Court", 
    "Waynesboro General District Court", 
    "Westmoreland General District Court", 
    "Williamsburg/James City County General District Court", 
    "Winchester General District Court", 
    "Wise/Norton General District Court",
    "Wythe General District Court",
    "York General District Court"
    ];

innerHTMLString = "";
all_district_courts.forEach(courtName => {
    innerHTMLString += `<input type="checkbox" id="`+courtName+`">
    <label for="`+courtName+`">`+courtName+`</label><br></br>`
})
document.getElementById("courtsList").innerHTML = innerHTMLString;

function formQuery(){

    //TODO: Null-checking & field validation function

    var queryStr = "CASE TYPE: ";
    var civil = document.getElementById("civil").checked;
    var criminal = document.getElementById("criminal").checked;

    if(civil){
        queryStr += "civil";
    }
    if(criminal){
        queryStr += civil ? ",criminal" : "criminal";
    }

    queryStr += " | COURTS: ";

    all_district_courts.forEach(courtName => {
        if(document.getElementById(courtName).checked){
            queryStr += courtName + ", "
        }
    })

    queryStr += " | FROM: " + document.getElementById("startDate").value + ", ";
    queryStr += "TO: " + document.getElementById("endDate").value;

    document.getElementById("queryOutput").innerHTML = `<p>` + queryStr + `<p>`;
    resetFields();
}

function resetFields(){
    document.getElementById("civil").checked = false;
    document.getElementById("criminal").checked = false;
    all_district_courts.forEach(courtName => {
        document.getElementById(courtName).checked = false;
    })
    document.getElementById("startDate").value = '';
    document.getElementById("endDate").value = '';
}