import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationData = [
    {
      year: '4th Year',
      institutions: [
        {
          name: 'Institute of Technology Tallaght',
          degree: 'Bachelor of Science (Honours) in Computing',
          gpa: '3.15',
          semesters: [
            {
              name: 'Semester 8',
              subjects: [
                { name: 'Algorithm & Computation', grade: 'C+' },
                { name: 'Game Design & Development', grade: 'B+' },
                { name: 'Enterprise Performance Architecture 2', grade: 'B' },
                { name: 'Computational Theory', grade: 'B' },
                { name: '4th Year Final Project (Backed by IBM)', grade: 'A' }
              ]
            },
            {
              name: 'Semester 7',
              subjects: [
                { name: 'Applied Machine Learning', grade: 'B' },
                { name: 'Enterprise Applications Development 1', grade: 'C+' },
                { name: 'Interactive Media Design & Visualisation', grade: 'B' },
                { name: 'Enterprise Performance Architecture', grade: 'C+' },
                { name: 'Information Management', grade: 'TBC' },
                { name: '4th Year Final Project (Backed by IBM)', grade: 'A' }
              ]
            }
       
          ]
        }
      ]
    },
    {
      year: '3rd Year',
      institutions: [
        {
          name: 'Institute of Technology Tallaght',
          degree: 'Bachelor of Science (Honours) in Computing',
          gpa: '3.02',
          semesters: [
 
            {
              name: 'Semester 6',
              subjects: [
                { name: 'Work Experience', grade: 'A' }
              ]
            },
            {
              name: 'Semester 5',
              subjects: [
                { name: 'Algorithms & Data Structures (C++)', grade: 'B+' },
                { name: 'Cloud Services and Distributed Computing', grade: 'C+' },
                { name: 'Web Application Development', grade: 'B' },
                { name: 'Operating Systems', grade: 'B+' },
                { name: 'Data Analysis', grade: 'C+' },
                { name: 'Advanced Databases', grade: 'B' }
              ]
            }

          ]
        }
      ]
    },
    {
      year: '2nd Year',
      institutions: [
        {
          name: 'Institute of Technology Tallaght',
          degree: 'Bachelor of Science (Honours) in Computing',
          gpa: '3.38',
          semesters: [
      
            {
              name: 'Semester 4',
              subjects: [
                { name: 'Web Design and Development', grade: 'B' },
                { name: 'Software Engineering', grade: 'B' },
                { name: 'Computer Networks', grade: 'B' },
                { name: 'Database Systems', grade: 'B' },
                { name: 'Mathematics for Computing', grade: 'B' },
                { name: 'Professional Practice', grade: 'B' }
              ]
            },
            {
              name: 'Semester 3',
              subjects: [
                { name: 'Data Structures & Algorithms', grade: 'B+' },
                { name: 'Software Engineering', grade: 'B' },
                { name: 'Computer Networks', grade: 'B' },
                { name: 'Mathematics for Computing', grade: 'B' }
              ]
            }
          ]
        }
      ]
    },
    {
      year: '1st Year',
      institutions: [
        {
          name: 'Institute of Technology Tallaght',
          degree: 'Bachelor of Science (Honours) in Computing',
          gpa: '3.42',
          semesters: [
            {
              name: 'Semester 2',
              subjects: [
                { name: 'Programming Fundamentals', grade: 'B' },
                { name: 'Computer Architecture', grade: 'B' },
                { name: 'Mathematics for Computing', grade: 'B' },
                { name: 'Operating Systems', grade: 'B' },
                { name: 'Web Development', grade: 'B' },
                { name: 'Communication Skills', grade: 'B' }
              ]
            }, 
            {
              name: 'Semester 1',
              subjects: [
                { name: 'Programming Fundamentals', grade: 'B' },
                { name: 'Computer Architecture', grade: 'B' },
                { name: 'Mathematics for Computing', grade: 'B' },
                { name: 'Operating Systems', grade: 'B' },
                { name: 'Web Development', grade: 'B' },
                { name: 'Communication Skills', grade: 'B' }
              ]
            }
          ]
        }
      ]
    },
    {
      year: 'Post-Secondary Education',
      institutions: [
        {
          name: 'Blackrock Further Education Institute (BFEI)',
          degree: 'Diploma in Web Design and Digital Media',
          gpa: 'N/A',
          semesters: [
            {
              name: 'Full Course',
              subjects: [
                { name: 'Web Design', grade: 'Distinction' },
                { name: 'Digital Media', grade: 'Distinction' },
                { name: 'Graphic Design', grade: 'Merit' },
                { name: 'Multimedia Authoring', grade: 'Distinction' }
              ]
            }
          ]
        }
      ]
    },
    {
      year: 'Secondary Education',
      institutions: [
        {
          name: "St. David's Holy Faith Secondary School, Greystones",
          degree: 'Leaving Certificate',
          gpa: 'N/A',
          semesters: [
            {
              name: 'Leaving Certifcate',
              subjects: [
                { name: 'English', grade: 'B' },
                { name: 'Mathematics', grade: 'B' },
                { name: 'Physics', grade: 'C' },
                { name: 'History', grade: 'B' },
                { name: 'French', grade: 'C' }
              ]
            }
          ]
        }
      ]
    },
  ];
}
