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
        <br><br>

        <button onclick="showProjects()">Find Projects</button>
        <br><br>

        <button onclick="showInternships()">Find Internships</button>
    `;
}
function showSkillAnalyzer() {
    document.body.innerHTML = `
        <h1>Skill Gap Analyzer</h1>
        <p>Select your skill:</p>

        <select id="skill">
            <option>Java</option>
            <option>Python</option>
            <option>Web Development</option>
        </select>

        <br><br>

        <button onclick="analyzeSkill()">Analyze Skill</button>
        <button onclick="showDashboard()">Back</button>
    `;
}

function analyzeSkill() {
    const skill = document.getElementById("skill").value;

    let plan = "";

    if (skill === "Java") {
        plan = "Learn Java Basics, OOP, JDBC and build projects.";
    } else if (skill === "Python") {
        plan = "Learn Python Basics, Functions, OOP and build projects.";
    } else {
        plan = "Learn HTML, CSS, JavaScript and build websites.";
    }

    document.body.innerHTML = `
        <h1>Your Learning Plan</h1>
        <h2>${skill}</h2>
        <p>${plan}</p>
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
        <h2>Recommended Projects</h2>

        <p>1. Student Management System - Java</p>
        <p>2. Calculator Application - Python</p>
        <p>3. Portfolio Website - HTML, CSS, JavaScript</p>
        <p>4. Library Management System - Java & MySQL</p>

        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}
function showInternships() {
    document.body.innerHTML = `
        <h1>Skill Bridge - Find Internships</h1>
        <h2>Internship Opportunities</h2>

        <p>1. Java Developer Internship</p>
        <p>2. Python Developer Internship</p>
        <p>3. Web Development Internship</p>
        <p>4. Software Testing Internship</p>

        <button onclick="showDashboard()">Back to Dashboard</button>
    `;
}