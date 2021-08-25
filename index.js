// Creer une liste de commandes 

var COMMANDES = [
    {

        id: 1, title: 'Laptop Case',
        prix: 20.34,
        thumnail: "laptop-case.jpg",
        quantity: 4
    },
    {

        id: 2, title: 'Phone Case',
        prix: 20.34,
        thumnail: "laptop-case.jpg",
        quantity: 1
    }, {
        id: 3,
        title: 'Clavier Case',
        prix: 20.34,
        thumnail: "laptop-case.jpg",
        quantity: 1
    }, {
        id: 4,
        title: 'Pencil Case',
        prix: 20.34,
        thumnail: "laptop-case.jpg",
        quantity: 1
    },
]

//Afficher la liste des commandes 

// je cible ul 
var list_command = document.getElementById("list-commands");

//parcourir la liste des commands 
for (var command of COMMANDES) {
    //
    var shopping_item = `
    <li class="shopping-cart-item">
    <div>
        <img src="${command.thumnail}" alt="${command.title}" />
        <p class="item-info">
            <span>${command.title}</span>
            <span>${command.prix}$</span>
        </p>
    </div>
    <div>
        <button>-</button>
        <input type="number" value="${command.quantity}" />
        <button>+</button>
        <button onclick="onDeleteItem(${command.id})">
            <i class="fa fa-trash-alt"></i>
        </button>
    </div>
    </li> 
    `
    //ajouter a la liste ul 
    list_command.innerHTML += shopping_item
    // console.log(command);
}





console.log(list_command)




////------- Functions --------------


function onDeleteItem(id) {
    var choice = confirm("Etes vous sure ?");
    if (choice) {
        // alert(" suppression de la commd Id :"+id)
        //chercher lelm avec lid selectionner et le supprimer avec delete 
        for (var i = 0; i < COMMANDES.length; i++) {
            if (COMMANDES[i] != undefined
                && COMMANDES[i].id == id)
                delete COMMANDES[i]
        }

        console.table(COMMANDES)

        // je cible ul 
        var list_command = document.getElementById("list-commands");
        list_command.innerHTML = ""
        //parcourir la liste des commands 
        for (var command of COMMANDES) {
            //
            if (command != undefined) {
                var shopping_item = `
            <li class="shopping-cart-item">
            <div>
                <img src="${command.thumnail}" alt="${command.title}" />
                <p class="item-info">
                    <span>${command.title}</span>
                    <span>${command.prix}$</span>
                </p>
            </div>
            <div>
                <button>-</button>
                <input type="number" value="${command.quantity}" />
                <button>+</button>
                <button onclick="onDeleteItem(${command.id})">
                    <i class="fa fa-trash-alt"></i>
                </button>
            </div>
            </li> 
            `
                //ajouter a la liste ul 
                list_command.innerHTML += shopping_item


            }

        }
        console.table(COMMANDES)
    }


}