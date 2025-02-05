#include "../include/Person.h"

// Constructor definition using the scope resolution operator (::)
Person::Person(int id, const string& name, int age, const string& gender)
    : id(id), name(name), age(age), gender(gender) {}

// Method definition using the scope resolution operator (::)
void Person::display() const {
    cout << "ID: " << id << "\n"
         << "Name: " << name << "\n"
         << "Age: " << age << "\n"
         << "Gender: " << gender << "\n";
}
