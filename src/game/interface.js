let game = {

    techs: ["bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "node", "react"],    

    createCards: function() {
        let cards = [];
        this.createCardsFromTechs(cards);
        this.createCardsFromTechs(cards);
        this.shuffledCards(cards);
        this.shuffledCards(cards);

        return cards;
    },

    createCardsFromTechs: function(cards){
        this.techs.forEach(tech => {
            let card = {};
            card.icon = tech;
            card.flipped = false;
            cards.push(card);
        })
    },

    shuffledCards: function(cards){
        let indexCards = cards.length - 1;
        let indexRandom = 0;
    
        while(indexCards != 0) {
            indexRandom = Math.floor(Math.random()*indexCards);
            
            [cards[indexCards], cards[indexRandom]] = [cards[indexRandom], cards[indexCards]];
            indexCards--;
        }
    }

}


export default game;