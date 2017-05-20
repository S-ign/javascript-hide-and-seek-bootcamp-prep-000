var getFirstSelector = (selector) => {
    var first = document.querySelectorAll(selector)[0]
    return first 
}

var nestedTarget = (nested, target) => {
    var second = document.querySelector(`#nested .target`)
    return second
}

var deepestChild = () => {
    var third = document.querySelector(`#grand-node div div div div`)
    return third
}

var increaseRankBy = (n) => {
    var ranks = document.querySelectorAll('.ranked-list')

    const firstList = ranks[0]
    const secondList = ranks[1]

    let children = firstList.children
    
    for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = (parseInt(children[i].innerHTML) + n)
    }

    children = secondList.children

    for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = (parseInt(children[i].innerHTML) + n)
    }


    return children
}
