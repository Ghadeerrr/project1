function chang() {
  fetch("https://sports.api.decathlon.com/sports")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json.data);
      const ch = json.data;

      const d = document.querySelector(".d");
      d.innerHTML = "";
      for (let i = 0; i < 20; i++) {
        console.log(ch[i].attributes.name);
        console.log(ch[i].attributes.icon);
        console.log(ch[i].attributes.description);

        const image = document.createElement("img");
        image.src = ch[i].attributes.icon;
        const h1 = document.createElement("h1");
        h1.innerText = ch[i].attributes.name;

        const p = document.createElement("p");
        p.innerText = ch[i].attributes.description;

        const div = document.createElement("div");
        div.append(image);
        div.append(h1);
        div.append(p);

        d.append(div);
      }
    });
}

function chang2() {
  const d = document.querySelector(".d");

  d.style.display = "none";
}

const m = document.querySelector(".btnn");
m.onclick = function () {
  var vi = document.getElementsByTagName("video")[0];
  var so = vi.getElementsByTagName("source")[0];
  so.src = "v.mp4";
  vi.load();
  vi.play();
};
const n = document.querySelector(".btn3");
n.onclick = function () {
  var vi = document.getElementsByTagName("video")[0];
  var so = vi.getElementsByTagName("source")[0];
  so.src = "v1.mp4";
  vi.load();
  vi.play();
};
const h = document.querySelector(".btn2");
h.onclick = function () {
  var vi = document.getElementsByTagName("video")[0];
  var so = vi.getElementsByTagName("source")[0];
  so.src = "v2.mp4";
  vi.load();
  vi.play();
};
const j = document.querySelector(".btn4");
j.onclick = function () {
  var vi = document.getElementsByTagName("video")[0];
  var so = vi.getElementsByTagName("source")[0];
  so.src = "v3.mp4";
  vi.load();
  vi.play();
};

function con() {
  const l = document.querySelector("#length").value;
  const a = parseFloat(l);
  const w = document.querySelector("#weight").value;
  const b = parseFloat(w);
  let bmi = b / (a * a);

  const m = document.querySelector("#co");
  m.innerText = "BMI IS  " + bmi;
}
