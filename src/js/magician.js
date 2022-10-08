

class magician{
    prop = {
        attack:100,

        get attack(){
            return this.attack
        },

        set attack(value){
            if (this.stoned == 0){
            this.attack = this.attack-(this.attack*((value-1)*0,1))
            }
            else {
                this.attack = this.attack - log2(value) * 5
            }
        },
        stoned:0,

        get stoned(){
            return this.stoned;
        },

        /**
         * @param {number | ((arg0: number) => any)} value
         */
        set stoned(value){
            return this.stoned = value;
        }
    };

}

