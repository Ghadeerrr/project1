fetch("https://sports.api.decathlon.com/sports")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json.data);
    const ch = json.data;

    for (let i = 8; i < 26; i++) {
      console.log(ch[i].attributes.name);
      console.log(ch[i].attributes.icon);
      console.log(ch[i].attributes.description);

      const image = document.createElement("img");
      image.src = ch[i].attributes.icon;
      const h1 = document.createElement("h1");
      h1.innerText = ch[i].attributes.name;

      const p = document.createElement("p");
      p.innerText = ch[i].attributes.description;
      const d = document.querySelector(".se-bottom");
      const div = document.createElement("div");
      div.className = "se-item";

      div.append(image);
      div.append(h1);
      div.append(p);

      d.append(div);
    }
  });

function ch() {
  var vi = document.getElementsByTagName("video")[0];
  var so = vi.getElementsByTagName("source")[0];
  so.src = "ex.mp4";
  vi.load();
  vi.play();
}

function co() {
  const l = document.querySelector("#length").value;
  const a = parseFloat(l);
  const w = document.querySelector("#weight").value;
  const b = parseFloat(w);
  let bmi = b / (a * a);

  const m = document.querySelector("#co");
  m.innerText = "BMI IS  " + bmi;
}

function con() {
  const n1 = document.querySelector("#Age").value;
  const y = parseInt(n1);
  const n2 = document.querySelector("#length1").value;
  const h = parseFloat(n2);
  const n3 = document.querySelector("#weight1").value;
  const w = parseFloat(n3);
  let bmr = 66 + 13.7 * w + 5 * h - 6.8 * y;

  const m = document.querySelector("#con");
  m.innerText = "YOUR BMR " + bmr + " Calories/Day";
}
function con1() {
  const n1 = document.querySelector("#Age").value;
  const y = parseInt(n1);
  const n2 = document.querySelector("#length1").value;
  const h = parseFloat(n2);
  const n3 = document.querySelector("#weight1").value;
  const w = parseFloat(n3);
  let bmr = 655 + 9.6 * w + 1.8 * h - 4.7 * y;

  const m = document.querySelector("#con1");
  m.innerText = "YOUR BMR " + bmr + " Calories/Day";
}
