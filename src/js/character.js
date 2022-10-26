export default class Character{
    _attack = 100;
    _distance = 2;
    _stoned = 5;

    get attack(){
        if (this._distance<=5){
        return this._attack - (this._attack * ((this._distance - 1) * 0.1))
        } else{
            return this._attack - (this._attack*  0.4)
        }
    }


    set attack(value){
        this._attack = value
    }

    get stoned(){
        return this._attack - Math.log2(this._distance) * this._stoned
    }

    set stoned(value){
        this._stoned = value
    }

}

