#ifndef HOSPITALMANAGER_H
#define HOSPITALMANAGER_H

#include "Person.h"
#include <vector>

using namespace std;

class HospitalManager {
private:
    vector<Person*> members;  // List of hospital members

public:
    void addMember(Person* member);      // Add a new member
    void displayAllMembers() const;      // Display details of all members
    Person* searchMemberById(int id);    // Search for a member by ID
    ~HospitalManager();                  // Destructor to clean up memory
};

#endif // HOSPITALMANAGER_H
