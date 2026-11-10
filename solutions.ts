function multiplyValue(value: number, multiplier: number): number {
    const actualMultiplier: number = multiplier === undefined ? 2 : multiplier;
    return value * actualMultiplier;
}


function processInput (input: string | number | boolean ):string | number{
    if(typeof input ==='string'){
        return input.trim().toLowerCase();
    }
    if(typeof input ==='number'){
      return input * 10;
      
    }
    return input ? 'Active' : 'Inactive';
}


function formatCoordinate (coordinate : [number, number, string]): string{
    const [latitude,longitude,locationName] = coordinate;
    return `Location:${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrarys<T>(...arrays: T[][]): T[]{
    const combined: T[] = [];

    for(const currentArray of arrays){
        combined.push(...currentArray);
    }
    return combined;
}


interface Course{
    title: string;
    students : number;
    isPublished : boolean

}

function getPopularCourses( courses : Course[], minStudents : number) : Course[]{
    return courses.filter((course: Course): boolean => {
        return course.isPublished && course.students >= minStudents;
    });
}



function pluckValues<T, K extends keyof T>(items : T[], Key : K) : T[K][]{
    return items.map((item :T): T[K] => item[Key]);
}


class Employee{
    protected name: string;
    protected basicSalary: number;

    constructor(name: string, basicSalary: number){
        this.name = name;
        this.basicSalary = basicSalary;
    }

    getDetails(): string{
      return  `Employee Name: ${this.name}, Basic Salary: ${this.basicSalary}`;
    }
}


class Manager extends Employee{
    private department: string;

    constructor(name: string, basicSalary: number, department: string){
        super(name, basicSalary);
        this.department = department;
    }
    getRoleInfo(): string{
        return `Manager of ${this.department}:${this.name}`;
    }
}


function validateAgeAsync(age: number): Promise<string> {
    return new Promise<string>((resolve: (value : string | PromiseLike<string>)=>void,
reject : (reason?: unknown)=>void): void =>{
    if(age< 18){
        reject(new Error('Access Denied: Must be 18 or older'));
        return;
    }
    setTimeout(() : void=> {
        resolve('Access Granted');
    },1000)
})
}