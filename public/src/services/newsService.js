const fetch = require('node-fetch')

let strToObj = (str, n) =>{
    let result = str.split(",").splice(0,n);
    return result;
} 

const getNews = async (category, year) => {

    const serviceKey = process.env.PUBLIC_KEY;
    let url;
    let news;
    let result = [];

    const metabusUrl = {
        "2007" : "/15097929/v1/uddi:e631fe5b-6674-4a78-b673-bd14f90f57f9",
        "2020" : "/15097929/v1/uddi:898b5bb4-9d72-4aa0-a32e-b83cf1ce3df6"
    }

    const coronaUrl = {
        "2020" : "/15069309/v1/uddi:973ad0df-617a-4565-8e82-8ea7869e75d4",
        "2021" : "/15069309/v1/uddi:d2dba5c8-9ee5-45e3-aabf-98d95f0374fe"
    }
    
    if(category == "corona"){
        url = coronaUrl[year];
    }
    else if(category == "metabus"){
        url = metabusUrl[year];
    }

    if(!url){
        const error = new Error("DATA DOESN'T EXIST");
        error.statusCode = 400;
        throw error;
    }

    await fetch(`https://api.odcloud.kr/api${url}?serviceKey=${serviceKey}`)
    .then((res) => news = res.json())
    .then(myJson =>{
        news = myJson.data;
    })

    news.map(el =>{

        var obj = {};
        obj["기고자"] = el["기고자"];
        obj["본문"] = el["본문"];
        obj["언론사"] = el["언론사"];
        obj["원본주소"] = el["원본주소"];
        obj["일자"] = el["일자"];
        obj["제목"] = el["제목"];
        obj["주소"] = el["주소"];
        obj["키워드"] = strToObj(el["키워드"], 12);
        obj["통합 분류1"] = el["통합 분류1"];
        obj["특성추출"] = strToObj(el["특성추출"], 8);

        result.push(obj);
        
    })

    return result;

}

module.exports = {
    getNews
}