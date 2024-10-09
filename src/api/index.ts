import axios from '../utils/request'

const baseUrl = process.env.EXPO_PUBLIC_API_URL

interface Params {
    [key: string]: string | number | boolean | undefined;
}

export function views(params?: Params) {
    return axios.get(`${baseUrl}/api/wallpaper/views?type=json`,{ params })
}

export interface ChecklistItem {
    checkItemId: number;
    itemName: string;
    itemDescription: string;
    itemType: number;
    isChecked: boolean;
}

export interface Task {
    taskId: number;
    taskName: string;
    taskDescription: string;
    taskStatus: string;
    taskItemList: ChecklistItem[];
}

export const getInspectionChecklist = async (inspectionId: number): Promise<Task[]> => {
    try {
        const response = await axios.get(`${baseUrl}/api/Inspection/getInspectionCheckList`, {
            params: { inspectionId },
            headers: { 'Accept': 'application/json' }
        });
        return Array.isArray(response.data) ? response.data : [response.data];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            console.error('Response data:', error.response?.data);
            console.error('Response status:', error.response?.status);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};