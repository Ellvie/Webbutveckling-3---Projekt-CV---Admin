"use strict";class Auth{constructor(){document.querySelector("main").style.display="none";const e=localStorage.getItem("authentication");this.validateAuth(e)}validateAuth(e){"true"!=e?window.location.replace("login.html"):document.querySelector("main").style.display="block"}logOut(){localStorage.removeItem("authentication"),window.location.replace("login.html")}}let navSlide=()=>{let e=document.querySelector(".burgernav"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links li");window.location.href.indexOf("login")>-1?e.style.display="none":e.style.display="block",e.addEventListener("click",(()=>{t.classList.toggle("nav-active"),n.forEach(((e,t)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade 0.5s ease forwards ${t/5+.5}s`})),e.classList.toggle("toggle")}))};navSlide();const edURL="https://devlie.se/dt173g%20-%20Webbutveckling%20III/Projekt%20-%20CV/API/education.php",coursesEl=document.getElementById("courses"),addEl=document.getElementById("add"),schoolEl=document.getElementById("school"),nameEl=document.getElementById("name"),startEl=document.getElementById("start"),endEl=document.getElementById("end"),updateEl=document.getElementById("update"),updateFormEl=document.getElementById("updateForm");function getEd(){coursesEl.innerHTML="",fetch(edURL).then((e=>e.json())).then((e=>{console.log(e),coursesEl.innerHTML+="\n            <tr>\n                <th>School:</th>\n                <th>Course name:</th>\n                <th>Start Date:</th>\n                <th>End Date:</th>\n\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n           \n            ",e.forEach((e=>{coursesEl.innerHTML+=`\n                 <tr >\n                    <td> ${e.school} </td>\n                    <td> ${e.name} </td>\n                    <td> ${e.startDate} </td>\n                    <td>${e.endDate}</td>\n\n                    <td><button id="edit" title="Edit" onclick="fillUpdateForm(${e.id})"><img src="./pics/edit.png" alt="Edit"></button></td>\n                    <td><button id="delete" title="Delete" onclick="deleteEd(${e.id})"><img src="./pics/delete.png" alt="Delete"></button></td>\n                </tr>\n                \n                 `}))}))}window.location.href.indexOf("education")>-1&&window.addEventListener("load",getEd),null!=addEl&&addEl.addEventListener("click",(function(e){e.preventDefault(),addEd()}));let addForm=()=>{document.getElementById("addForm").style.display="block"},addEd=()=>{let e={school:schoolEl.value,name:nameEl.value,startDate:startEl.value,endDate:endEl.value};console.log(JSON.stringify(e)),fetch(edURL,{method:"POST",body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),getEd(),document.getElementById("addForm").style.display="none"})).catch((e=>console.log(e)))};function fillUpdateForm(e){updateFormEl.style.display="block",fetch(edURL+"?id="+e).then((e=>e.json())).then((t=>{console.log(t),t.forEach((t=>{updateEl.innerHTML+=`\n                <h2>Education - Edit</h2>\n                \n                <label for="schoolUp">School:</label><br>\n                <input type="text" id="schoolUp" name="schoolUp" value="${t.school}">\n        \n                <label for="nameUp">Course name:</label><br>\n                <input type="text" id="nameUp" name="nameUp" value="${t.name}"><br>\n        \n                <label for="startUp">Start Date:</label><br>\n                <input type="text" id="startUp" name="startUp" value="${t.startDate}">\n        \n                <label for="endUp">End Date:</label><br>\n                <input type="text" id="endUp" name="endUp" value="${t.endDate}">\n        \n                <input type="submit" value="Update" id="up" onclick="event.preventDefault(); updateEd(`+e+')">\n                <input type="submit" value="Close" id="closeUp" onclick="close()">\n            \n            '}))}))}function close(){const e=document.getElementById("closeUp"),t=document.getElementById("closeAdd");e.style.display="none",t.style.display="none"}function updateEd(e){let t=edURL+"?id="+e;const n=document.getElementById("schoolUp"),o=document.getElementById("nameUp"),l=document.getElementById("startUp"),d=document.getElementById("endUp");let i={school:n.value,name:o.value,startDate:l.value,endDate:d.value};console.log(JSON.stringify(i)),fetch(t,{method:"PUT",body:JSON.stringify(i)}).then((e=>e.json())).then((e=>{console.log(e),getEd()})).catch((e=>console.log(e))),updateFormEl.style.display="none",location.reload()}function deleteEd(e){if(confirm("Are you sure you want to delete this post?")){fetch(edURL+"?id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{console.log(e),getEd()})).catch((e=>console.log(e)))}}const loginURL="https://devlie.se/dt173g%20-%20Webbutveckling%20III/Projekt%20-%20CV/API/login.php",userEl=document.getElementById("username"),pwEl=document.getElementById("pw"),loginEl=document.getElementById("login"),errorEl=document.getElementById("error");function login(){let e={user:userEl.value,pw:pwEl.value};fetch(loginURL,{method:"POST",body:JSON.stringify(e)}).then((e=>e.status)).then((e=>{console.log(e),200==e?(localStorage.setItem("authentication","true"),window.location.replace("index.html")):errorEl.innerHTML="<p>Error. Try again!"})).catch((e=>console.log(e)))}null!=loginEl&&loginEl.addEventListener("click",(function(e){e.preventDefault(),login()}));const pfURL="https://devlie.se/dt173g%20-%20Webbutveckling%20III/Projekt%20-%20CV/API/portfolio.php",portfolioEl=document.getElementById("portfolio"),addPortfolioEl=document.getElementById("addPortfolio"),pfTitleEl=document.getElementById("pfTitle"),linkEl=document.getElementById("link"),descEl=document.getElementById("desc");function getPortfolio(){portfolioEl.innerHTML="",fetch(pfURL).then((e=>e.json())).then((e=>{console.log(e),portfolioEl.innerHTML+="\n            <tr>\n                <th>Title:</th>\n                <th>Link:</th>\n                <th>Description:</th>\n\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n           \n            ",e.forEach((e=>{portfolioEl.innerHTML+=`\n                 <tr >\n                    <td> ${e.title} </td>\n                    <td> <a href=" ${e.url} ">Link</a></td>\n                    <td> ${e.description} </td>\n\n                    <td><button id="edit" title="Edit" onclick="fillPFUpdateForm(${e.id})"><img src="./pics/edit.png" alt="Edit"></button></td>\n                    <td><button id="delete" title="Delete" onclick="deletePortfolio(${e.id})"><img src="./pics/delete.png" alt="Delete"></button></td>\n                </tr>\n                \n                 `}))}))}window.location.href.indexOf("portfolio")>-1&&window.addEventListener("load",getPortfolio),null!=addPortfolioEl&&addPortfolioEl.addEventListener("click",(function(e){e.preventDefault(),addPortfolio()}));let addPortfolio=()=>{let e={title:pfTitleEl.value,url:linkEl.value,description:descEl.value};console.log(JSON.stringify(e)),fetch(pfURL,{method:"POST",body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),getPortfolio(),document.getElementById("addForm").style.display="none"})).catch((e=>console.log(e)))};function fillPFUpdateForm(e){updateFormEl.style.display="block",fetch(pfURL+"?id="+e).then((e=>e.json())).then((t=>{console.log(t),t.forEach((t=>{updateEl.innerHTML+=`\n                <h2>Portfolio - Edit</h2>\n\n                <label for="pfTitleUp">Title:</label><br>\n                <input type="text" id="pfTitleUp" name="pfTitleUp" value="${t.title}">\n        \n                <label for="linkUp">Link:</label><br>\n                <input type="text" id="linkUp" name="linkUp" value="${t.url}"><br>\n        \n                <label for="descUp">Description:</label><br>\n                <input type="text" id="descUp" name="descUp" value="${t.description}">\n        \n        \n                <input type="submit" value="Update" id="portfolioUp" onclick="event.preventDefault(); updatePortfolio(`+e+')">\n                <input type="submit" value="Close" id="closeUp" onclick="close()">\n            \n            '}))}))}function updatePortfolio(e){let t=pfURL+"?id="+e;const n=document.getElementById("pfTitleUp"),o=document.getElementById("linkUp"),l=document.getElementById("descUp");let d={title:n.value,url:o.value,description:l.value};console.log(JSON.stringify(d)),fetch(t,{method:"PUT",body:JSON.stringify(d)}).then((e=>e.json())).then((e=>{console.log(e),getPortfolio()})).catch((e=>console.log(e))),updateFormEl.style.display="none",location.reload()}function deletePortfolio(e){if(confirm("Are you sure you want to delete this post?")){fetch(pfURL+"?id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{console.log(e),getPortfolio()})).catch((e=>console.log(e)))}}const workURL="https://devlie.se/dt173g%20-%20Webbutveckling%20III/Projekt%20-%20CV/API/work.php",workEl=document.getElementById("work"),addWorkEl=document.getElementById("addWork"),companyEl=document.getElementById("company"),titleEl=document.getElementById("title"),workStartEl=document.getElementById("workStart"),workEndEl=document.getElementById("workEnd");function getWork(){workEl.innerHTML="",fetch(workURL).then((e=>e.json())).then((e=>{console.log(e),workEl.innerHTML+="\n            <tr>\n                <th>Company:</th>\n                <th>Title:</th>\n                <th>Start Date:</th>\n                <th>End Date:</th>\n\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n           \n            ",e.forEach((e=>{workEl.innerHTML+=`\n                 <tr>\n                    <td> ${e.company} </td>\n                    <td> ${e.title} </td>\n                    <td> ${e.startDate} </td>\n                    <td>${e.endDate}</td>\n\n                    <td><button id="edit" title="Edit" onclick="fillWorkUpdateForm(${e.id})"><img src="./pics/edit.png" alt="Edit"></button></td>\n                    <td><button id="delete" title="Delete" onclick="deleteWork(${e.id})"><img src="./pics/delete.png" alt="Delete"></button></td>\n                </tr>\n                \n                 `}))}))}window.location.href.indexOf("work")>-1&&window.addEventListener("load",getWork),null!=addWorkEl&&addWorkEl.addEventListener("click",(function(e){e.preventDefault(),addWork()}));let addWork=()=>{let e={company:companyEl.value,title:titleEl.value,startDate:workStartEl.value,endDate:workEndEl.value};console.log(JSON.stringify(e)),fetch(workURL,{method:"POST",body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),getWork(),document.getElementById("addForm").style.display="none"})).catch((e=>console.log(e)))};function fillWorkUpdateForm(e){updateFormEl.style.display="block",fetch(workURL+"?id="+e).then((e=>e.json())).then((t=>{console.log(t),t.forEach((t=>{updateEl.innerHTML+=`\n                <h2>Work - Edit</h2>\n\n                <label for="companyUp">Company:</label><br>\n                <input type="text" id="companyUp" name="companyUp" value="${t.company}">\n        \n                <label for="titleUp">Title:</label><br>\n                <input type="text" id="titleUp" name="titleUp" value="${t.title}"><br>\n        \n                <label for="workStartUp">Start Date:</label><br>\n                <input type="text" id="workStartUp" name="workStartUp" value="${t.startDate}">\n        \n                <label for="workEndUp">End Date:</label><br>\n                <input type="text" id="workEndUp" name="workEndUp" value="${t.endDate}">\n        \n                <input type="submit" value="Update" id="workUp" onclick="event.preventDefault(); updateWork(`+e+')">\n                <input type="submit" value="Close" id="closeUp" onclick="close()">\n            \n            '}))}))}function updateWork(e){let t=workURL+"?id="+e;const n=document.getElementById("companyUp"),o=document.getElementById("titleUp"),l=document.getElementById("workStartUp"),d=document.getElementById("workEndUp");let i={company:n.value,title:o.value,startDate:l.value,endDate:d.value};console.log(JSON.stringify(i)),fetch(t,{method:"PUT",body:JSON.stringify(i)}).then((e=>e.json())).then((e=>{console.log(e),getWork()})).catch((e=>console.log(e))),updateFormEl.style.display="none",location.reload()}function deleteWork(e){if(confirm("Are you sure you want to delete this post?")){fetch(workURL+"?id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{console.log(e),getWork()})).catch((e=>console.log(e)))}}
//# sourceMappingURL=../maps/main.js.map
