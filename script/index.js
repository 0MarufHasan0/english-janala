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
       <button  class="btn btn-primary btn-outline" >
        <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
        </button>
    
    
    `
  



levelContainer.append(divBtn)



    
});

// 4 .append child 



}
loadLessons ()