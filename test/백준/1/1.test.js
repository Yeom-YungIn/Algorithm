const class1 = require("../../../src/백준/1/1")

test("A+B TEST", () => {
    const result = class1.class1.AplusB(1,2)
    expect(result).toEqual(3)
})

test("A/B TEST", () => {
    const result = class1.class1.ADivideB(1,3)
    expect(result).toBe(1/3)
})

test("QuestionMark TEST", () => {
    const result = class1.class1.questionMark("joonas")
    expect(result).toEqual("joonas??!")
})

test("Date TEST", () => {
    const result = class1.class1.date(2541)
    expect(result).toEqual(1998)
})

test("Dog result Test", () => {
    expect(class1.class1.dog()).toBe(undefined)
})