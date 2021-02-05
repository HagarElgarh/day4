
export function movies (state = null,action)
{
    console.log("action "+action);
if (action.type ==="MOVIES_LIST"){
    console.log('4- get movies reducer called ')
     return action.payload;
}
console.log('1- init action')
return state;

}