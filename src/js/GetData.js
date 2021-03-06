export default class GetData {
    getData () {
        return new Promise ((resolve, reject)=> {
            let request = new XMLHttpRequest();
            request.open("GET", "src/data/data.json");
            request.onload = ()=> {
                if(request.status === 200){
                    resolve(JSON.parse(request.response))
                }else {
                    reject("File not found");
                }
            }
            request.send();
        });
    }
    
}