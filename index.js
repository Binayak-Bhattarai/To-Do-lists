
function showtask() {
    const x = document.querySelector('.add-task')
    x.style.display = "flex"
    const box = document.querySelector(".box");
    box.style.display = "none";
    const a = document.querySelector("#last");
    a.style.display = "none";
}

function hidetask() {
    const x = document.querySelector('.add-task')
    x.style.display = "none";
    takeinput();
}

function takeinput() {

    const y = parseInt(document.getElementById('num').value);
    const z = document.getElementById('event').value;
    if (isNaN(y)) {
        alert("Enternumber of tasks properly!");
        return;
    }
    const box = document.querySelector(".box");
    if (!box) {
        console.error("Element with class 'box' not found.");
        return;
    }
    box.style.display = "flex";
    box.innerHTML = ''

    for (let i = 0; i < y; i++) {
        const p = document.createElement('input');
        p.type = "text";
        p.id = "tasks"
        box.appendChild(p);
        p.placeholder = `Task${i + 1}`

    }


    const h = document.createElement('h3');
    h.style.fontSize = '15px';
    h.style.color = 'black';
    h.textContent = 'Enter Deadline';
    box.appendChild(h);



    const q = document.createElement('input');
    q.type = "date";
    q.id = "date"
    box.appendChild(q);


    const btn = document.createElement('button');
    btn.id = "save"
    btn.textContent = "Save"
    box.appendChild(btn);
    document.querySelector('#save').addEventListener('click', lasthide);


}

function lasthide() {

   
    const t= document.getElementById('tasks').value;
    const a = document.querySelector("#last");
    a.style.display = "flex";
    const box = document.querySelector(".box");
    box.style.display = "none";
    const y = parseInt(document.getElementById('num').value);
    const z = document.getElementById('event').value;
    const d = document.getElementById('date').value;

   

    if (d.trim() === "" || t.trim() === "" ) {
        alert("Enter all tasks and deadline properly!");

        const re = document.createElement('button');
        re.id = "delete"
        re.textContent = "Delete All "
        a.appendChild(re);
        
        return;
    }

   

    const result = document.createElement('div');
    result.id = "result"
    a.appendChild(result)
    result.innerHTML = `${z} - ${y} Tasks <br> Deadline: ${d}`;

    const dustbin = document.createElement('i');
    dustbin.className = 'ri-delete-bin-6-line';

    result.appendChild(dustbin)



    let deleteAllBtn = document.getElementById("delete");
    if (!deleteAllBtn) {
  const re = document.createElement('button');
        re.id = "delete"
        re.textContent = "Delete All Events"
        a.appendChild(re);

        re.addEventListener('click', function () {
            a.style.display = "none";
        });
    }

    dustbin.addEventListener('click', function () {
        result.remove();
    });

}
 

