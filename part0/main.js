'use strict';

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'notes');

    data.forEach(note => {
      let li = document.createElement('li');

      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content));
    });

    document.getElementById('notes').appendChild(ul);
  }
}

xhttp.open('GET', '/data.json', true);
xhttp.send();
