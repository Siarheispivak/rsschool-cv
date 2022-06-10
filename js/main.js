const workExperience = document.querySelector('.work__experience');
if (workExperience) {
  const jobs = document.querySelector('.jobs');
  workExperience.addEventListener('click', function (e) {
    workExperience.classList.toggle('active');
    jobs.classList.toggle('active');
  });
}