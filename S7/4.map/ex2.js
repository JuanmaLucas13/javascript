const users = [{id: 1, name: 'Abel'}, 
         {id:2, name: 'Julia'},
         {id:3, name: 'Pedro'}, 
         {id:4, name: 'Amanda'}];

const newUsers = users.map(user => {
    //   if (user.name[0] === 'A')
    //      return 'Anacleto'
    //   else 
    //      return user.name;   
    return user.name[0] === 'A' ? 'Anacleto' : user.name;
}
)

console.log(newUsers);
