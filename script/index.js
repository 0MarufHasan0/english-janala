// console.log('I am js')

const loadLessons = () => {

    const url = 'https://openapi.programming-hero.com/api/levels/all'
    fetch(url)
    // response promise of json data
    .then (res => res.json())
    // data
    .then(json => {
        // console.log(json.data)

        displayLesson(json.data)
    })
}

loadLevelWord=(id)=>{
   
    const  url = `https://openapi.programming-hero.com/api/level/${id}`

    // console.log(url) ;
    fetch(url)
    .then(res => res.json())
    .then (data => {
        // console.log(data.data)
        displayLevelWord(data.data)
    })
}

const displayLevelWord = (words) =>{
// console.log(words)
const wordContainer = document.getElementById('word-container ')
wordContainer.innerHTML=''
words.forEach(word =>{

    // console.log(word)

    const wordCard= document.createElement('div')
    wordCard.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 ">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
           <div class="font-bangla text-2xl font-medium">${word.meaning} / ${word.pronunciation}"</div>

           <div class="flex justify-between items-center">

            <button class="btn bg-primary-content hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-primary-content hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
        

           </div>

        </div>
    
    
    `

    wordContainer.append(wordCard)


})
}

 
// data rcv korbe ey function a
const displayLesson = (lessons) =>{

// console.log(lessons)

// 1.step one Get the container and empty it

const levelContainer =    document.getElementById('level-container')
levelContainer.innerHTML = '' ;

// 2. Get into every lessons
lessons.forEach(lesson => {

    // console.log(lesson);
    // 3. Create element button
    const divBtn = document.createElement('div')
    divBtn.innerHTML  =`
       <button onClick ="loadLevelWord(${lesson.level_no})"  class="btn btn-primary btn-outline" >
        <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
        </button>
    
    
    `
  



levelContainer.append(divBtn)



    
});

// 4 .append child 



}
loadLessons ()