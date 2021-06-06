
function getPublicKey() {
    let pA = document.getElementById('txtPrime').value;
    let alpha = document.getElementById('txtAlphaNumber').value;
    let dA = document.getElementById('txtPrivateKey').value;
    let beta = t(alpha,dA,pA);
    
    document.getElementById("displayData").innerHTML = `pA=${pA},Alpha=${alpha},Beta=${beta}`
}
function decryption() {

    let pA = document.getElementById('txtPrime').value;
    let alpha = document.getElementById('txtAlphaNumber').value;
    let dA = document.getElementById('txtPrivateKey').value;
    let beta = t(alpha,dA,pA);
   let k = document.getElementById('txtEncryptPrivate').value;
   let m = document.getElementById('txtMessage').value;
   console.log(`Khoá công khai (pA,alpha,beta) là (${pA},${alpha},${beta})`);
   

    let y1 = t(alpha,k,pA);
    let p = (m%pA);
    let q = t(beta,k,pA);
    let y2 = (p*q)% pA

    let z = y2%pA;
    let x = t(y1,(pA -1-dA),pA);
    let kq = (z*x) % pA
    console.log(`Kết quả sau khi giải mã là ${kq}`);
    document.getElementById("extrainfo").innerHTML = `Bob message is ${kq}`

}


function encryption() {
    let pA = document.getElementById('txtPrime').value;
    let alpha = document.getElementById('txtAlphaNumber').value;
    let dA = document.getElementById('txtPrivateKey').value;
    let beta = t(alpha,dA,pA);
   let k = document.getElementById('txtEncryptPrivate').value;
   let m = document.getElementById('txtMessage').value;
//    let y1 = Math.pow(alpha, k) % pA;
    let y1 = t(alpha,k,pA);
    let p = (m%pA);
    let q = t(beta,k,pA);
    let y2 = (p*q)% pA
    document.getElementById('displayData2').innerHTML = `(y1,y2)=(${y1},${y2})`
    document.getElementById('messageDisplay').innerHTML = `<div>You received a message from Bob. <button class="btn btn-primary btn-sm" onclick="decryption()" type="button">Decrypt</button></div>
    <div class="data" style="font-weight: bold;margin-top:10px;"></div>`
   console.log(`Bản mã sau khi đc mã hoá là (y1,y2)=(${y1},${y2})`);
  
   
}

let t = function timDu(a,x,n) {
  for (let i = 0; i < x; i++) {
      let d = 1;
    while (x!=0) {
        if (x%2!=0) {
            d = (d*(a%n))%n
        }
        x= parseInt(x/2)
        a = (a*a) %n
        
    }
    return d;
  }
    
}
console.log(t(15,35,79));
console.log(t(2,3,3));
console.log(t(435,1813,2579));
console.log(t(949,853,2579));




