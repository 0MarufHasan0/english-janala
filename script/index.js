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


const removeActive=()=>{
    const lessonButton= document.querySelectorAll(".lesson-btn")
    lessonButton.forEach(btn=>{
        btn.classList.remove("active")
    })

}

loadLevelWord=(id)=>{
   
    const  url = `https://openapi.programming-hero.com/api/level/${id}`

    // console.log(url) ;
    fetch(url)
    .then(res => res.json())
    .then (data => {
        // console.log(data.data)
        // remove all active +
        removeActive() 
        // btn click korle onno color
const clickBtn= document.getElementById(`lesson-btn-${id}`)
// console.log(activeBtn);
clickBtn.classList.add("active")

displayLevelWord(data.data)

    })
}

const displayLevelWord = (words) =>{
// console.log(words)
const wordContainer = document.getElementById('word-container ')
wordContainer.innerHTML=''



// 0 word lesson er 
if(words.length==0){
    // alert('select another lesson')

    wordContainer.innerHTML=`
    
    
      <div class="text-center font-bangla rounded-xl py-10 col-span-full space-y-6">

      <img src="./assets/alert-error.png" alt="" class= "mx-auto">

    
        <p class="text-xl font-medium text-gray-400">
         এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। 
        </p>
        <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>
    
    `



}
words.forEach(word =>{
    

    // console.log(word)

    const wordCard= document.createElement('div')
    wordCard.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 ">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায় নি "}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
           <div class="font-bangla text-2xl font-medium">${word.meaning ? word.meaning : " শব্দ অর্থ পাওয়া যায় নি "} / ${word.pronunciation ? word.pronunciation : "পাওয়া যায় নি"  }"</div>

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
       <button id ="lesson-btn-${lesson.level_no}" onClick ="loadLevelWord(${lesson.level_no})"  class="btn lesson-btn  btn-primary btn-outline" >
        <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
        </button>
    
    
    `
  



levelContainer.append(divBtn)



    
});

// 4 .append child 



}
loadLessons ()