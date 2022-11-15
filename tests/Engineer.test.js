const Engineer = require("../lib/Engineer");


test("Can create Employee", () => {
    const e = new Employee("test employee", 1,  "test email");
    expect(e.name).toBe("test employee");
    expect(e.id).toBe(1);
    expect(e.email).toBe("test email");
})

test("Name of employee", () => {
    const name = "Drew"
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Get the name of employee", () => {
    const name = "Drew"
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
})

