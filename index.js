let item = document.getElementById("item");
let input = document.getElementById("id-1");
let input2 = document.getElementById("id-2");
let para = document.getElementById("para");
let save = document.getElementById("save");
let mainItems = [];
let dltBtns = [];
let count = 0;
let number = 1;
let dltBtn ="";
let num="";

function enter() {
  if (input.value !== "" && input2.value !== "") {
    let mainItem = createMainItem(input.value, input2.value);
    input.value = "";
    input2.value = "";
    save.style.display = "block";
    para.textContent = "";
    mainItems.push(mainItem);
  }
}

function createMainItem(name, quantity) {
  let mainItem = document.createElement("div");
  mainItem.setAttribute("id", "main");

  num = document.createElement("div");
  mainItem.appendChild(num);
  num.setAttribute("id", "num");
  num.textContent = number++;

  let newItem = document.createElement("div");
  mainItem.appendChild(newItem);
  newItem.setAttribute("id", "newbtn");
  count++;
  newItem.textContent = name;

  let qnty = document.createElement("div");
  mainItem.appendChild(qnty);
  qnty.textContent = quantity;
  qnty.setAttribute("id", "qnty");

  dltBtn = document.createElement("button");
  mainItem.appendChild(dltBtn);
  dltBtn.setAttribute("id", "dltbtn");
  
  let icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt"); 
  dltBtn.appendChild(icon);
  dltBtns.push(dltBtn);
  
  // Add click event listener to the dltBtn
  dltBtn.addEventListener("click", function () {
    deleteMainItem(mainItem);
  });

  num.addEventListener("click",function(){
    itemTaken(mainItem);
  });

  item.appendChild(mainItem);
  return { mainItem, dltBtn };
}

save =document.getElementById("save")
let container =document.getElementById("container")
let two =document.getElementById("two")
let buttons =document.getElementsByClassName("btns");
save.addEventListener("click",function(){
        container.style.display = "none";
        two.style.marginTop = "0px";
        save.style.display ="none";
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
          }

          for (let i = 0; i < mainItems.length; i++) {
            mainItems[i].mainItem.removeChild(mainItems[i].dltBtn);
        }     
})

let edit =document.getElementById("edit")
edit.addEventListener("click",function(){
    container.style.display ="block";
    two.style.marginTop = "135px";
    save.style.display ="block";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
      }
      for(let i=0;i<dltBtns.length;i++)
      {
        mainItems[i].mainItem.appendChild(mainItems[i].dltBtn);
      }
})

let dlt =document.getElementById("dlt")
dlt.addEventListener("click",function(){
    alert("The List will be delteted completely.")
    for(let i=0;i<mainItems.length;i++)
    {
      item.removeChild(mainItems[i].mainItem);
    }
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
     }
      mainItems = [];
      dltBtns = [];
      container.style.display ="block";
      two.style.marginTop = "135px";
      para.textContent = "No Items Selected";
      count =0;
      number =1;
})


function deleteMainItem(mainItem) {
  // Find the index of the mainItem in the mainItems array
  let index = mainItems.findIndex(item => item.mainItem === mainItem);

  if (index !== -1) {
    // Remove the mainItem and its dltBtn from the DOM
    mainItem.remove();

    // Remove the corresponding mainItem from the array
    mainItems.splice(index, 1);
    count--;
    number--;
    if(count===0)
    {
        para.textContent ="No Items Selected";
        save.style.display ="none";
    }
    else{
        for(let i=index; i<mainItems.length;i++)
        {
            mainItems[i].mainItem.querySelector("#num").textContent = i + 1;
        }
    }
  }
}

function itemTaken(mainItem){
  let index = mainItems.findIndex(item => item.mainItem === mainItem);
  mainItems[index].mainItem.querySelector("#num").textContent = "@";
}







