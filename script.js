function showLogin() {
    document.body.innerHTML = `
        <h1>Skill Bridge Login</h1>

        <input type="text" id="username" placeholder="Username">
        <br><br>

        <input type="password" id="password" placeholder="Password">
        <br><br>

        <button onclick="login()">Login</button>
    `;
}

function login() {
    showDashboard();
}



function showRegister() {
    document.body.innerHTML = `
        <h1>Skill Bridge Registration</h1>

        <input type="text" placeholder="Student Name">
        <br><br>

        <input type="email" placeholder="Email">
        <br><br>

        <input type="text" placeholder="Username">
        <br><br>

        <input type="password" placeholder="Password">
        <br><br>

        <button onclick="alert('Registration form working!')">
            Register
        </button>
    `;
}
function showDashboard() {
    document.body.innerHTML = `
        <h1>Welcome to Skill Bridge</h1>
        <h2>Student Dashboard</h2>

        <button onclick="showSkillAnalyzer()">Skill Gap Analyzer</button>
        <br><br>

        <button onclick="showRoadmap()">Learning Roadmap</button>

        <button onclick="showProjects()">Find Projects</button>
        <br><br>

        <button onclick="showInternships()">Find Internships</button>
    `;
}
function showSkillAnalyzer() {
    document.body.innerHTML = `
        <h1>Skill Bridge - Skill Gap Analyzer</h1>

        <h2>Java Skill Assessment</h2>
        <p>Select the topics you already know:</p>

        <label><input type="checkbox" value="Java Basics"> Java Basics</label><br>
        <label><input type="checkbox" value="OOP Concepts"> OOP Concepts</label><br>
        <label><input type="checkbox" value="Arrays and Collections"> Arrays and Collections</label><br>
        <label><input type="checkbox" value="Exception Handling"> Exception Handling</label><br>
        <label><input type="checkbox" value="JDBC and MySQL"> JDBC and MySQL</label><br>
        <label><input type="checkbox" value="Build a Java Project"> Build a Java Project</label><br><br>

        <button onclick="analyzeSkill()">Analyze My Skills</button>
        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}

function analyzeSkill() {
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]'
    );

    let knownSkills = [];
    let missingSkills = [];

    checkboxes.forEach(box => {
        if (box.checked) {
            knownSkills.push(box.value);
        } else {
            missingSkills.push(box.value);
        }
    });

    document.body.innerHTML = `
        <h1>Skill Bridge - Analysis Result</h1>

        <h2>Skills You Already Know</h2>
        <p>${knownSkills.length > 0
            ? knownSkills.join(", ")
            : "No topics selected"}</p>

        <h2>Skills You Need to Learn</h2>
        <p>${missingSkills.length > 0
            ? missingSkills.join(", ")
            : "Great! You know all the listed topics."}</p>

        <button onclick="showSkillAnalyzer()">Try Again</button>
        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}
function showRoadmap() {
    document.body.innerHTML = `
        <h1>Skill Bridge - Learning Roadmap</h1>
        <h2>6-Week Java Learning Roadmap</h2>

        <p>Week 1: Java Basics</p>
        <p>Week 2: OOP Concepts</p>
        <p>Week 3: Exception Handling</p>
        <p>Week 4: Collections Framework</p>
        <p>Week 5: JDBC and MySQL</p>
        <p>Week 6: Mini Project</p>

        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}
function showProjects() {
    document.body.innerHTML = `
        <h1>Skill Bridge - Find Projects</h1>
        <h2>Select Your Skill</h2>

        <select id="projectSkill">
            <option>Java</option>
            <option>Python</option>
            <option>Web Development</option>
            <option>SQL</option>
        </select>

        <br><br>

        <button onclick="generateProjects()">
            Find Projects
        </button>

        <button onclick="showDashboard()">
            Back to Dashboard
        </button>
    `;
}

function showInternships() {
    document.body.innerHTML = `
        <h1>Skill Bridge - Find Internships</h1>
        <h2>Select Your Preferred Internship</h2>

        <select id="internshipRole">
            <option>Java Developer</option>
            <option>Python Developer</option>
            <option>Web Developer</option>
            <option>SQL / Database</option>
        </select>

        <br><br>

        <button onclick="findInternships()">
            Find Internships
        </button>

        <button onclick="showDashboard()">
            Back to Dashboard
        </button>
    `;
}
function showRoadmap() {
    document.body.innerHTML = `
        <h1>Skill Bridge - Learning Roadmap</h1>
        <h2>Select Your Skill</h2>

        <select id="roadmapSkill">
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Web Development">Web Development</option>
            <option value="SQL">SQL</option>
        </select>

        <br><br>

        <button onclick="generateRoadmap()">
            Generate Roadmap
        </button>

        <button onclick="showDashboard()">
            Back to Dashboard
        </button>
    `;
}
function generateRoadmap() {
    const skill = document.getElementById("roadmapSkill").value;

    const roadmaps = {
        "Java": [
            "Java basics and syntax",
            "Conditions, loops and arrays",
            "Classes and OOP",
            "Collections and exceptions",
            "JDBC and database basics",
            "Build a student management app"
        ],
        "Python": [
            "Syntax and variables",
            "Conditions, loops and functions",
            "Lists, dictionaries and files",
            "OOP and error handling",
            "Practice problems",
            "Build a Python application"
        ],
        "Web Development": [
            "HTML",
            "CSS and layouts",
            "JavaScript basics",
            "DOM and events",
            "Responsive website",
            "Build and test a website"
        ],
        "SQL": [
            "Tables and database basics",
            "SELECT, WHERE and sorting",
            "INSERT, UPDATE and DELETE",
            "Joins and subqueries",
            "Grouping and aggregate functions",
            "Build a database project"
        ]
    };

    const plan = roadmaps[skill];

    document.body.innerHTML = `
        <h1>${skill} - Learning Roadmap</h1>

        ${plan.map((topic, index) =>
            `<p><strong>WEEK ${index + 1}:</strong> ${topic}</p>`
        ).join("")}

        <p>Tip: Practise daily and track your progress.</p>

        <button onclick="showRoadmap()">Choose Another Skill</button>
        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}
function generateProjects() {
    const skill = document.getElementById("projectSkill").value;

    const projects = {
        "Java": [
            "Calculator",
            "Student Management System",
            "Library Management System",
            "OOP, Swing, Collections and JDBC"
        ],
        "Python": [
            "Number Guessing Game",
            "Expense Tracker",
            "Student Performance Analyzer",
            "Functions, Files and Data Processing"
        ],
        "Web Development": [
            "Personal Portfolio",
            "To-Do List Website",
            "Student Learning Portal",
            "HTML, CSS and JavaScript"
        ],
        "SQL": [
            "Create Student Tables",
            "Library Database",
            "Student Result Management Database",
            "SQL, Joins, Constraints and Reports"
        ]
    };

    const ideas = projects[skill];

    document.body.innerHTML = `
        <h1>Project Recommendations - ${skill}</h1>

        <h3>Beginner</h3>
        <p>${ideas[0]}</p>

        <h3>Intermediate</h3>
        <p>${ideas[1]}</p>

        <h3>Advanced</h3>
        <p>${ideas[2]}</p>

        <h3>Concepts to Learn</h3>
        <p>${ideas[3]}</p>

        <button onclick="showProjects()">Choose Another Skill</button>
        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}
function findInternships() {
    const role = document.getElementById("internshipRole").value;

    const internships = {
        "Java Developer": {
            keywords: "Java Developer Intern",
            skills: "Java, OOP, SQL and Git"
        },
        "Python Developer": {
            keywords: "Python Developer Intern",
            skills: "Python, Problem Solving and Git"
        },
        "Web Developer": {
            keywords: "Web Developer Intern",
            skills: "HTML, CSS, JavaScript and Git"
        },
        "SQL / Database": {
            keywords: "SQL Intern OR Database Intern",
            skills: "SQL Queries, Joins and Database Design"
        }
    };

    const selected = internships[role];

    const searchUrl = "https://www.google.com/search?q=" +
        encodeURIComponent(selected.keywords + " internship India");

    document.body.innerHTML = `
        <h1>Skill Bridge - Internship Finder</h1>

        <h2>${role}</h2>

        <h3>Required Skills</h3>
        <p>${selected.skills}</p>

        <h3>Before Applying</h3>
        <p>1. Prepare your resume.</p>
        <p>2. Add projects to your portfolio.</p>
        <p>3. Check eligibility and deadlines.</p>
        <p>4. Verify the company details.</p>

        <a href="${searchUrl}" target="_blank" rel="noopener noreferrer">
            <button>Search Internships on Google</button>
        </a>

        <br><br>

        <button onclick="showInternships()">Choose Another Role</button>
        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}