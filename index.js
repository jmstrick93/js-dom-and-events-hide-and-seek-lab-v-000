function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedList.length; i++){
      let rank = parseInt(rankedList[i].innerHTML)
      rank = rank + n
      rankedList[i].innerHTML = rank.toString()
  }
  // return rankedList
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
