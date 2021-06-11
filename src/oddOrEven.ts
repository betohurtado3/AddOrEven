export function oddOrEven(numbers: number[]): string{
    let result = 0; 
    for (var index in numbers)
    {
         result += numbers[index];
    }
    if((result%2) == 0)
        return "Even"
    else
        return "Odd"
}