function render(template, data) {
    return template.replace(/\{\{(.*?)\}\}/g, function(match, key) {
        key = key.trim();

        if (data[key] !== undefined) {
            return data[key];
        } else {
            return "[missing:" + key + "]";
        }
    });
}

console.log(
    render("Hello {{name}}, {{count}} msgs", {
        name: "Ajay",
        count: 6
    })
);

console.log(
    render("Hi {{name}}, age {{age}}", {
        name: "Sruthi"
    })
);