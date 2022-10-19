const fetch = require('node-fetch')

const getNews = async (year) => {

    const serviceKey = process.env.SERVICE_KEY;
    let url;
    const result = [];
    let news;

    if(year == "2007") url = "/15097929/v1/uddi:e631fe5b-6674-4a78-b673-bd14f90f57f9";
    else if(year == "2020") url = "/15097929/v1/uddi:898b5bb4-9d72-4aa0-a32e-b83cf1ce3df6"
    else{
        const error = new Error("DATA_DOESN'T_EXIST");
        error.statusCode = 400;
        throw error;
    }

    await fetch(`https://api.odcloud.kr/api${url}?serviceKey=${serviceKey}`)
    .then((res) => news = res.json())
    .then(myJson =>{
        news = myJson.data;
    })

    for(var el of news){
        var obj = {}
        obj["일자"] = el["일자"];
        obj["기고자"] = el["기고자"];
        obj["본문"] = el["본문"];
        obj["언론사"] = el["언론사"];
        obj["원본주소"] = el["원본주소"];
        obj["제목"] = el["제목"];
        obj["키워드"] = el["키워드"].split(",").slice(0,12);
        result.push(obj);
    }

    return result;

}

module.exports = {
    getNews
}