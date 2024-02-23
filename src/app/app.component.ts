import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '17\'PasswordGenerator';

  password: string = '';
  length: number = 0;
  includeUppercaseLetters: boolean = false;
  includeLowercaseLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSpecialCharacters: boolean = false;

  lengthPassword(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  upperLetters() {
    this.includeUppercaseLetters = !this.includeUppercaseLetters;
  }

  lowerLetters() {
    this.includeLowercaseLetters = !this.includeLowercaseLetters;
  }

  numbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  specialCharacters() {
    this.includeSpecialCharacters = !this.includeSpecialCharacters;
  }

  buttonClick() {
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+';

    let validChars = '';

    if (this.includeUppercaseLetters) {
      validChars += upperLetters;
    }
    if (this.includeLowercaseLetters) {
      validChars += lowerLetters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSpecialCharacters) {
      validChars += specialCharacters;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  async copyToClipboard() {
    try {
      await navigator.clipboard.writeText(this.password);
      console.log('Mot de passe copié dans le presse-papiers !');
    } catch (error) {
      console.error('Erreur lors de la copie dans le presse-papiers : ', error);
    }
  }
}
