#ifndef PERSON_H
#define PERSON_H

#include <string>
#include <iostream>  // For cout, endl

using namespace std;  // For convenience

class Person {
protected:
    int id;
    string name;
    int age;
    string gender;

public:
    Person(int id, const string& name, int age, const string& gender);
    int getId() const { return id; }  // Inline getter for ID

    virtual void display() const;
};

#endif // PERSON_H
