const profileData = {
  name: 'Isaiah John P. Borja',
  role: 'BSIT',
  age: '20',
  address: 'Purok #1 Comawas, Bislig City Surigao Del Sur',
  courseYear: 'BSIT',
  motto: 'Konting bato konting semento. Monyumento!',
  biography: 'I am a kid who wants to keep pushing forward for the modern technological world.',
  careerGoals: 'To become a skilled IT professional who continues to grow in software development, networking, and innovation while creating solutions that make a positive impact.',
  education: {
    elementary: 'Commonwealth Adventist Elementary School',
    highSchool: 'Siloam Christian Academy',
    seniorHigh: 'Datamex College of Saint Adeline',
    college: 'De La Salle John Bosco College'
  },
  technicalSkills: 'IT Infrastructure, Hardware & Networking',
  programmingLanguages: 'HTML, JS, CSS',
  softwareApplications: 'VSCode, Netbeans',
  softSkills: 'Teamwork & Collaboration',
  project: {
    title: 'Discrete Math Quiz',
    description: 'This project is a web-based game that combines a discrete math quiz with an action-oriented shooting mechanic, creating an immersive and educational experience. Players progress through quiz challenges while engaging with a shooting-style interface that keeps the activity dynamic and entertaining.',
    languages: 'HTML, JS, CSS',
    status: 'Done'
  },
  certificates: {
    trainings: 'Work Immersion, 30 days',
    seminars: 'Commonwealth Adventist Elementary School, Datamex College of Saint Adeline',
    earned: '1',
    awards: '1'
  },
  gallery: {
    personalPhotos: '0',
    schoolActivities: '8',
    organizationalActivities: '6',
    communityInvolvement: '1'
  },
  contact: {
    email: 'tibuciodimagiba@gmail.com',
    mobile: '09951221196',
    facebook: 'Isaiah Borja'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('student-name').textContent = profileData.name;
  document.querySelector('.student-role').textContent = profileData.role;
  document.getElementById('age').textContent = profileData.age;
  document.getElementById('address').textContent = profileData.address;
  document.getElementById('course-year').textContent = profileData.courseYear;
  document.getElementById('motto').textContent = profileData.motto;
  document.getElementById('soft-skills').textContent = profileData.softSkills;
  document.getElementById('about-text').textContent = profileData.biography;
  document.getElementById('career-goals').textContent = profileData.careerGoals;
  document.getElementById('elementary').textContent = profileData.education.elementary;
  document.getElementById('high-school').textContent = profileData.education.highSchool;
  document.getElementById('senior-high').textContent = profileData.education.seniorHigh;
  document.getElementById('college').textContent = profileData.education.college;
  document.getElementById('technical-skills').textContent = profileData.technicalSkills;
  document.getElementById('programming-languages').textContent = profileData.programmingLanguages;
  document.getElementById('software-applications').textContent = profileData.softwareApplications;
  document.getElementById('project-title').textContent = profileData.project.title;
  document.getElementById('project-description').textContent = profileData.project.description;
  document.getElementById('project-languages').textContent = profileData.project.languages;
  document.getElementById('project-status').textContent = profileData.project.status;
  document.getElementById('trainings').textContent = profileData.certificates.trainings;
  document.getElementById('seminars').textContent = profileData.certificates.seminars;
  document.getElementById('certificates-earned').textContent = profileData.certificates.earned;
  document.getElementById('awards').textContent = profileData.certificates.awards;
  document.getElementById('personal-photos').textContent = profileData.gallery.personalPhotos;
  document.getElementById('school-activities').textContent = profileData.gallery.schoolActivities;
  document.getElementById('organizational-activities').textContent = profileData.gallery.organizationalActivities;
  document.getElementById('community-involvement').textContent = profileData.gallery.communityInvolvement;
  document.getElementById('email').textContent = profileData.contact.email;
  document.getElementById('mobile').textContent = profileData.contact.mobile;
  document.getElementById('facebook').textContent = profileData.contact.facebook;
});
