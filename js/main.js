document.querySelector('#newHeadline').addEventListener('click', changeHeadline)

function changeHeadline(){
    let newHeadline = document.querySelector('input').value

    document.querySelector('#headline').innerText = newHeadline

}

