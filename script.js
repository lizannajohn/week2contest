// Employee Table
const emp = []

// Submit Form
function submitForm()
{
    let empname = document.getElementById("empname").value;
    let prof = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    // let message = document.getElementsByClassName("message")

    // console.log(empname, prof, age);

    if(empname === "" && prof === "" && age === "")
    {
        // console.log("Error");
        document.getElementById("usermsg").style.color = "red"
        document.getElementById("usermsg").innerHTML = "Error: Please make sure all the fields are filled before adding in an employee!"
    }
    else
    {
        // console.log("Success");
        document.getElementById("usermsg").style.color = "green";
        document.getElementById("usermsg").innerHTML = "Success: Employee Added!"

        const noemp = document.getElementById("numberemps")
        noemp.style.display = "none";

        emp.push(
            {
                name: empname,
                profession: prof,
                age: age,
            }
        )

        document.getElementById("form").reset();
    }

    let table = document.getElementById("table")
    table.innerHTML = "";

    

    emp.map((user, i) =>
    {
        table.innerHTML += 
        `
        <tbody>
            <tr>
                <td> ${i + 1}. </td>
                <td> Name: ${user.name} </td>
                <td> Profession: ${user.profession} </td>
                <td> Age: ${user.age} </td>
                <td> <button onclick=del(${i}) type="button" class="delbtn"> Delete </button> </td>
            </tr>
        </tbody>
        `
    })
}

// 
function del(user)
{
    delete emp[user]
    table.innerHTML = ""

    emp.map((user, i) =>
    {
        table.innerHTML += 
        `
        <tbody>
            <tr>
                <td> ${i + 1}. </td>
                <td> Name: ${user.name} </td>
                <td> Profession: ${user.profession} </td>
                <td> Age: ${user.age} </td>
                <td> <button onclick=delete(${i}) type="button" class="delbtn"> Delete </button> </td>
            </tr>
        </tbody>
        `
    })
}

console.log(table);