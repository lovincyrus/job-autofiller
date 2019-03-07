console.log("chrome extension job-autofiller is ready! 🍻")
// console.log(window.location.toString())

if (window.location.toString().includes("greenhouse")) {
  document.getElementById('first_name').value = 'Cyrus';
  document.getElementById('last_name').value = 'Goh';
  document.getElementById('email').value = 'lgoh@ucdavis.edu';
  document.getElementById('phone').value = '6509655034';
  document.getElementById('job_application[location]').value = 'Davis, California, United States';
  document.getElementById('job_application_answers_attributes_0_text_value').value = 'https://www.linkedin.com/in/cyrusgoh/';
  document.getElementById('job_application_answers_attributes_1_text_value').value = 'https://www.lovincyrus.com';
} else if (window.location.toString().includes("lever")) {
  const info = {
    name: 'Cyrus Goh',
    email: 'lgoh@ucdavis.edu',
    phone: '6509655034',
    company: '8x Protocol',
    linkedin: 'https://www.linkedin.com/in/cyrusgoh/',
    github: 'https://github.com/lovincyrus',
    twitter: 'https://twitter.com/cyrsgh',
    portfolio: 'https://lovincyrus.com',
    other: 'https://blog.lovincyrus.com'
  }
  
  const matchUpInfo = (key) => {
    if (key.includes('name'))       return info.name
    if (key.includes('email'))      return info.email
    if (key.includes('phone'))      return info.phone
    if (key.includes('company'))    return info.company
    if (key.includes('linkedin'))   return info.linkedin
    if (key.includes('github'))     return info.github
    if (key.includes('twitter'))    return info.twitter
    if (key.includes('portfolio'))  return info.portfolio
    if (key.includes('other'))      return info.other
    return ''
  }
  
  function fillInInfo() {
    const questions = Array.from(document.querySelectorAll('.application-question'))
    questions.forEach(item => {
      const key = item.querySelector('.application-label').textContent.toLowerCase()
      const value = matchUpInfo(key)
      const field = item.querySelector('.application-field input')
      if (field) {
        field.value = value
        field.text = value
      }
    })
  }
  
  fillInInfo()
} else {
  console.log("Only supported lever and greenhouse job applications")
}