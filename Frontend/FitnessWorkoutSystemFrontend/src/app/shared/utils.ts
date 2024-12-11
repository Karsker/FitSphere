import { FormGroup } from "@angular/forms";

export function validateFormGroup(formGroup: FormGroup): boolean {
  for (let key in Object.keys(formGroup)) {
    if (formGroup.get(key)?.value) {
      return false;
    }
  }

  return true;
}

export function extractDate(fullDate: Date): string { 
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  return `${year}-${month}-${date}`;
}