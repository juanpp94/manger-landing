export type Colors = "bright-red"  | "dark-blue"  | "dark-grayish-blue" | "very-dark-blue"  | "very-pale-red" | "vary-light-gray";
export type ObjButton = Record<string,Record<string,boolean>>;
export type ObjBanner = Record<string,Record<string,boolean>>;
export type ObjBullet = Record<string,Record<string,boolean>>;
export const ButtonsStyle: ObjButton = {
    "bright-red": {
        "bg-bright-red": true,
        "text-white": true,
        "text-lg":true,
        "font-normal":true,
        "shadow-bright-red/30":true,
        "shadow-xl":true,
        "w-48": true
    },
    "vary-light-gray": {
        "bg-vary-light-gray":true,
        "text-bright-red":true,
        "text-md": true,
        "font-semibold":true,
        "w-48":true,
    }
    
    
   
} 

export const BulletsStyle: ObjBullet = {
    "bright-red":{
        "bg-bright-red": true,
        "text-white": true,
        "text-lg":true,
        "w-16":true,
        "h-10":true,
        "font-bold":true
    }
}

export const BannersStyle: ObjBanner = {
    "bright-red": {
        "bg-bright-red": true,
        "text-white": true,
    }
}