import { decorate, observable, action } from 'mobx';

export class CounterStore{

    counter = 0;

    increaseCounter(){
        this.counter++;
    };

    decreaseCounter(){
        this.counter--;
    };

}

decorate(CounterStore, {
    counter: observable,
    increaseCounter: action,
    decreaseCounter: action
})