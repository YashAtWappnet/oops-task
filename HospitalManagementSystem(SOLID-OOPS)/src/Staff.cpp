#include "../include/Staff.h"

Staff:: Staff(int id, const string& name, int age, const string& gender, const string& role,double salary):Person(id,name,age,gender),role(role),salary(salary){}

void Staff::display() const{
    Person::display();
    cout<<"Role: "<<role <<"\n";
    cout<<"Salary: "<<salary<<"\n";
}   