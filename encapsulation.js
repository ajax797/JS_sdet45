"use strict";
class payment
{
    price=10000
    #status='pending'

    displayStatus()
    {
        console.log('display---> '+this.#status);
    }
    getStatus()
    {
        return this.#status
    }

    get Status()
    {
        return this.#status
    }

    setStatus(val)
    {
        this.#status=val
    }

    set updateStatus(value)
    {
        this.#status=value
    }

}

let user1=new payment()
user1.displayStatus()

console.log('1--->'+user1.Status);

user1.status='1successfull'
user1.price=15000
user1.updateStatus='successfull'
console.log('2--->'+user1.Status);
console.log(user1.price);
console.log(user1.status);
console.log('2--->'+user1.Status);
console.log(user1.getStatus());
user1.setStatus('PENDING')
console.log(user1.getStatus());
console.log('2--->'+user1.Status);