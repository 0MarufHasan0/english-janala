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

// active remove
const removeActive=()=>{
    const lessonButton= document.querySelectorAll(".lesson-btn")
    lessonButton.forEach(btn=>{
        btn.classList.remove("active")
    })

}

// word meaning 
loadLevelWord=(id)=>{
     manageSpiner(true)
   
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

// modal  .then then er bodole async use
const loadWordDetail = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    // console.log(id);
    const res = await fetch (url);
    const details = await res.json();
    // console.log(details)
    displayWordDetail(details.data)
}

const displayWordDetail=(word)=>{
console.log(word)

const detailsContainer=document.getElementById("details-container")
detailsContainer.innerHTML=`



    <div class="">
      <h2 class="text-2xl font-bold">${word.word} (  <i class="fa-solid fa-microphone-lines"></i>   :${word.pronunciation})</h2>
    </div>
    <div class="">
      <h2 class="font-bold">Meaning</h2>
      <p>${word.meaning}</p>
    </div>
    <div class="">
      <h2 class="font-bold">Example</h2>
      <p>${word.sentence}</p>
      </div>
    <div class="">
      <h2 class="font-bold">synonym</h2>
     <div  class="">
     ${createElemts(word.synonyms)}

     </div>
    </div>

   

   `





document.getElementById("word_modal").showModal()



}


// word 

const displayLevelWord = (words) =>{
// console.log(words)
const wordContainer = document.getElementById('word-container')
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
     manageSpiner(false)
return


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

            <button onClick="loadWordDetail(${word.id})" class="btn bg-primary-content hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-primary-content hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
        

           </div>

        </div>
    
    
    `

    wordContainer.append(wordCard)


})
 manageSpiner(false);
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

// synonym
const createElemts= (arr)=> {
    const htmlElements = arr.map(el  => `<span class="btn">${el} </span> `)
    return htmlElements.join(' ')
}


// manage spiner

const manageSpiner=(status)=>{
    if(status==true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('word-container').classList.add('hidden')
    }else{

          document.getElementById('word-container').classList.remove('hidden')
        document.getElementById('spinner').classList.add('hidden')
        
    }
}

loadLessons ()