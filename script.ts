//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function (event) {
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ){

        const name = nameElement.value
        const email = emailElement.value
        const phone = phoneElement.value
        const education = educationElement.value 
        const experience =experienceElement.value
        const skills = skillsElement. value


//create resume output
const resumeoutput = `
<h2>Resume</h2>
<p>strong>Name:</strong><span id="edit-name"class="ediable"> ${name} </span></p>
<p>strong>email:</strong><span id="edit-name"class="ediable"> ${email}</span></p>
<p>strong>phone:</strong><span id="edit-name"class="ediable"> ${phone}</span></p>


<h3>Education</h3>
<pid="edit-name"class="ediable">${education}</P>

<h3>experience</h3>
<pid="edit-name"class="ediable">${experience}</P>

<h3>skills</h3>
<pid="edit-name"class="ediable">${skills}</P>
`;


//Display the resume  output
const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeoutput;
    makeEditable();
    }
}else{
    console.error('one or more form elements asmissing.')
}
  })

    
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements .forEach(element =>{
        element.addEventListener('click',function(){
            const currentElement = element as HTMLElement;
            const currentvalue = currentElement.textContent || "" ;


            //replace content
            if (currentElement.tagName ==="p" || currentElement.tagName ==='SPAN'){
                const input = document.createElement('input')
                input .type = 'txte'
                input . value = currentvalue
                input . classList.add('editing input')

                input.addEventListener('blur',function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                }
            )


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
    


            }

 



        })
    
 

    })

    


}
                
            

            
            
        
            

        
        

        
        
    