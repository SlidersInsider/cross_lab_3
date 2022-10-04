import {Cache} from "../src/cache";

test("Test 1", () => {
    let cache = new Cache();
    cache.set("name", "Max", 5);
    let res = cache.get("name");
    expect(res).toBe("Max");
});

test("Test 2", () => {
    let cache = new Cache();
    cache.set("name", "Max", 0);
    let res = cache.get("name");
    expect(res).toBe(null);
});

test("Test 3", () => {
    let cache = new Cache();
    cache.set("name", "Max");
    let res = cache.get("name");
    expect(res).toBe("Max");
});

test("Test 4", () => {
    let cache = new Cache();
    cache.set("name", "Max");
    cache.get("name");
    let res = cache.get("name");
    expect(res).toBe(null);
});

test("Test 5", () => {
    let cache = new Cache();
    cache.set("name", "Max", 3);
    cache.get("name");
    cache.get("name");
    cache.get("name");
    let res = cache.get("name");
    expect(res).toBe(null);
});

test("Test 6", () => {
    let cache = new Cache();
    cache.set("name", "Max", 4);
    cache.get("name");
    cache.get("name");
    cache.get("name");
    cache.get("name");
    let res = cache.stats;
    expect(res).toEqual([
        ["name", "Max", 4],
        ["name", "Max", 3],
        ["name", "Max", 2],
        ["name", "Max", 1]
    ])
});

test("Test 7", () => {
    let cache = new Cache();
    cache.set("name", "Max");
    cache.get("name");
    cache.get("name");
    let res = cache.stats;
    expect(res).toEqual([
        ["name", "Max", 1]
    ])
});
