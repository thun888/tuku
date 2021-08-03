let res
  function shorturl() {
    if(document.querySelector("#text").value==""){
        alert("url不能为空！")
        return
    }
  document.getElementById("searchbtn").disabled=true;
	document.getElementById("searchbtn").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>稍等';

//不要问我为什么这样写，我也不懂
//No why,I don't know.
  if(document.querySelector("#dir").value!==""){
  fetch(window.location.pathname, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: document.querySelector("#text").value,dir: document.querySelector("#dir").value,cust: "1" })
  }).then(function(response) {return response.json();})

  .then(function(myJson) {
    res = myJson;
    document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='短！';
    if(res.key!=="")
    document.getElementById("result").innerHTML=window.location.host+res.key;
    $('#exampleModal').modal('show')
  }).catch(function(err){alert("未知错误，再试一遍");
  console.log(err);
  if(res.key=="/undefined")
  document.getElementById("result").innerHTML="已存在相同的自定义链接";
    $('#exampleModal').modal('show')
  }).catch(function(err){alert("已存在相同的自定义链接");
  console.log(err);
  document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='短！';})
  }
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
        console.log('复制成功')
    } catch (e) {
        console.log('复制失败')
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
  }
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

if(document.querySelector("#dir").value=="")

  fetch(window.location.pathname, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: document.querySelector("#text").value })
  }).then(function(response) {return response.json();})


  .then(function(myJson) {
    res = myJson;
    document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='短！';
    if(res.key!=="")
    document.getElementById("result").innerHTML=window.location.host+res.key;
    $('#exampleModal').modal('show')
  }).catch(function(err){alert("未知错误，再试一遍");
  console.log(err);
  if(res.key=="/undefined")
  document.getElementById("result").innerHTML="已存在相同的自定义链接";
    $('#exampleModal').modal('show')
  }).catch(function(err){alert("已存在相同的自定义链接");
  console.log(err);
  document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='短！';})
  }
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
        console.log('复制成功')
    } catch (e) {
        console.log('复制失败')
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
  }
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
