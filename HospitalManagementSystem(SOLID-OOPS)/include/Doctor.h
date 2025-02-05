#ifndef DOCTOR_H
#define DOCTOR_H

#include "Staff.h"

class Doctor: public Staff{
    private:
        string specialization;
    public:
        Doctor(int id, const string& name, int age, const string& gender, const string& role, double salary, const string& specialization);
        void display() const override;
};


#endif