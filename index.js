function homepage(){document.getElementsByTagName('body')[0].innerHTML='<main class="form-signin w-100 m-auto"> <form><h1 class="h3 mb-3 fw-normal">certificate calculations</h1><div class="form-floating"><input type="number" class="form-control initialMoney" placeholder="name@example.com"><label>initial money</label></div><div class="form-floating"><input type="number" class="form-control profitPercentage" placeholder="Password"><label >profit percentage</label>  </div><div class="form-floating"><input type="number" class="form-control duration" placeholder="name@example.com"><label >time of investment in years</label></div></form><div class="buttons"><button class="w-100 btn btn-lg btn-primary calculate" >calculate</button></div><div ><p class="result"></p></div>  </main><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script><script src="index.js" charset="utf-8"></script> ' ; calculate()}
function calculateProfitPerYear(money,percentage){
  return percentage*money
};
array=[]
homepage()

function calculate(){
  document.getElementsByClassName('calculate')[0].addEventListener("click" , calculator)
}

calculate()
// initialMoney = document.getElementsByClassName('initialMoney')[0].value;
// profitPercentage = document.getElementsByClassName('profitPercentage')[0].value;
// duration = document.getElementsByClassName('duration')[0].value;
// console.log(initialMoney , profitPercentage , duration);
function  calculator(){
  var initialMoney = Number(document.getElementsByClassName('initialMoney')[0].value);
  var profitPercentage = Number(document.getElementsByClassName('profitPercentage')[0].value);  profitPercentage /=100;
  var duration = Number(document.getElementsByClassName('duration')[0].value);
  var profit=calculateProfitPerYear(initialMoney,  profitPercentage);
  var totalProfit=duration*profit;
  var moneyReturned=initialMoney+totalProfit;
  var monthlyProfit=totalProfit/(12*duration);
  document.getElementsByClassName('result')[0].textContent='TOTAL money after investment : '+moneyReturned+' profit per month : '+monthlyProfit;
  document.getElementsByClassName('calculate')[0].innerText='COMPARE';
  document.getElementsByClassName('buttons')[0].innerHTML='<button class="w-100 btn btn-lg btn-primary calculate" >calculate</button>         <button class="w-100 btn btn-lg btn-primary save" >Save</button>         <button class="w-100 btn btn-lg btn-primary createTable" >create table</button>'
  data=[initialMoney , profitPercentage , duration , monthlyProfit , moneyReturned ]
  calculate()
  saveApply(array)


  document.getElementsByClassName(' createTable')[0].addEventListener("click",function(){tableCreator(array)})


}


function save(array){
    var initialMoney = Number(document.getElementsByClassName('initialMoney')[0].value);
    var profitPercentage = Number(document.getElementsByClassName('profitPercentage')[0].value);  profitPercentage /=100;
    var duration = Number(document.getElementsByClassName('duration')[0].value);
    var profit=calculateProfitPerYear(initialMoney,  profitPercentage);
    var totalProfit=duration*profit;
    var moneyReturned=initialMoney+totalProfit;
    var monthlyProfit=totalProfit/(12*duration);
    data=[initialMoney , 100*profitPercentage , duration , monthlyProfit , moneyReturned ]
    array.push(data);
    console.log(array);
    return array
}
function saveApply(array){
  document.getElementsByClassName('save')[0].addEventListener("click",function(){
    array=save(array)
  })
}
function clear(){array=[]; tableCreator(array);return array;}
function tableCreator(array){
  table='<table   class="table table-dark table-striped"><thead><th>initial money</th><th>Profit %</th><th>duration</th><th>Profit / Month</th><th>Total money returned</th></thead>'
  for(var row=0 ; row<array.length ; row++){
    table=table+'<tr class="table-dark">'
    for (var col=0 ; col<array[row].length ; col++ ){
      table=table+'<td>'+array[row][col]+'</td>'
    }
    table=table+'</tr>'
  }
  table=table+' <tfoot><td "table-dark"><button class=" btn btn-lg btn-secondary homepage" >home page</button></td><td></td><td></td><td></td><td><button class="btn btn-lg btn-secondary btn-danger clear" >clear</button></td></tfoot></table>  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script><script src="index.js" charset="utf-8"></script>'
  document.getElementsByTagName('body')[0].innerHTML=table
  document.getElementsByClassName('homepage')[0].addEventListener("click",homepage)
  document.getElementsByClassName('clear')[0].addEventListener("click",function(){array=clear();})

}
