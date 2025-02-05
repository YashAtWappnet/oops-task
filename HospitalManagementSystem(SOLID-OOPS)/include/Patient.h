#ifndef PATIENT_H
#define PATIENT_H

#include "Person.h"

class Patient:public Person{
    private:
        string disease;
        string admissionDate;
    public:
        Patient(int id, const string& name, int age, const string& gender, const string& disease, const string& admissionDate);
        
        void display() const override;

};


#endif