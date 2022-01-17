let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 }
];

//here are three analogical functions

//[me] при users.filter(army.canJoin)  теряется Reference type, 
// ccылка на функцию просто копируется внутрь filter с потерей контекста

/*[1]*/ //let soldiers = users.filter(army.canJoin, army);  //напрямую передаём контекст метода

//we simply use each of next two analogical methods as a wrapper to call the army.canJoin of the object
//without losing context 'army' (просто прячем вызов метода в анонимную функцию-обёртку чтобы Reference type не терялся)
 
/*[2]*/ //let soldiers = users.filter(user => army.canJoin(user)); 
/*[3]*/let soldiers = users.filter(function (user) { return army.canJoin(user); })

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

