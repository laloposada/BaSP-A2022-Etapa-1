window.onload = function() {
    var name = document.getElementById("first-name");
    var nameError = document.getElementById("error-firstName");
    var lastName = document.getElementById("last-name");
    var lastNameError = document.getElementById("error-lastName");
    var dni = document.getElementById("dni");
    var dniError = document.getElementById("error-dni");
    var birthDate = document.getElementById("birth-date");
    var birthDateError = document.getElementById("error-birthDate");
    var phoneNumber = document.getElementById("phone");
    var numberError = document.getElementById("error-phone");
    var address = document.getElementById("address");
    var addressError = document.getElementById("error-address");
    var location = document.getElementById("location");
    var locationError = document.getElementById("error-location");
    var codePostal = document.getElementById("postal-code");
    var codePostalError = document.getElementById("error-postalCode");
    var email = document.getElementById("email");
    var emailError = document.getElementById("error-email");
    var repeatEmail = document.getElementById("repeat-email");
    var repeatEmailError = document.getElementById("error-repeatEmail");
    var pass = document.getElementById("password");
    var passError = document.getElementById("error-password");
    var repeatPass = document.getElementById("repeat-password");
    var repeatPassError = document.getElementById("error-repeatPass");
    var signUpInput = document.getElementById("input-sign-up");
    var msgRequerid = "This field is requerid."
    
    // Validation: First name. 
    name.onblur = function validateFirstName() {
        var valueName = name.value;
        if (valueName.length == 0) {
            nameError.innerHTML = msgRequerid;
            name.classList.remove("green-border");
            name.classList.add("default-border");
            return false;
        }
        var allNumbers = "0123456789";
        function hasNumber(text) {
            for (i = 0; i < c.length; i++) {
                if (allNumbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (hasNumber(valueName)) {
            nameError.innerHTML = "Name only contain letters.";
            name.classList.remove("green-border");
            name.classList.add("default-border");
            return false;
        }
        var abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ";
        if (!(abc.indexOf(valueName.charAt(0),0)!=-1)) {
            nameError.innerHTML = "Must start with a capital letter.";
            name.classList.remove("green-border");
            name.classList.add("default-border");
            console.log("a")
            return false;
        }
        if (valueName.length < 4) {
            nameError.innerHTML = 'Must contain 4 characters.';
            name.classList.remove("green-border");
            name.classList.add("default-border");
            return false;
        }
        name.classList.remove("default-border");
        name.classList.add("green-border");
        return true;
    }
    name.onfocus = function() {
        nameError.innerHTML = "";
    } 
    // Validation: Last name.
    lastName.onblur = function validateLastName() {
        var valueLastName = lastName.value;
        if (valueLastName.length == 0) {
            lastNameError.innerHTML = msgRequerid;
            lastName.classList.remove("green-border");
            lastName.classList.add("default-border");
            return false;
        }
        var allNumbers = "0123456789";
        function hasNumber(text) {
            for (i = 0; i < valueName.length; i++) {
                if (allNumbers.indexOf(text.charAt(i),0)!=-1)
                return true
            }
            return false;
        }
        if (hasNumber) {
            lastNameError.innerHTML = "Must have only letters.";
            lastName.classList.remove("green-border");
            lastName.classList.add("default-border");
            return false;
        }
        var abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ";
        if (!(abc.indexOf(valueLastName.charAt(0),0)!=-1)) {
            lastNameError.innerHTML = "Last name start with a capital letter.";
            lastName.classList.remove("green-border");
            lastName.classList.add("default-border");
            console.log("a")
            return false;
        }
        if (valueLastName.length < 4) {
            lastNameError.innerHTML = "Last name have at least 4 characters";
            lastName.classList.remove("green-border");
            lastName.classList.add("default-border");
            return false;
        }
        lastName.classList.remove("default-border");
        lastName.classList.add("green-border");
        return true;
    }   
    lastName.onfocus = function() {
        lastNameError.innerHTML = "";
    }
    // Validation: Dni.
    dni.onblur = function validateDni() {        
        var valueDni= dni.value;
        if (valueDni.length == 0) {
            dniError.innerHTML = msgRequerid;
            dni.classList.remove("default-border");
            dni.classList.add("green-border");
            return false;
        } 
        if (isNaN(valueDni)) {
            dniError.innerHTML = "DNI must have only numbers.";
            dni.classList.remove("default-border");
            dni.classList.add("green-border");
            return false;
        }
        if (valueDni.length < 8) {
            dniError.innerHTML = "DNI must have at least 8 characters.";
            dni.classList.remove("default-border");
            dni.classList.add("green-border");
            return false;
        }
        dni.classList.remove("default-border");
        dni.classList.add("green-border");
        return true;
    }

    dni.onfocus = function() {
        dniError.innerHTML = "";
    }
    //Validation: Birth date.
    birthDate.onblur = function validateBirthDate() {
        var valueBirth = birthDate.value;
        var year = valueBirth.substring(0,4);
        var month = valueBirth.substring(5,7);
        var day = valueBirth.substring(8,10);
        valueBirth = day + "-" + month + "-" + year;
        
        var date = newDate().toISOString().split('T')[0];
        var yyyy = date.substring(0,4);
        var mm = date.substring(5,7);
        var dd = date.substring(8,10);
        date = dd + "-" + mm + "-" + yyyy;

        var age = date.substring(6,10) - valueBirth.substring(6,10);
        var mDif = date.substring(3,5) - valueBirth.substring(3,5);
        if (valueBirth == '--' || valueBirth.length == 2) {
            birthDateError.innerHTML = msgRequerid;
            birthDate.classList.remove("green-border");
            birthDate.classList.add("default-border");
            return false;
        }
        if (mDif < 0 || (mDif === 0 && date.substring(0,2) < valueBirth.substring(0,2))) {
            age --;
        } 
        if (age < 18) {
            birthDateError.innerHTML = "You must be 18+ to sign up.";
            birthDate.classList.remove("green-border");
            birthDate.classList.add("default-border");
            return false;
        }
        birthDate.classList.remove("default-border");
        birthDate.classList.add("green-border");
        return true;
    }
    birthDate.onfocus = function() {
        birthDateError.innerHTML = "";
    }
    //Validation: Phone number.
    phoneNumber.onblur = function validatePhoneNumber() {        
        var valuePhone = phoneNumber.value;
        if (valuePhone.length == 0) {
            numberError.innerHTML = msgRequerid;
            phoneNumber.classList.remove("green-border");
            phoneNumber.classList.add("default-border");
            return false;
        } 
        if (isNaN(valuePhone)) {
            numberError.innerHTML = "Phone must have only numbers.";
            phoneNumber.classList.remove("green-border");
            phoneNumber.classList.add("default-border");
            return false;
        }
        if (valuePhone.length !== 10) {
            numberError.innerHTML = "Must have 10 characters.";
            phoneNumber.classList.remove("green-border");
            phoneNumber.classList.add("default-border");
            return false;
        }
        phoneNumber.classList.remove("default-border");
        phoneNumber.classList.add("default-border");
        return true;    
    }
    phoneNumber.onfocus = function() {
        numberError.innerHTML = "";
    }
    //Validation: Address.
    address.onblur = function validateAdress() {        
        var valueAddress = address.value;
        if (valueAddress.length == 0) {
            addressError.innerHTML = msgRequerid;
            address.classList.remove("green-border");
            address.classList.add("default-border");
            return false;
        }
        var allNumbers = "0123456789";
        function hasNumbers(text) {
            for (i = 0; i< valueAddress.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasNumbers(valueAddress)) {
            addressError.innerHTML = 'Must have numbers';
            address.classList.remove("green-border");
            address.classList.add("default-border");
            return false;
        }
        var abcABC = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";
        function hasLetters(text) {
            for (i = 0; i< valueAddress.length; i++) {
                if (AZaz.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasLetters(valueAddress)) {
            addressError.innerHTML = 'Must have letters';
            address.classList.remove("green-border");
            address.classList.add("default-border");
            return false;
        }
        valueAddressTrimmed = valueAddress.trim();
        valueAddressSplitted = valueAddressTrimmed.split(" ");
        if (valueAddressSplitted.length < 2) {
            addressError.innerHTML = "Must have a space between text.";
            address.classList.remove("green-border");
            address.classList.add("default-border");
            return false;
        }
        if (valueAddress.length < 5) {
            addressError.innerHTML = "Must have at least 5 characters.";
            address.classList.remove("green-border");
            address.classList.add("default-border");
            return false;
        }
        address.classList.remove("default-border");
        address.classList.add("green-border");
        return true;
    }
    address.onfocus = function() {
        addressError.innerHTML = "";
    }
    //Validation: Location.
    location.onblur = function validateLocation() {        
        var valueLocation = location.value;
        if (valueLocation.length == 0) {
            locationError.innerHTML = msgRequerid;
            location.classList.remove("green-border");
            location.classList.add("default-border");
            return false;
        }
        var allNumbers = "0123456789";
        function hasNumbers(text) {
            for (i = 0; i< valueLocation.length; i++) {
                if (allNumbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (hasNumbers(valueLocation)) {
            locationError.innerHTML = "Must have only letters.";
            location.classList.remove("green-border");
            location.classList.add("default-border");
            return false;
        }
        if (valueLocation.length < 4) {
            locationError.innerHTML = "Must have at least 4 characters.";
            location.classList.remove("green-border");
            location.classList.add("default-border");
            return false;
        }
        location.classList.remove("default-border");
        location.classList.add("green-border");
        return true;
    }
    location.onfocus = function() {
        locationError.innerHTML = "";
    }
    //Validation: Postal code.
    codePostal.onblur = function validateLocation() {        
        var valuePostalCode = codePostal.value;
        if (valuePostalCode.length == 0) {
            codePostalError.innerHTML = msgRequerid;
            codePostal.classList.remove('green-border');
            codePostal.classList.add("default-border");
            return false;
        } 
        if (isNaN(valuePostalCode)) {
            codePostalError.innerHTML = "Code Postal must have only numbers.";
            codePostal.classList.remove("green-border");
            codePostal.classList.add("default-border");
            return false;
        }
        if (valuePostalCode.length < 4) {
            codePostalError.innerHTML = "Must have between 4 and 5 characters.";
            codePostal.classList.remove("green-border");
            codePostal.classList.add("default-border");
            return false;
        } else if (valuePostalCode.length > 5) {
            codePostalError.innerHTML = "Must have between 4 and 5 characters.";
            codePostal.classList.remove("green-border");
            codePostal.classList.add("default-border");
            return false;
        }
        codePostal.classList.remove("default-border");
        codePostal.classList.add("green-border");
        return true;
    }
    codePostal.onfocus = function() {
        codePostalError.innerHTML = "";
    }
    //Validation: Email.
    email.onblur = function validateEmail() {
        var valueEmail = email.value;
        if (valueEmail.length == 0) {
            emailError.innerHTML = msgRequerid;
            email.classList.remove("green-border");
            email.classList.add("default-border");
            return false;
        } 
        if (!valueEmail.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            emailError.innerHTML = "Invalid email format.";
            email.classList.remove("green-border");
            email.classList.add("default-border");
            return false;
        } 
        email.classList.remove("default-border");
        email.classList.add("green-border");
        return true;
    }
    email.onfocus = function() {
        emailError.innerHTML = "";
    }
    //Validation: Repeat email.
    repeatEmail.onblur = function validateRepeatEmail() {        
        var valueEmail = email.value;
        var valueRepeatEmail = repeatEmail.value;
        if (valueRepeatEmail.length == 0) {
            repeatEmailError.innerHTML = msgRequerid;
            repeatEmail.classList.remove("green-border");
            repeatEmail.classList.add("default-border");
            return false;
        } 
        if (valueRepeatEmail !== valueEmail) {
            repeatEmailError.innerHTML = "Unmatching password.";
            repeatEmail.classList.remove("green-border");
            repeatEmail.classList.add("default-border");
            return false;
        } 
        repeatEmail.classList.remove("default-border");
        repeatEmail.classList.add("green-border");
        return true;
    }
    repeatEmail.onfocus = function() {
        repeatEmailError.innerHTML = '';
    }
    //Validation: Password.
    pass.onblur = function validatePassword() {        
        var valuePass = pass.value;
        if (valuePass.length == 0) {
            passError.innerHTML = msgRequerid;
            pass.classList.remove("green-border");
            pass.classList.add("default-border");
            return false;
        } 
        var allNumbers = "0123456789";
        function hasNumbers(text) {
            for (i = 0; i< valuePass.length; i++) {
                if (allNumbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasNumbers(valuePass)) {
            passError.innerHTML = "Must have numbers.";
            pass.classList.remove("green-border");
            pass.classList.add("default-border");
            return false;
        }
        var abcABC = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";
        function hasLetters(text) {
            for (i = 0; i< valuePass.length; i++) {
                if (abcABC.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasLetters(valuePass)) {
            passError.innerHTML = "Must have letters.";
            pass.classList.remove("green-border");
            pass.classList.add("default-border");
            return false;
        }
        if (valuePass.length < 8) {
            passError.innerHTML = "Must have at least 8 characters.";
            pass.classList.remove("green-border");
            pass.classList.add("default-border");
            return false;
        }
        pass.classList.remove("default-border");
        pass.classList.add("green-border");
        return true;
    }
    pass.onfocus = function() {
        passError.innerHTML = "";
    }
    //Validation: Repeat password.
    repeatPass.onblur = function validateRepeatPassword() {
        var valuePass = pass.value;
        var valueRepeatPass = repeatPass.value;
        if (valueRepeatPass.length == 0) {
            repeatPassError.innerHTML = "This field is required.";
            repeatPass.classList.remove("green-border");
            repeatPass.classList.add("default-border");
            return false;
        } 
        if (valueRepeatPass !== valuePass) {
            repeatPassError.innerHTML = "Unmatching password.";
            repeatPass.classList.remove("green-border");
            repeatPass.classList.add("default-border");
            return false;
        } 
        repeatPass.classList.remove("default-border");
        repeatPass.classList.add("green-border");
        return true;
    }
    repeatPass.onfocus = function() {
        repeatPassError.innerHTML = "";
    }
    //Validation: Sign up button.
    signUpInput.onclick = function(e) {
        e.preventDefault();
        var labelArray = document.getElementsByTagName("label");
        
        var msgStarters = [];
        for (i = 0 ; i < labelArray.length ; i++) {
            if (labelArray[i]) {
                msgStarters.push(labelArray[i].innerHTML + ": ");
            }
        }
        var fields = []
        fields.push(name.onblur());
        fields.push(lastName.onblur());
        fields.push(dni.onblur());
        fields.push(birthDate.onblur());
        fields.push(phoneNumber.onblur());
        fields.push(address.onblur());
        fields.push(location.onblur());
        fields.push(codePostal.onblur());
        fields.push(email.onblur());
        fields.push(repeatEmail.onblur());
        fields.push(pass.onblur());
        fields.push(repeatPass.onblur());
        var values = [];
        values.push(name.value);
        values.push(lastName.value);
        values.push(dni.value);
        values.push(birthDate.value);
        values.push(phoneNumber.value);
        values.push(address.value);
        values.push(location.value);
        values.push(codePostal.value);
        values.push(email.value);
        values.push(repeatEmail.value);
        values.push(pass.value);
        values.push(repeatPass.value);
        var allValidated = [];
        for (i = 0 ; i < values.length ; i++) {
            allValidated.push(msgStarters[i] + values[i])
        }
        var errors = [];
        errors.push(nameError.innerHTML);
        errors.push(lastNameError.innerHTML);
        errors.push(dniError.innerHTML);
        errors.push(birthDateError.innerHTML);
        errors.push(phoneNumberError.innerHTML);
        errors.push(addressError.innerHTML);
        errors.push(locationError.innerHTML);
        errors.push(codePostalError.innerHTML);
        errors.push(emailError.innerHTML);
        errors.push(repeatEmailError.innerHTML);
        errors.push(passError.innerHTML);
        errors.push(repeatPassError.innerHTML);
        var invalidFields = [];
        for (i = 0 ; i < errors.length ; i++) {
            invalidFields.push(msgStarters[i] + errors[i])
        }
        function isTrue(value) {
            return value === true;
        }
        if (fields.every(isTrue)) {
            alert(allValidated.join("\n"));
        } else {
            for (i = 0 ; i < fields.length ; i++) {
                if (fields[i]) {
                    invalidFields[i] = msgStarters[i] + 'CORRECT';
                }
            }
            alert(invalidFields.join("\n"));
        }
    } 
}
