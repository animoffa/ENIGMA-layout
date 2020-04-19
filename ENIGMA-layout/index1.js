let human= {
    hungry:60,
    pi:80,
    Eat() {
        this.hungry=0;
    },
    piss() {
        this.pi=0;
    },
    lunch() {
        console.log('хуй');
        this.hungry -=23;
        this.hair='red';
        return this.hungry;
    },
};
console.log('hair is ' + human.hair);
console.log(human);
console.log(human.hair);