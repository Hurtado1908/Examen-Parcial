document.addEventListener("DOMContentLoaded", () => {
    const gameCards = document.querySelectorAll(".game"); 
    const modal = document.getElementById("gameModal"); 
    const modalTitle = document.getElementById("modalGameTitle"); 
    const modalDescription = document.getElementById("modalGameDescription"); 
    const closeModalBtn = document.querySelector(".close"); 

function addToFavorites(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (!favorites.includes(gameId)) {
        favorites.push(gameId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Juego añadido a favoritos');
    } else {
        alert('Este juego ya está en favoritos');
    }
}

function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    let gamesContainer = document.querySelector('.game-grid');
    gamesContainer.innerHTML = ''; 

    if (favorites.length === 0) {
        gamesContainer.innerHTML = '<p>No tienes juegos favoritos aún.</p>';
    } else {
        favorites.forEach(gameId => {
            let gameCard = document.getElementById(gameId);  
            if (gameCard) {
                gamesContainer.appendChild(gameCard.cloneNode(true)); 
            }
        });
    }
}

document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        let gameId = this.dataset.gameId;  
        addToFavorites(gameId);
    });
});

document.querySelector('.filter-btn[data-category="favoritos"]').addEventListener('click', function() {
    displayFavorites();
});

    
    const gamesData = {
        1: {
            title: "Throne and Liberty",
            description: "Free to Play. Embark on an epic journey in a mystical world.",
            image: "img/throne2.jpg"
        },
        2: {
            title: "Monster Hunter Stories",
            description: "Midweek Deal. Get it now with 34% discount, only for $15.80!",
            image: "img/monster-hunter-stories-okladka-gra-pc-muve.png"
        },
        3: {
            title: "Songs of Conquest",
            description: "Strategy and adventure combined. On sale for $34.50 with 50% discount!",
            image: "img/songs.jpg"
        }
    };

    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            const gameId = card.dataset.id; 
            const game = gamesData[gameId]; 

            if (game) {
                modalImage.src = game.image; 
                modalTitle.textContent = game.title; 
                modalDescription.textContent = game.description;
                modal.style.display = "flex"; 
            }
        });
    });

  
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none"; 
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; 
        }
    });
});


let allGames = []; 


function addToFavorites(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (!favorites.includes(gameId)) {
        favorites.push(gameId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Juego añadido a favoritos');
    } else {
        alert('Este juego ya está en favoritos');
    }
}


function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    let gamesContainer = document.querySelector('.game-grid');
    gamesContainer.innerHTML = ''; 

    if (favorites.length === 0) {
        gamesContainer.innerHTML = '<p>No tienes juegos favoritos aún.</p>';
    } else {
        favorites.forEach(gameId => {
            let gameCard = document.getElementById(gameId);  
            if (gameCard) {
                gamesContainer.appendChild(gameCard.cloneNode(true)); 
            }
        });
    }
}


function displayAllGames() {
    let gamesContainer = document.querySelector('.game-grid');
    gamesContainer.innerHTML = ''; 
    
    allGames.forEach(game => {
        gamesContainer.appendChild(game.cloneNode(true)); 
    });

    assignFavoriteButtons();
}

function filterGames(category) {
    if (category === 'all') {
        displayAllGames();
    } else if (category === 'favoritos') {
        displayFavorites();
    } else {
        let gamesContainer = document.querySelector('.game-grid');
        gamesContainer.innerHTML = ''; 
        
        allGames.forEach(game => {
            if (game.dataset.category === category) {
                gamesContainer.appendChild(game.cloneNode(true)); 
            }
        });
        
       
        assignFavoriteButtons();
    }
}

function assignFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', function() {
            let gameId = this.dataset.gameId;  
            addToFavorites(gameId);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    allGames = Array.from(document.querySelectorAll('.game')); 
    
    assignFavoriteButtons();
});

