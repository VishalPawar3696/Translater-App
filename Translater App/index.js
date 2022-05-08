
 async function ok(){
     try{
let input=document.getElementById("input_text").value;
const input_lang=document.getElementById('select').value;
const out_lang=document.getElementById('select_2').value;

    const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: input,
		source: input_lang, 
		target:out_lang,
		format: "text"
	}),
	headers: { "Content-Type": "application/json" }
});
let data=await res.json();
document.getElementById('out').innerText=data.translatedText;
console.log(data);
}
 catch(err){
     console.log(err)
 }
}