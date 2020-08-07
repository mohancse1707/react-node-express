
export interface IBeerRecipes {
    id?: any;
    name?: string;
    tagline?: string;
    first_brewed?: string;
    description?: string;
    image_url?: string;
    brewers_tips?: string;
    contributed_by?: string;
    ph?: string;
}

export const defaultValue: Readonly<IBeerRecipes> = {
    id: '',
    name: '',
    tagline: '',
    first_brewed: '',
    description: '',
    image_url: '',
    brewers_tips: '',
    contributed_by: '',
    ph: ''
};