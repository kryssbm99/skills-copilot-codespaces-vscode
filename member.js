function skillsMember() {
    var member = {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        getSkills: function() {
            console.log(this.name + " has " + this.skills.length + " skills");
        }
    }
    return member;
}