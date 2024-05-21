function skillsMember() {
    var member = new Member();
    member.skills = [];
    for (var i = 0; i < 5; i++) {
        member.skills.push(new Skill());
    }
    return member;
}