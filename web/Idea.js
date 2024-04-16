
// ----------------------------add to chart-------------
let items = [
    {
        itemName: "Three Piece ",
        itemImage: "1.png",
        itemdocx: "1.docx"
    },
    {
        itemName: "Eid Collection",
        itemImage: "2.png",
        itemdocx: "2.docx"
    },
    {
        itemName: "Luxury Prf",
        itemImage: "3.png",
        itemdocx: "3.docx"
    },
    
    {
        itemName: "Unstiched Fabric",
        itemImage: "4.png",
        itemdocx: "4.docx"
    },
    {
        itemName: "Party Wear",
        itemImage: "5.png",
        itemdocx: "5.docx"
    },{
        itemName: "Kids Collection",
        itemImage: "6.png",
        itemdocx: "6.docx"
    },
    {
        itemName: "Bottom Collection",
        itemImage: "7.png",
        itemdocx: "7.docx"
    },
    {
        itemName: "Bridal Collection",
        itemImage: "8.png",
        itemdocx: "8.docx"
    },
    {
        itemName: "Lehnga Collection",
        itemImage: "9.png",
        itemdocx: "9.docx"
    },
    {
        itemName: "Saree Collection",
        itemImage: "10.png",
        itemdocx: "10.docx"
    },
    {
        itemName: "Shoee Collection",
        itemImage: "11.png",
        itemdocx: "11.docx"
    },
    {
        itemName: "Wallima Collection",
        itemImage: "12.png",
        itemdocx: "12.docx"
    }

]
let addToCartItems = []


addItems()
cartItemsFetch()
function addToCart(elementId){
    addToCartItems.push(items[elementId])
    cartItemsFetch()
}
function deleteItem(elementId){
    addToCartItems.splice(elementId,1);
    cartItemsFetch()
}

// Function to add items to the card container
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""; // Clear the card container
    for (var i = 0; i < items.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="gulahmend-image/${items[i].itemImage}" alt="${items[i].itemName}">
                    </div>
                    <div class="cardContent">
                        <h3 class="colour">${items[i].itemName}</h3>
                        <!-- Button to trigger the download -->
                        <button class="but" type="button" onclick="downloadFile('gulahmed-docx/${items[i].itemdocx}')">Learn More</button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Function to download a file based on its name
function downloadFile(fileName) {
    if (fileName.endsWith('.docx')) { // Check if the file is a .docx file
        var link = document.createElement('a'); // Create a temporary anchor element
        link.href = fileName; // Set the href attribute to the file path
        link.download = fileName; // Set the download attribute to force download
        link.click(); // Trigger the click event to start the download
    } else {
        console.error('File format not supported!');
    }
}
