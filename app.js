const name = 'avocad5' //여기에 자기 엔트리아이디를 입력하세요
const userid = '5d773c885b1f435931998d8e' //여기에 자기 유저아이디를 입력
const gitname = 'avocad5' //여기에 자기 깃허브아이디를 입력하세요
const nickname = '아보카도' //여기에 자기 별명을 입력하세요
const myment = '더 참신하게, 더 재미있게, 더 멋지게' //여기에 상태메시지를 
const mywork = '알까기의왕' //여기에 자신의 대표작품을 입력하세요
const career = '2년' //여기에 자신의 경력을 입력하세요
const explanation = '코딩과 수학을 좋아하는 평법한 중1' //여기에 자기소개를 입력하세요
const maincolor = '#87FFB7' //여기에 메인컬러를 입력하세요
const subcolor = '#BFFFC3' //여기에 서브컬러를 
const projectname = ['3d ball run','알까기의왕','엔플러스엔진']; //여기에 자기 엔트리작품 이름을 입력하세요
const projectment = ['렉 안걸리는 3d!','인공지능과 함께 알까기를 즐겨보세요!','야, 너두 3d만들수있어'] //여기에 자기 엔트리작품 소개를 입력하세요
const projectid = ['5e3f6015960df10024ab07a7','5e00a9134a413900566992bb','5e95ba64614b6000ec78f37f'] //여기에 자기 엔트리작품 id를 입력하세요






for(var i = 0; i<projectname.length; i++){ //버튼 생성
  document.getElementsByClassName('project')[0].innerHTML += `<a href="https://playentry.org/${name}/${projectid[i]}"><img src="https://playentry.org/uploads/thumb/${projectid[i].substring(0,4)}/${projectid[i]}.png"><div><p class="pname"><strong>${projectname[i]}</strong></p><p class="pment">${projectment[i]}</p></div></a>`
}
var avatar = `https://playentry.org/uploads/profile/${userid.substring(0,2)}/${userid.substring(2,4)}/avatar_${userid}.png`
document.title = `${nickname}의 공식사이트`
document.querySelector("body > div.name").innerHTML = name
document.querySelector("body > div.ment").innerHTML = myment
document.querySelector("body > div.container > svg > path").style.fill = maincolor
document.querySelector("body > div.profile > a").href = `https://playentry.org/${name}`
document.querySelector("body > div.profile > a").innerHTML = `<img src="${avatar}">`
document.querySelector("body > div.profile > div").innerHTML = `<p>이름 : ${name}</p><p>별명 : ${nickname}</p><p>대표작 : ${mywork}</p><p>경력 : ${career}</p><p>소개 : ${explanation}</p>`
document.querySelector("body > div.footer").innerHTML = `<a href="https://github.com/${gitname}"><span>Github</span></a><a href="https://playentry.org/${name}#!/"><span>Entry</span></a>`
