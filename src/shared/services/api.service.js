import axios from 'axios';

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000'        });
    }

    getClassrooms() {
        return this.api.get('/classrooms');
    }

    getFacilitiesList() {
        return this.api.get('/facilities-list');
    }

    getClassroomEquipmentList() {
        return this.api.get('/classroom-equipment-list');
    }

    getCoursesList() {
        return this.api.get('/courses-list');
    }

    getStudentsList() {
        return this.api.get('/students-list');
    }

    getTeachersList() {
        return this.api.get('/teachers-list');
    }
}

export default new ApiService();