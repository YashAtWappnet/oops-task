#include "../include/Doctor.h"

Doctor::Doctor(int id, const string& name, int age, const string& gender, const string& role, double salary, const string& specialization):Staff(id,name,age, gender,  role, salary),specialization(specialization){}

void Doctor::display()const{
    Staff::display();
    cout<<"Specialization: "<<specialization<<"\n";
}

