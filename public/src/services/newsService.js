const fetch = require('node-fetch')

const getNews = async (category, year) => {

    const serviceKey = process.env.PUBLIC_KEY;
    let url;
    let news;

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

    return news;

}

module.exports = {
    getNews
}