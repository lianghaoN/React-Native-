import queryString from 'query-string'
let rootUrl = 'https://www.fastmock.site/mock/5630893cc4cae9bd055529158576d5a3/api';

let myFetch = {
    get(url,queryParams){
        url = rootUrl+url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams);
        }
        return fetch(url)
                .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
            
    }
}

export {myFetch};