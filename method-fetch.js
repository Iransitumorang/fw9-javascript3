// untuk ini kayaknya belum lengkap karna saya masih kurang paham, jadi saya kerjakan semampunya dulu
// import fetch from "json";

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(Response => Response.json())
.then(data => {
    data.map((daftar)=> console.log(daftar.name))
})
.catch((err)=>{console.log(err)
});