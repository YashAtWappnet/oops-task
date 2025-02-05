#include "../include/Person.h"
#include "../include/Staff.h"
#include "../include/Doctor.h"
#include "../include/Patient.h"
#include "../include/HospitalManager.h"

int main() {
    HospitalManager manager;
    int choice;

    while (true) {
        cout << "\n=== Hospital Management System ===\n";
        cout << "1. Add Person\n";
        cout << "2. Add Staff\n";
        cout << "3. Add Doctor\n";
        cout << "4. Add Patient\n";
        cout << "5. Display All Members\n";
        cout << "6. Search Member by ID\n";
        cout << "7. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 7) break;

        int id, age;
        string name, gender, role, specialization, disease, admissionDate;
        double salary;

        switch (choice) {
            case 1:
                cout << "Enter ID, Name, Age, Gender: ";
                cin >> id >> name >> age >> gender;
                manager.addMember(new Person(id, name, age, gender));
                break;
            case 2:
                cout << "Enter ID, Name, Age, Gender, Role, Salary: ";
                cin >> id >> name >> age >> gender >> role >> salary;
                manager.addMember(new Staff(id, name, age, gender, role, salary));
                break;
            case 3:
                cout << "Enter ID, Name, Age, Gender, Role, Salary, Specialization: ";
                cin >> id >> name >> age >> gender >> role >> salary >> specialization;
                manager.addMember(new Doctor(id, name, age, gender, role, salary, specialization));
                break;
            case 4:
                cout << "Enter ID, Name, Age, Gender, Disease, Admission Date: ";
                cin >> id >> name >> age >> gender >> disease >> admissionDate;
                manager.addMember(new Patient(id, name, age, gender, disease, admissionDate));
                break;
            case 5:
                manager.displayAllMembers();
                break;
            case 6:
                cout << "Enter ID to search: ";
                cin >> id;
                {
                    Person* member = manager.searchMemberById(id);
                    if (member) {
                        cout << "Member found:\n";
                        member->display();
                    } else {
                        cout << "No member found with ID " << id << ".\n";
                    }
                }
                break;
            default:
                cout << "Invalid choice. Please try again.\n";
        }
    }

    return 0;
}
