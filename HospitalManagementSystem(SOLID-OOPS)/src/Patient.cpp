#include "../include/Patient.h"

Patient::Patient(int id, const string& name, int age, const string& gender, const string& disease, const string& admissionDate):Person(id,name,age,gender),disease(disease),admissionDate(admissionDate){}

void Patient::display() const{
    Person::display();
    cout<<"Disease: "<<disease<<"\n";
    cout<<"AdmissionDate: "<<admissionDate<<"\n"; 
}