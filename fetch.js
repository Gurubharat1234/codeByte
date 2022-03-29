async function data(){
    const responce=await fetch('fetch.json')
    const names=await responce.json();
    console.log(names);
}
data()

