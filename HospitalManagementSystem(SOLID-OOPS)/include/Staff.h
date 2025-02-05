#ifndef STAFF_H
#define STAFF_H

#include "Person.h"

class Staff : public Person {
    private:
        string role;
        double salary;
    public:
        Staff(int id, const string& name, int age, const string& gender, const string& role,double salary);
        void display() const override;
};

#endif 