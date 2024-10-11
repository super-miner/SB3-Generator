import { Project } from "../src/project";
import { createProject } from "../src/sb3Generator";

test("Test createProject", () => {
    expect(createProject("Project Name")).toEqual(new Project("Project Name"));
});
