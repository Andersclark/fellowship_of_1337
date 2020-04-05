const NINJAS_ENDPOINT = 'https://api.tretton37.com/ninjas';
async function fetchNinjas() {
  try {
    const response = await fetch(NINJAS_ENDPOINT, { headers: { 'content-type': 'application/json' } });
    const json = await response.json();
    return json;
  } catch (e) {
    throw new Error(e.message);
  }
}
/*
  {
  "name":"Arin Hlaj",
  "email":"neva.uynw@gerggba37.pbz",
  "phoneNumber":"+38651361565",
  "office":"Ljubljana",
  "tagLine":null,
  "mainText":"\u003cp\u003eI have always had an interest in computers (mostly games), mathematics, chess, solving logical problems and similar things, which I think are all in some way connected to programming. Still, I only got into programming at quite an old age when I decided to try game development with Unity. I did some funny/stupid games for myself and my friends and I made an educational game during my studies. This was then I realised that I like programming and I decided that I want to work as a programmer and after working for a few months I fell in love with it.\u003c/p\u003e\u003cp\u003eFirst I worked as a student for two months and then I was employed for a little over two years. I always want to learn new things and improve myself and I felt like I needed a new challenge. At that time I saw the tretton37 job offer, which offered exactly what I wanted.\u003c/p\u003e\u003cp\u003eI am also very interested in sports. I play football most of the time, but I also like swimming, biking, running, skiing and other stuff. I like to watch sports on television and read books.\u003c/p\u003e",
  "gitHub":null,"twitter":null,
  "stackOverflow":null,
  "linkedIn":"/in/arin-hlaj-3aa6a8113/",
  "imagePortraitUrl":"https://tretton37img.blob.core.windows.net/ninja-portrait/arin-hlaj-cv",
  "imageBodyUrl":"https://tretton37img.blob.core.windows.net/ninja-body/arin-hlaj-body"
  }
 */
export default fetchNinjas;
