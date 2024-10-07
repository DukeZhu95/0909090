import axios from '../utils/request'

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

interface Params extends Record<string,any> {}

export function views(params?: Params) {
    return axios.get(`${baseUrl}/api/wallpaper/views?type=json`,{ params })
}

export interface ChecklistItem {
    id: number;
    description: string;
    isChecked: boolean;
}

export const getInspectionChecklist = async (inspectionId: number): Promise<ChecklistItem[]> => {
    try {
        const response = await axios.get(`/api/Inspection/${inspectionId}/checklist`);
        return response.data;
    } catch (error) {
        console.error('Error fetching inspection checklist:', error);
        throw error;
    }
};