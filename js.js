const apiKey = "za8eC3bHS5ntow61wwiB8h5u4shTLDN21DjsrprPh13T5v1IQ8CVyhJy";
const btn1 = function () {
  fetch("https://api.pexels.com/v1/search?query=animals/", {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
