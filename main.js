console.log("Hello Developers");
var rs1=0;
var rs2=0;
var rs3=0;
var ps1=0;
var ps2=0;
var ps3=0;
var ms1=0;
var ms2=0;
var ms3=0;
var ws1=0;
var ws2=0;
var ws3=0;
var ss1=0;
var ss2=0;
var ss3=0;
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

function R1() {
    if(rs1==0){
        document.getElementById("R-1").play();
        document.getElementById("Rr1").style.display="inline";
        document.getElementById("R-1").loop= true;
        rs1++;
    }
    else{
        rs1=0;
        document.getElementById("R-1").pause();
        document.getElementById("Rr1").style.display="none";
    }
}
function R2() {
    if(rs2==0){
        document.getElementById("R-2").play();
        document.getElementById("Rr2").style.display="inline";
        document.getElementById("R-2").loop= true;
        rs2++;
    }
    else{
        rs2=0;
        document.getElementById("R-2").pause();
        document.getElementById("Rr2").style.display="none";
    }
}
function R3() {
    if(rs3==0){
        document.getElementById("R-3").play();
        document.getElementById("Rr3").style.display="inline";
        document.getElementById("R-3").loop= true;
        rs3++;
    }
    else{
        rs3=0;
        document.getElementById("R-3").pause();
        document.getElementById("Rr3").style.display="none";
    }
}
function P1() {
    if(ps1==0){
        document.getElementById("P-1").play();
        document.getElementById("Pp1").style.display="inline";
        document.getElementById("P-1").loop= true;
        ps1++;
    }
    else{
        ps1=0;
        document.getElementById("P-1").pause();
        document.getElementById("Pp1").style.display="none";
    }
}
function P2() {
    if(ps2==0){
        document.getElementById("P-2").play();
        document.getElementById("Pp2").style.display="inline";
        document.getElementById("P-2").loop= true;
        ps2++;
    }
    else{
        ps2=0;
        document.getElementById("P-2").pause();
        document.getElementById("Pp2").style.display="none";
    }
}
function P3() {
    if(ps3==0){
        document.getElementById("P-3").play();
        document.getElementById("Pp3").style.display="inline";
        document.getElementById("P-3").loop= true;
        ps3++;
    }
    else{
        ps3=0;
        document.getElementById("P-3").pause();
        document.getElementById("Pp3").style.display="none";
    }
}
function M1() {
    if(ms1==0){
        document.getElementById("M-1").play();
        document.getElementById("Mm1").style.display="inline";
        document.getElementById("M-1").loop= true;
        ms1++;
    }
    else{
        ms1=0;
        document.getElementById("M-1").pause();

        document.getElementById("Mm1").style.display="none";
    }
}
function M2() {
    if(ms2==0){
        document.getElementById("M-2").play();
        document.getElementById("Mm2").style.display="inline";
        document.getElementById("M-2").loop= true;
        ms2++;
    }
    else{
        ms2=0;
        document.getElementById("M-2").pause();
        document.getElementById("Mm2").style.display="none";
    }
}
function M3() {
    if(ms3==0){
        document.getElementById("M-3").play();
        document.getElementById("Mm3").style.display="inline";
        document.getElementById("M-3").loop= true;
        ms3++;
    }
    else{
        ms3=0;
        document.getElementById("M-3").pause();
        document.getElementById("Mm3").style.display="none";
    }
}
function W1() {
    if(ws1==0){
        document.getElementById("W-1").play();
        document.getElementById("Ww1").style.display="inline";
        document.getElementById("W-1").loop= true;
        ws1++;
    }
    else{
        ws1=0;
        document.getElementById("W-1").pause();
        document.getElementById("Ww1").style.display="none";
    }
}
function W2() {
    if(ws2==0){
        document.getElementById("W-2").play();
        document.getElementById("Ww2").style.display="inline";
        document.getElementById("W-2").loop= true;
        ws2++;
    }
    else{
        ws2=0;
        document.getElementById("W-2").pause();
        document.getElementById("Ww2").style.display="none";
    }
}
function W3() {
    if(ws3==0){
        document.getElementById("W-3").play();
        document.getElementById("Ww3").style.display="inline";
        document.getElementById("W-3").loop= true;
        ws3++;
    }
    else{
        ws3=0;
        document.getElementById("W-3").pause();
        document.getElementById("Ww3").style.display="none";
    }
}
function S1() {
    if(ss1==0){
        document.getElementById("S-1").play();
        document.getElementById("Ss1").style.display="inline";
        document.getElementById("S-1").loop= true;
        ss1++;
    }
    else{
        ss1=0;
        document.getElementById("S-1").pause();
        document.getElementById("Ss1").style.display="none";
    }
}
function S2() {
    if(ss2==0){
        document.getElementById("S-2").play();
        document.getElementById("Ss2").style.display="inline";
        document.getElementById("S-2").loop= true;
        ss2++;
    }
    else{
        ss2=0;
        document.getElementById("S-2").pause();
        document.getElementById("Ss2").style.display="none";
    }
}
function S3() {
    if(ss3==0){
        document.getElementById("S-3").play();
        document.getElementById("Ss3").style.display="inline";
        document.getElementById("S-3").loop= true;
        ss3++;
    }
    else{
        ss3=0;
        document.getElementById("S-3").pause();
        document.getElementById("Ss3").style.display="none";
    }
}