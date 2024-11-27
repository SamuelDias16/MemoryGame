let script = {

    firstMove: null,
    secondMove: null,
    checkTime: false,


    checkMove: function (card){
        if(card.flipped == true || this.checkTime){
            return false
        }
    
        if(!this.firstMove){
            this.firstMove = card;
            return true;
        }else{
            this.secondMove = card;
            this.checkTime = true;
            return true;
        }
    },

    checkMatch: function (){
        let firstIcon = this.firstMove.icon;
        let secondIcon = this.secondMove.icon;
        
        if(firstIcon == secondIcon){
    
            this.cleanMove();
            return true;
        }else{
            this.firstMove.flipped = false;
            this.secondMove.flipped = false;  
            this.cleanMove(); 
            return false;
        }
    },

    cleanMove: function(){
        this.firstMove = null;
        this.secondMove = null;
        this.checkTime = false;
    },

    checkGameOver: function(){
        let cardsFlip = document.querySelectorAll(".flip").length
        
        return (cardsFlip == 20)? true : false;
    },
}


export default script;