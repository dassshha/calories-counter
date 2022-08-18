import {PHYSICAL_ACTIVITY} from './const';

const percentFromNumber = (value: number, percent: number): number => value / 100 * percent;

export const countCalories = (gender: string, age: number, height: number, weight: number, physicalActivity: string) => {
    let n = 10 * weight + 6.25 * height - 5 * age;
    n = gender === 'female' ? n - 161 : n + 5;

    const norm = n * PHYSICAL_ACTIVITY[physicalActivity as keyof typeof PHYSICAL_ACTIVITY];
    const min = norm - percentFromNumber(norm, 15);
    const max = norm + percentFromNumber(norm, 15);

    return {
        min: Math.round(min),
        norm: Math.round(norm),
        max: Math.round(max)
    };
}



