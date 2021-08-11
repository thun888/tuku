let res
  function gettxt() {
    if(document.querySelector("#text").value==""){
        alert("?") 
        return
    }
  document.getElementById("searchbtn").disabled=true;
	document.getElementById("searchbtn").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>稍等';
  let more = document.querySelector("#text").value
  let url = "https://txtshare.thun888.xyz/"
  let path = url.concat(more); 
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', path, true);
  httpRequest.send();
  httpRequest.onreadystatechange = function () {
  if (httpRequest.status == 200) {
        var back = httpRequest.responseText;
        console.log(back);
        console.log(httpRequest.status);
    document.getElementById("result").innerHTML=""+back;
    $('#exampleModal').modal('show')
}else if (httpRequest.status == 404) {
  alert("没有对应文本");
  document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML=' 接收文本'
}
}}
  function copyurl (id, attr) {
    let target = null;

    if (attr) {
        target = document.createElement('div');
        target.id = 'tempTarget';
        target.style.opacity = '0';
        if (id) {
            let curNode = document.querySelector('#' + id);
            target.innerText = curNode[attr];
        } else {
            target.innerText = attr;
        }
        document.body.appendChild(target);
    } else {
        target = document.querySelector('#' + id);
    }

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Copy success')
    } catch (e) {
        console.log('Copy error')
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
  }
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
function jump(url) {
  window.open("https://txtshare.thun888.xyz/get/")
}