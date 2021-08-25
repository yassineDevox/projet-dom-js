// Creer une liste de commandes 

var COMMANDES = [
    { 
        title: 'Laptop Case', 
        prix: 20.34, 
        thumnail: "laptop-case.jpg", 
        quantity: 4
    },
    { 
        title: 'Phone Case', 
        prix: 20.34, 
        thumnail: "laptop-case.jpg", 
        quantity: 1
    },{ 
        title: 'Clavier Case', 
        prix: 20.34, 
        thumnail: "laptop-case.jpg", 
        quantity: 1
    },{ 
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
        <button>
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