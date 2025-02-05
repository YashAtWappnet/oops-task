#include "../include/HospitalManager.h"

void HospitalManager::addMember(Person* member) {
    members.push_back(member);
}

void HospitalManager::displayAllMembers() const {
    if (members.empty()) {
        cout << "No members found.\n";
        return;
    }
    for (const auto& member : members) {
        member->display();
        cout << "--------------------------\n";
    }
}

Person* HospitalManager::searchMemberById(int id) {
    for (const auto& member : members) {
        if (member->getId() == id) {  // We’ll add a `getId()` method to the `Person` class.
            return member;
        }
    }
    return nullptr;
}

HospitalManager::~HospitalManager() {
    for (auto& member : members) {
        delete member;
    }
}
